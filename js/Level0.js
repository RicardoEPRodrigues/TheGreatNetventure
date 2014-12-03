Scene.Level0 = function (game) {
    "use strict";
    // characters info
    this.player = null;
    this.aliens = null;

    this.livingEnemies = [];

    // Bullet info
    this.bullets = null;
    this.bulletDelay = 300;
    this.bulletSpeed = -500;
    this.numberOfBullets = 3;
    this.lastBulletShotAt = 0;
    this.firingTimer = 0;

    // controls info
    this.cursors = null;
    this.fireButton = null;

    // special effects
    this.explosions = null;
    this.starfield = null;

    // HUD info
    this.score = 0;
    this.scoreString = '';
    this.scoreText = null;
    this.lives = null;
    this.stateText = null;
};

Scene.Level0.prototype = {


    //    preload : function () {
    //        "use strict";
    //        this.game.load.image('bullet', 'assets/images/static/bullet.png');
    //        this.game.load.image('enemyBullet', 'assets/images/static/enemy-bullet.png');
    //        this.game.load.image('ship', 'assets/images/static/player.png');
    //
    //        this.game.load.spritesheet('invader', 'assets/images/dynamic/invader32x32x4.png', 32, 32);
    //        this.game.load.spritesheet('kaboom', 'assets/images/dynamic/explode.png', 128, 128);
    //
    //        this.game.load.image('starfield', 'assets/images/backgrounds/starfield.png');
    //    },

    // initialization func
    create : function () {
        "use strict";

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //  The scrolling starfield background
        this.starfield = this.game.add.tileSprite(0, 0, 500, 600, 'starfield');

        //  Our bullet group
        this.bullets = this.game.add.group();
        this.bullets.enableBody = true;
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.bullets.createMultiple(30, 'bullet');
        this.bullets.setAll('anchor.x', 0.5);
        this.bullets.setAll('anchor.y', 1);
        this.bullets.setAll('outOfBoundsKill', true);
        this.bullets.setAll('checkWorldBounds', true);

        // The enemy's bullets
        this.enemyBullets = this.game.add.group();
        this.enemyBullets.enableBody = true;
        this.enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.enemyBullets.createMultiple(30, 'enemyBullet');
        this.enemyBullets.setAll('anchor.x', 0.5);
        this.enemyBullets.setAll('anchor.y', 1);
        this.enemyBullets.setAll('outOfBoundsKill', true);
        this.enemyBullets.setAll('checkWorldBounds', true);

        //  The hero!
        this.player = this.game.add.sprite(250, 500, 'ship');
        this.player.anchor.setTo(0.5, 0.5);
        this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.collideWorldBounds = true;

        //  The baddies!
        this.aliens = this.game.add.group();
        this.aliens.enableBody = true;
        this.aliens.physicsBodyType = Phaser.Physics.ARCADE;
        this.createAliens();

        //  The score
        this.scoreString = 'Score : ';
        this.scoreText = this.game.add.text(10, 10, this.scoreString + this.score, { font: '34px Arial', fill: '#fff' });

        //  Lives 
        // game.world.width - 230
        this.lives = this.game.add.group();
        this.game.add.text(10, this.game.world.height - 10 - 34, 'Lives : ', { font: '34px Arial', fill: '#fff' });

        var i, ship;
        for (i = 0; i < 3; i = i + 1) {
            ship = this.lives.create(130 + (30 * i), this.game.world.height - 28, 'ship');
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
    },

    createAliens : function () {
        "use strict";

        //    for (var y = 0; y < 4; y++)
        //    {
        //        for (var x = 0; x < 10; x++)
        //        {
        //            var alien = aliens.create(x * 48, y * 50, 'invader');
        //            alien.anchor.setTo(0.5, 0.5);
        //            alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
        //            alien.play('fly');
        //            alien.body.moves = false;
        //            alien.checkWorldBounds = true;
        //            alien.outOfBoundsKill = true;
        //        }
        //    }
        var k, alien, tween;
        for (k = 0; k < 3; k = k + 1) {
            alien = this.aliens.create(k * 48 * 3, k * 50, 'invader');
            alien.anchor.setTo(0.5, 0.5);
            alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
            alien.play('fly');
            alien.body.moves = false;
            alien.checkWorldBounds = true;
            alien.outOfBoundsKill = true;

            tween = this.game.add.tween(alien).to({ x: alien.position.x + 100 }, 2000, Phaser.Easing.Linear.None)
            .to({ y: alien.position.y + 300 }, 1000, Phaser.Easing.Linear.None)
            .to({ x: alien.position.x }, 2000, Phaser.Easing.Linear.None)
            .to({ y: alien.position.y + 100 }, 1000, Phaser.Easing.Linear.None)
            .start();
        }

        this.aliens.x = 100;
        this.aliens.y = 50;

        //  All this does is basically start the invaders moving. Notice we're moving the Group they belong to, rather than the invaders directly.
        //    var tween = game.add.tween(aliens).to( { x: 200 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

        //  When the tween loops it calls descend
        //    tween.onLoop.add(descend, this);
    },

    setExplosionAnimation : function (invader) {
        "use strict";

        invader.anchor.x = 0.5;
        invader.anchor.y = 0.5;
        invader.animations.add('kaboom');

    },

    descend : function () {
        "use strict";

        this.aliens.y += 10;

    },

    update : function () {
        "use strict";

        //  Scroll the background
        this.starfield.tilePosition.y += 6;

        //  Reset the player, then check for movement keys
        this.player.body.velocity.setTo(0, 0);

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

        //  Firing?
        if (this.fireButton.isDown) {
            this.fireBullet();
        }

        if (this.game.time.now > this.firingTimer) {
            this.enemyFires();
        }

        //  Run collision
        this.game.physics.arcade.overlap(this.bullets, this.aliens, this.collisionHandler, null, this);
        this.game.physics.arcade.overlap(this.enemyBullets, this.player, this.enemyHitsPlayer, null, this);

    },

    render : function () {
        "use strict";

        // for (var i = 0; i < this.aliens.length; i++)
        // {
        //     this.game.debug.body(this.aliens.children[i]);
        // }

    },

    collisionHandler : function (bullet, alien) {
        "use strict";

        //  When a bullet hits an alien we kill them both
        bullet.kill();
        alien.kill();

        //  Increase the score
        this.score += 20;
        this.scoreText.text = this.scoreString + this.score;

        //  And create an explosion :)
        var explosion = this.explosions.getFirstExists(false);
        explosion.reset(alien.body.x, alien.body.y);
        explosion.play('kaboom', 30, false, true);

        if (this.aliens.countLiving() === 0) {
            this.score += 1000;
            this.scoreText.text = this.scoreString + this.score;

            this.enemyBullets.callAll('kill', this);
            this.stateText.text = " You Won,\n    Click\n to restart";
            this.stateText.visible = true;

            //the "click to restart" handler
            this.game.input.onTap.addOnce(this.restart, this);
        }

    },

    enemyHitsPlayer : function (player, bullet) {
        "use strict";

        bullet.kill();

        var live = this.lives.getFirstAlive(), explosion;

        if (live) {
            live.kill();
        }

        //  And create an explosion :)
        explosion = this.explosions.getFirstExists(false);
        explosion.reset(this.player.body.x, this.player.body.y);
        explosion.play('kaboom', 30, false, true);

        // When the player dies
        if (this.lives.countLiving() < 1) {
            this.player.kill();
            this.enemyBullets.callAll('kill');

            this.stateText.text = " GAME OVER\n        Click\n    to restart";
            this.stateText.visible = true;

            //the "click to restart" handler
            this.game.input.onTap.addOnce(this.restart, this);
        }

    },

    enemyFires : function () {
        "use strict";

        //  Grab the first bullet we can from the pool
        var enemyBullet = this.enemyBullets.getFirstExists(false), livingEnemies = [], random, shooter;

        this.aliens.forEachAlive(function (alien) {

            // put every living enemy in an array
            livingEnemies.push(alien);
        });
        this.livingEnemies = livingEnemies;


        if (enemyBullet && this.livingEnemies.length > 0) {

            random = this.game.rnd.integerInRange(0, this.livingEnemies.length - 1);

            // randomly select one of them
            shooter = this.livingEnemies[random];
            // And fire the bullet from this enemy
            enemyBullet.reset(shooter.body.x, shooter.body.y);

            this.game.physics.arcade.moveToObject(enemyBullet, this.player, 120);
            this.firingTimer = this.game.time.now + 2000;
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
        var bullet = this.bullets.getFirstExists(false);

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

        //resets the life count
        this.lives.callAll('revive');
        //  And brings the aliens back from the dead :)
        this.aliens.removeAll();
        this.createAliens();

        //revives the player
        this.player.revive();
        //hides the text
        this.stateText.visible = false;

    }

};