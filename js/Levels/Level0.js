Scene.Level0 = function (game) {
    "use strict";
    // characters info
    this.player = null;
    this.malwares = null;
    this.boss = 'undefined';
    this.livingEnemies = [];

    // Bullet info
    this.bullets = null;
    this.bulletDelay = 300;
    this.bulletSpeed = -500;
    this.numberOfBullets = 3;
    this.lastBulletShotAt = 0;
    this.firingTimer = 0;
    this.enemyFireDelay = 2000;
    this.enemyBullets = null;
    this.initialBulletTypesLock = [true, false, false];
    this.bulletTypesLock = null;
    this.activeBullet = BulletType.ANTIVIRUS;

    // controls info
    this.cursors = null;
    this.fireButton = null;
    this.firstWeaponButton = null;
    this.secondWeaponButton = null;
    this.thirdWeaponButton = null;

    // special effects
    this.explosions = null;
    this.starfield = null;

    // HUD info
    this.score = 0;
    this.scoreString = '';
    this.scoreText = null;
    this.multiplier = 1;
    this.lives = null;
    this.stateText = null;
    this.bulletTypesDisplay = null;


    this.gameObjGenerator = null;

    this.counter = 0;

    this.minTimeToWin = 5;
    this.maxTimeToWin = 9999999;

    this.won = false;

    this.active = true;

    //HUD Menu
    this.infoMenu = null;
};

Scene.Level0.prototype = {

    // initialization func
    create : function () {
        "use strict";
        var i, ship, bullet, bulletMenu, text;

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //  The scrolling starfield background
        this.starfield = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'starfield');

        this.gameObjGenerator = new EnemyGenerator(this.game);

        this.bulletTypesLock = this.initialBulletTypesLock.slice(0);
        //  Our bullet group
        this.bullets = this.game.add.group();
        for (i = 0; i < 10; i = i + 1) {
            bullet = this.gameObjGenerator.getAntiVirusBullet(200, 200);
            bullet.kill();
            this.bullets.add(bullet);
        }
        for (i = 0; i < 10; i = i + 1) {
            bullet = this.gameObjGenerator.getAntiSpywareBullet(200, 200);
            bullet.kill();
            this.bullets.add(bullet);
        }
        for (i = 0; i < 10; i = i + 1) {
            bullet = this.gameObjGenerator.getSecurityUpdateBullet(200, 200);
            bullet.kill();
            this.bullets.add(bullet);
        }

        bulletMenu = this.game.add.sprite(this.game.world.width - 10, this.game.world.height - 10, 'monoButton');
        bulletMenu.anchor.setTo(1, 1);
        bulletMenu.height = 60;
        bulletMenu.alpha = 0.5;

        text = this.game.add.text(this.game.world.width - 20, this.game.world.height - 10, 1, { font: '28px Arial', fill: '#fff' });
        text.anchor.setTo(1, 1);
        text = this.game.add.text(this.game.world.width - 60, this.game.world.height - 10, 2, { font: '28px Arial', fill: '#fff' });
        text.anchor.setTo(1, 1);
        text = this.game.add.text(this.game.world.width - 110, this.game.world.height - 10, 3, { font: '28px Arial', fill: '#fff' });
        text.anchor.setTo(1, 1);

        this.bulletTypesDisplay = this.game.add.group();
        bullet = this.gameObjGenerator.getAntiVirusBullet(this.game.world.width - 40, this.game.world.height - 15);
        this.bulletTypesDisplay.add(bullet);
        if (!this.bulletTypesLock[0]) {
            bullet.kill();
        }
        bullet = this.gameObjGenerator.getAntiSpywareBullet(this.game.world.width - 90, this.game.world.height - 15);
        this.bulletTypesDisplay.add(bullet);
        if (!this.bulletTypesLock[1]) {
            bullet.kill();
        }
        bullet = this.gameObjGenerator.getSecurityUpdateBullet(this.game.world.width - 140, this.game.world.height - 30);
        this.bulletTypesDisplay.add(bullet);
        if (!this.bulletTypesLock[2]) {
            bullet.kill();
        }
        this.updateBulletTypes();

        //        this.bullets.enableBody = true;
        //        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        //        this.bullets.createMultiple(30, 'bullet');
        //        this.bullets.setAll('anchor.x', 0.5);
        //        this.bullets.setAll('anchor.y', 1);
        //        this.bullets.setAll('outOfBoundsKill', true);
        //        this.bullets.setAll('checkWorldBounds', true);

        // The enemy's bullets
        this.enemyBullets = this.game.add.group();
        for (i = 0; i < 30; i = i + 1) {
            bullet = this.gameObjGenerator.getEnemyBullet(200, 200);
            bullet.kill();
            this.enemyBullets.add(bullet);
        }

        this.infoMenu = this.game.add.group();

        //  The hero!
        this.player = this.game.add.sprite(250, this.game.world.height, 'ship');
        this.player.anchor.setTo(0.5, 0.5);

        this.game.add.tween(this.player).to({ y: 500 }, 800, Phaser.Easing.Linear.None).start();

        this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.collideWorldBounds = true;

        //  The baddies!
        this.malwares = this.game.add.group();

        //  The score
        this.scoreString = 'Score : ';
        this.scoreText = this.game.add.text(10, 10, this.scoreString + this.score, { font: '34px Arial', fill: '#fff' });

        //  Lives 
        // game.world.width - 230
        this.lives = this.game.add.group();
        this.game.add.text(10, this.game.world.height - 10 - 34, 'Lives : ', { font: '34px Arial', fill: '#fff' });

        for (i = 0; i < 3; i = i + 1) {
            ship = this.lives.create(130 + (40 * i), this.game.world.height - 28, 'ship');
            ship.anchor.setTo(0.5, 0.5);
            ship.angle = 90;
            ship.alpha = 0.6;
        }

        //  Text
        this.stateText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, ' ', { font: '76px Arial', fill: '#fff' });
        this.stateText.anchor.setTo(0.5, 0.5);
        this.stateText.visible = false;

        //  An explosion pool
        this.explosions = this.game.add.group();
        this.explosions.createMultiple(30, 'kaboom');
        this.explosions.forEach(this.setExplosionAnimation, this);

        //  And some controls to play the game with
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.firstWeaponButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ONE);
        this.secondWeaponButton = this.game.input.keyboard.addKey(Phaser.Keyboard.TWO);
        this.thirdWeaponButton = this.game.input.keyboard.addKey(Phaser.Keyboard.THREE);

        this.game.time.events.loop(Phaser.Timer.SECOND, this.updateMalwares, this);
    },

    setExplosionAnimation : function (invader) {
        "use strict";

        invader.anchor.x = 0.5;
        invader.anchor.y = 0.5;
        invader.animations.add('kaboom');

    },

    descend : function () {
        "use strict";

        this.malwares.y += 10;

    },

    update : function () {
        "use strict";

        //  Scroll the background
        this.starfield.tilePosition.y += 6;

        this.bulletTypesDisplay.forEach(function (child) {
            if (this.bulletTypesLock[child.bulletType - 1]) {
                child.revive();
            }
        }, this);

        //  Reset the player, then check for movement keys
        this.player.body.velocity.setTo(0, 0);
        if (this.active) {

            if (this.cursors.left.isDown) {
                this.player.body.velocity.x = -200;
            } else if (this.cursors.right.isDown) {
                this.player.body.velocity.x = 200;
            }

            if (this.cursors.up.isDown) {
                this.player.body.velocity.y = -200;
            } else if (this.cursors.down.isDown) {
                this.player.body.velocity.y = 200;
            }

            //Weapon switch
            if (this.firstWeaponButton.isDown) {
                this.switchWeapon(BulletType.ANTIVIRUS);
            }
            if (this.secondWeaponButton.isDown) {
                this.switchWeapon(BulletType.ANTISPYWARE);
            }
            if (this.thirdWeaponButton.isDown) {
                this.switchWeapon(BulletType.SECURITYUPDATES);
            }

            //  Firing?
            if (this.fireButton.isDown) {
                this.fireBullet();
            }

            if (this.game.time.now > this.firingTimer) {
                this.enemyFires();
            }

            //  Run collision
            this.game.physics.arcade.overlap(this.bullets, this.malwares, this.collisionHandler, null, this);
            this.game.physics.arcade.overlap(this.enemyBullets, this.player, this.enemyBulletHitsPlayer, null, this);
            this.game.physics.arcade.overlap(this.malwares, this.player, this.enemyHitsPlayer, null, this);

            this.checkWin();
        }
    },

    switchWeapon : function (bulletType) {
        "use strict";
        if (bulletType) {
            if (bulletType !== this.activeBullet && this.bulletTypesLock[bulletType - 1]) {
                this.activeBullet = bulletType;
                this.updateBulletTypes();
            }
        }
    },

    updateBulletTypes : function () {
        "use strict";

        this.bulletTypesDisplay.forEach(function (child) {
            if (child.bulletType === this.activeBullet) {
                child.alpha = 1;
            } else {
                child.alpha = 0.6;
            }
        }, this);
    },

    render : function () {
        "use strict";
        // for (var i = 0; i < this.malwares.length; i++)
        // {
        //     this.game.debug.body(this.malwares.children[i]);
        // }

    },

    checkWin : function () {
        "use strict";
        if (this.malwares.countLiving() === 0 && this.lives.countLiving() !== 0 || this.maxTimeToWin <= this.counter ||  this.boss.alive === false) {
            if (this.counter >= this.minTimeToWin) {
                this.enemyBullets.callAll('kill');

                if (!this.won) {
                    if (this.score === 0) {
                        this.score += 1000;
                    }

                    if (this.lives.countLiving() === 3) {
                        this.score += 50;
                    }

                    this.scoreText.text = this.scoreString + this.score;
                    this.won = true;
                }

                this.active = false;

                this.drawMenu("Parabéns! A mensagem foi\n entregue com sucesso!");

                //the "click to restart" handler
                this.game.input.onTap.addOnce(this.restart, this);
            }
        }
    },

    checkDeath : function () {
        "use strict";

        // When the player dies
        if (this.lives.countLiving() < 1) {
            this.active = false;
            this.player.kill();
            this.enemyBullets.callAll('kill');

            this.stateText.text = " GAME OVER\n    Clica para\n   recomeçar";
            this.stateText.visible = true;

            //the "click to restart" handler
            this.game.input.onTap.addOnce(this.restart, this);
        }
    },

    killPlayer : function () {
        "use strict";
        var live = this.lives.getFirstAlive(), explosion;

        if (live) {
            live.kill();
        }

        //  And create an explosion :)
        explosion = this.explosions.getFirstExists(false);
        explosion.reset(this.player.body.x, this.player.body.y);
        explosion.play('kaboom', 30, false, true);

        this.checkDeath();
    },

    collisionHandler : function (bullet, malware) {
        "use strict";
        var explosion, angleToRotate;

        //  When a bullet hits an malware we kill them both
        bullet.kill();

        if (bullet.bulletType === malware.weakness) {
            if (malware.lives === 1) {
                malware.kill();
                //  Increase the score
                this.score += 20 * this.multiplier;
                this.scoreText.text = this.scoreString + this.score;

                //  And create an explosion :)
                explosion = this.explosions.getFirstExists(false);
                explosion.reset(malware.body.x, malware.body.y);
                explosion.play('kaboom', 30, false, true);
            } else {
                malware.lives = malware.lives - 1;
                angleToRotate = 30 * (3.14 / 90);
                //            malware.rotation = angleToRotate;
                this.game.add.tween(malware)
                    .to({ x : malware.position.x + 5}, 50, Phaser.Easing.Linear.None)
                    .to({ x : malware.position.x - 10}, 100, Phaser.Easing.Linear.None, false, 0, 2, true)
                    .to({ x : malware.position.x - 5}, 50, Phaser.Easing.Linear.None)
                    .start();
            }
        }
    },

    enemyBulletHitsPlayer : function (player, bullet) {
        "use strict";

        bullet.kill();

        this.killPlayer();

    },

    enemyHitsPlayer : function (player, malware) {
        "use strict";

        malware.kill();

        this.killPlayer();

    },

    enemyFires : function () {
        "use strict";

        if (this.lives.countLiving() === 0) {
            return;
        }

        //  Grab the first bullet we can from the pool
        var enemyBullet = this.enemyBullets.getFirstExists(false), livingEnemies = [], random, shooter;

        this.malwares.forEachAlive(function (malware) {

            // put every living enemy in an array
            livingEnemies.push(malware);
        });
        this.livingEnemies = livingEnemies;


        if (enemyBullet && this.livingEnemies.length > 0) {

            random = this.game.rnd.integerInRange(0, this.livingEnemies.length - 1);

            // randomly select one of them
            shooter = this.livingEnemies[random];
            // And fire the bullet from this enemy
            enemyBullet.reset(shooter.body.x, shooter.body.y);

            this.game.physics.arcade.moveToObject(enemyBullet, this.player, 120);
            this.firingTimer = this.game.time.now + this.enemyFireDelay;
        }

    },

    fireBullet : function () {
        "use strict";

        //  To avoid them being allowed to fire too fast we set a time limit
        if (this.game.time.now - this.lastBulletShotAt < this.bulletDelay) {
            return;
        }
        this.lastBulletShotAt = this.game.time.now;

        if (this.bullets.countLiving() > this.numberOfBullets) {
            return;
        }

        //  Grab the first bullet we can from the pool
        var bullet;
        this.bullets.forEachDead(function (child) {
            if (child.bulletType === this.activeBullet) {
                bullet = child;
            }
        }, this);

        if (bullet) {
            //  And fire it
            bullet.reset(this.player.x, this.player.y + 8);
            bullet.body.velocity.x = 0;
            bullet.body.velocity.y = this.bulletSpeed;
        }

    },

    resetBullet : function (bullet) {
        "use strict";

        //  Called if the bullet goes out of the screen
        bullet.kill();

    },

    restart : function () {
        "use strict";

        //  A new level starts

        this.enemyFireDelay = 2000;

        //resets the life count
        this.lives.callAll('revive');
        //  And brings the malwares back from the dead :)
        this.malwares.removeAll();
        //        this.createMalwares();
        this.enemyBullets.callAll('kill');

        //revives the player
        this.player.revive();
        //hides the text
        this.stateText.visible = false;

        this.score = 0;
        this.scoreText.text = this.scoreString + this.score;

        this.counter = 0;

        this.won = false;

        this.active = true;

        this.bulletTypesLock = this.initialBulletTypesLock.slice(0);
        this.activeBullet = BulletType.ANTIVIRUS;
        this.updateBulletTypes();

//        this.game.state.start('LevelsMenu');
        this.game.state.start('MainMenu');
    },

    updateMalwares : function () {
        "use strict";
        if (!this.active) {
            return;
        }
        if (!this.won) {
            this.createMalwares();
        }

        this.counter = this.counter + 1;
    },

    drawMenu : function (text, sprite, postfunction) {
        "use strict";
        this.active = false;
        if (postfunction) {
            this.postFunction = postfunction;
        }
        // draw menu
        var choiseLabel, textLabel, spriteCopy,
            menuBack = new Phaser.Sprite(this.game, this.game.world.width / 2, this.game.world.height / 2, 'monoButton');
        menuBack.anchor.setTo(0.5, 0.5);
        menuBack.height = 400;
        menuBack.width = 400;
        this.infoMenu.add(menuBack);

        // And a label to illustrate which menu item was chosen. (This is not necessary)
        if (this.won === true) {
            choiseLabel = this.game.add.text(this.game.world.width / 2, this.game.world.height - 150, 'Clica para Sair', { font: '30px Arial', fill: '#fff' });
            choiseLabel.anchor.setTo(0.5, 0.5);
            this.infoMenu.add(choiseLabel);
        } else {
            choiseLabel = this.game.add.text(this.game.world.width / 2, this.game.world.height - 150, 'Clica para Continuar', { font: '30px Arial', fill: '#fff' });
            choiseLabel.anchor.setTo(0.5, 0.5);
            this.infoMenu.add(choiseLabel);
        }

        if (text) {
            textLabel = this.game.add.text(this.game.world.width / 2, this.game.world.height / 2 - 100, text, { font: '30px Arial', fill: '#fff' });
            textLabel.anchor.setTo(0.5, 0.0);
            textLabel.align = 'center';
            this.infoMenu.add(textLabel);
        }

        if (sprite) {
            spriteCopy = this.game.add.sprite(this.game.world.width / 2, this.game.world.height / 2 - 150, sprite.key, sprite.frame);
            spriteCopy.anchor.set(0.5, 0.5);
            this.infoMenu.add(spriteCopy);
        }

        this.game.world.bringToTop(this.infoMenu);

        this.game.input.onTap.addOnce(function () {
            //delete menu
            this.infoMenu.destroy();
            this.infoMenu = this.game.add.group();
            this.active = true;
            if (this.postFunction) {
                this.postFunction(this);
                this.postFunction = null;
            }
        }, this);
    },

    createMalwares : function () {
        "use strict";
        var k, malware, follower;
        //        if (this.counter === 1) {
        //            this.drawMenu("Arrow keys to Move te ship.\n\nSPACE to fire.",
        //                          this.player,
        //                          function (scene) {
        //                    scene.drawMenu("Let's get ready\nTO RUMBLE!", this.player);
        //                });
        //        }
        if (this.counter === 3) {
            for (k = 0; k < 3; k = k + 1) {
                malware = this.gameObjGenerator.getSpyware(k * 48 * 3 + 50, k * 50 + 50);
                this.malwares.add(malware);
                //            malware = this.malwares.create(k * 48 * 3, k * 50, 'invader');
                //            malware.anchor.setTo(0.5, 0.5);
                //            malware.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
                //            malware.play('fly');
                //            malware.body.moves = false;
                //            malware.checkWorldBounds = true;
                //            malware.outOfBoundsKill = true;

                //                this.game.add.tween(malware).to({ x: malware.position.x + 100 }, 2000, Phaser.Easing.Linear.None)
                //                    .to({ y: malware.position.y + 300 }, 1000, Phaser.Easing.Linear.None)
                //                    .to({ x: malware.position.x }, 2000, Phaser.Easing.Linear.None)
                //                    .to({ y: malware.position.y + 100 }, 1000, Phaser.Easing.Linear.None)
                //                    .start();
                //
                //                follower = this.gameObjGenerator.getFollower(k * 48 * 3 + 50, k * 50 + 50 + 10, Virus, malware);
                //                this.malwares.add(follower);
            }
        }
    }

};