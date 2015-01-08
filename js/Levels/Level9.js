Scene.Level9 = function (game) {
    "use strict";
    Scene.Level0.call(this, game);
    this.minTimeToWin = 12;
    //this.multiplier = 4;
};

Scene.Level9.prototype = Object.create(Scene.Level0.prototype);
Scene.Level9.prototype.constructor = Scene.Level9;

Scene.Level9.prototype.createMalwares = function () {
    "use strict";
    var malware, tween, follower, k;
    this.stage.disableVisibilityChange = true;
    
    if (this.counter === 10) {
        
        this.boss = this.gameObjGenerator.getHacker(250, 0);
        this.malwares.add(this.boss);
        
        tween = this.game.add.tween(this.boss)
            .to({ x: 25, y: this.boss.position.y + 75}, 1000, Phaser.Easing.Linear.None)
            .to({ x: 475}, 2000, Phaser.Easing.Linear.None, true, 0, Infinity, true)
            .start();
    }
    
    for (k = 0; k < 3; k = k + 1) {
        malware = this.gameObjGenerator.getBasicVirus(k * 48 * 3 + 50, k * 50 + 50);
        this.malwares.add(malware);
                
        tween = this.game.add.tween(malware)
            .to({ x: malware.position.x + 100 }, 2000, Phaser.Easing.Linear.None)
            .to({ y: malware.position.y + 300 }, 1000, Phaser.Easing.Linear.None)
            .to({ x: malware.position.x + 100 }, 1000, Phaser.Easing.Linear.None)
            .to({ x: malware.position.x }, 2000, Phaser.Easing.Linear.None)
            .to({ y: malware.position.y + 400 - 50 * (k + 1) }, 1000, Phaser.Easing.Linear.None)
            .to({ y: 400 - 50 * (k + 1) }, 1000, Phaser.Easing.Linear.None)
            .to({ x: malware.position.x + 50 * (k + 1), y: malware.position.y + 200 }, 1000, Phaser.Easing.Linear.None)
            .to({ x: 100 * (k + 1), y: 200 }, 1000, Phaser.Easing.Linear.None)
            .to({ x: 500}, 1000, Phaser.Easing.Linear.None, true, 0, Infinity, true)
            .start();
    }
    
    if (this.counter === 1 || (this.counter > 2 && this.counter % 10 === 0)) {
        for (k = 0; k < 3; k = k + 1) {
            malware = this.gameObjGenerator.getWorm(k * 100 + 50, 0, 'wormhead');
            this.malwares.add(malware);

			tween = this.game.add.tween(malware)
                .to({ y: malware.position.y + 100}, 2000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 100, angle: -90}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 220}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 200, angle: 0}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 300}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 400}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 560}, 1500, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 100, angle: 90}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 400, angle: 180}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 300}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 200}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 100}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 100, angle: -90}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 200, angle: 0}, 1000, Phaser.Easing.Linear.None)
                .start();
            
            follower = this.gameObjGenerator.getFollower(k * 100 + 50, 0, Worm, malware, 'wormbody');
            this.malwares.add(follower);
            follower = this.gameObjGenerator.getFollower(k * 100 + 50, 0, Worm, follower, 'wormbody');
            this.malwares.add(follower);
            follower = this.gameObjGenerator.getFollower(k * 100 + 50, 0, Worm, follower, 'wormbody');
            this.malwares.add(follower);
        }
    }
    
    if (this.counter === 1 || (this.counter > 2 && this.counter % 6 === 0)) {
        
        for (k = 0; k < 3; k = k + 1) {
            malware = this.gameObjGenerator.getSpyware(k * 100 + 50, 500);
            this.malwares.add(malware);
                
            tween = this.game.add.tween(malware)
                .to({ y: malware.position.y - 200 }, 2000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 50 * (k + 1) }, 2000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 200}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y - 100}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y - 300}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y - 200}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 150, y: malware.position.y - 300}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y - 150 * (k + 1)}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x, y: malware.position.y - 300}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 250}, 1000, Phaser.Easing.Linear.None, true, 0, Infinity, true)
                .start();
        }
    }
};