Scene.LevelDemo = function (game) {
    "use strict";
    Scene.Level0.call(this, game);
    this.minTimeToWin = 91;
    this.multiplier = 4;
};

Scene.LevelDemo.prototype = Object.create(Scene.Level0.prototype);
Scene.LevelDemo.prototype.constructor = Scene.LevelDemo;

Scene.LevelDemo.prototype.createMalwares = function () {
    "use strict";
    var malware, tween, follower, k;
    this.stage.disableVisibilityChange = true;

    // Intro
    if (this.counter === 1) {
        this.drawMenu("Use the Arrow keys\nto Move te ship",
                      this.player,
                      function (scene) {
                scene.drawMenu("This is an Anti-Virus Bullet!\nPress SPACE to shoot.", this.bullets.getTop());
            }
                     );
    }

    //Virus walks into a bar...
    if (this.counter === 5) {
        for (k = 0; k < 3; k = k + 1) {
            malware = this.gameObjGenerator.getBasicVirus(k * 48 * 3 + 80, 0);
            this.malwares.add(malware);

            this.game.add.tween(malware).to({y : 60}, 1000, Phaser.Easing.Linear.None).start();
        }
        this.drawMenu("These are Virus\n\nThey will try to\ndestroy your Files!\n\nYou must stop them!", this.malwares.getTop());
    }
    
    // Ate aos 20 segundos por mais virus
    
    //The Spywares arrive...
    if (this.counter === 25) {
        
        for (k = 0; k < 3; k = k + 1) {
            malware = this.gameObjGenerator.getSpyware(k * 48 * 3 + 80, 0);
            this.malwares.add(malware);

            this.game.add.tween(malware).to({y : 60}, 1000, Phaser.Easing.Linear.None).start();
        }
        
        this.drawMenu("These are Spywares\n\nThey will try to\nspy on what you do!\n\nYou know what to do!", this.malwares.getTop());
    }
    
    if (this.counter === 28) {
        this.drawMenu("What?\n\nThe Anti-Virus Bullets\ndon't work?\n\nWait, I may have something\nhere for you...", this.malwares.getTop(), function (scene) {
            this.drawMenu("Here you go\nThis is a Anti-Spyware Bullet\nNow Finish Them!\n\nTo Switch Weapon\npress the number keys");
        });
    }
    
    // Ate ao 40 segundos por mais spywares
    // Ate ao 60 segundos por mais spywares e virus

    // Boss Fight!
    if (this.counter === 90) {

        this.boss = this.gameObjGenerator.getHacker(250, 0);
        this.malwares.add(this.boss);

        this.enemyFireDelay = 1000;
        
        tween = this.game.add.tween(this.boss)
            .to({ x: 25, y: this.boss.position.y + 75}, 1000, Phaser.Easing.Linear.None)
            .to({ x: 475}, 2000, Phaser.Easing.Linear.None, true, 0, Infinity, true)
            .start();
        
        this.drawMenu("What's that?\n\nIt's a Hacker!\nThat's not good!\n\nIt tries to hack you and\nuse your information to\nblackmail you!", this.boss, function (scene) {
            scene.drawMenu("But we may still\nhave a chance!\n\nYou have to remember,\nKeep your computer\nupdated!", scene.boss);
        });
    }
};