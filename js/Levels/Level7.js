Scene.Level7 = function (game) {
    "use strict";
    Scene.Level0.call(this, game);
    this.minTimeToWin = 24;
    this.maxTimeToWin = 120;
    //this.multiplier = 3;
};

Scene.Level7.prototype = Object.create(Scene.Level0.prototype);
Scene.Level7.prototype.constructor = Scene.Level7;

Scene.Level7.prototype.createMalwares = function () {
    "use strict";
    // insert code here
    var k, malware, tween;

    //        console.log(this.counter);
    
//    if (this.counter > 1 && this.counter % 5 === 0) {
//        for (k = 0; k < 4; k = k + 1) {
//            malware = this.gameObjGenerator.getSpyware(k * 100 + 100, 0);
//            this.malwares.add(malware);
//
//			tween = this.game.add.tween(malware)
//            .to({ y: malware.position.y + 100, alpha: 0}, 1000, Phaser.Easing.Linear.None)
//            .to({ x: malware.position.x + 10 * (k+1), y: malware.position.y + 100 * (k+1), alpha: 0}, 1000, Phaser.Easing.Linear.None)
//            .to({ x: malware.position.x + 10 * (k+2), y: malware.position.y + 100 * (k+2), alpha: 100}, 1000, Phaser.Easing.Linear.None)
//            .to({ x: malware.position.x + 30 * k, alpha: 100}, 1000, Phaser.Easing.Linear.None)
//            .to({ x: malware.position.x - 30 * (k+1), alpha: 0}, 1000, Phaser.Easing.Linear.None)
//            .to({ x: malware.position.x, y: malware.position.y + 450, alpha: 0}, 1000, Phaser.Easing.Linear.None)
//            .to({ x: malware.position.x, y: malware.position.y + 100, alpha: 100}, 1000, Phaser.Easing.Linear.None)
//            .to({ y: malware.position.y + 100, alpha: 100}, 1000, Phaser.Easing.Linear.None)
//            .to({ x: malware.position.x + 10 * (k+1), y: malware.position.y + 100 * (k+1), alpha: 0}, 1000, Phaser.Easing.Linear.None)
//            .to({ x: malware.position.x + 10 * (k+2), y: malware.position.y + 100 * (k+2), alpha: 0}, 1000, Phaser.Easing.Linear.None)
//            .to({ x: malware.position.x + 30 * (k+1), alpha: 100}, 1000, Phaser.Easing.Linear.None)
//            .to({ x: malware.position.x - 30 * (k+1), alpha: 100}, 1000, Phaser.Easing.Linear.None)
//            .to({ x: malware.position.x, y: malware.position.y + 450, alpha: 0}, 1000, Phaser.Easing.Linear.None)
//            .to({ y: malware.position.y + 300, alpha: 100}, 1000, Phaser.Easing.Linear.None)
//			.start();
//        }
//    }
//    
//    if (this.counter > 1 && (this.counter % 3 === 0 || this.counter % 10 === 0)) {
//        for (k = 0; k < 3; k = k + 1) {
//            malware = this.gameObjGenerator.getSpyware(k * 100 + 150, 0);
//            this.malwares.add(malware);
//
//			tween = this.game.add.tween(malware)
//            .to({ y: malware.position.y + 100, alpha: 0}, 1000, Phaser.Easing.Linear.None)
//            .to({ y: malware.position.y + 50 * (k+1), alpha: 0}, 2000, Phaser.Easing.Linear.None)
//			.to({ x: malware.position.x - 100 * (k+1), y: malware.position.y + 200 * k, alpha: 100 }, 1000, Phaser.Easing.Linear.None)
//            .to({ x: malware.position.x + 50 * k, y: malware.position.y + 300 - (5*k), alpha: 100}, 1000, Phaser.Easing.Linear.None)
//			.to({ x: malware.position.x, y: malware.position.y + 400 , alpha: 0}, 1000, Phaser.Easing.Linear.None)
//			.to({ y: malware.position.y + 200 , alpha: 0}, 2000, Phaser.Easing.Linear.None)
//			.to({ y: malware.position.y + 200, alpha: 100}, 2000, Phaser.Easing.Linear.None)
//			.to({ x: malware.position.x - 100, y: malware.position.y + 300 , alpha: 100}, 1000, Phaser.Easing.Linear.None)
//            .to({ x: malware.position.x + 100, y: malware.position.y + 400 , alpha: 0}, 1000, Phaser.Easing.Linear.None)
//			.to({ x: malware.position.x, y: malware.position.y + 500 , alpha: 0}, 1000, Phaser.Easing.Linear.None)
//			.to({ x: malware.position.x, y: malware.position.y + 300, alpha: 100 }, 2000, Phaser.Easing.Linear.None)
//            .to({ x: malware.position.x + 450, y: malware.position.y + 300, alpha: 100 }, 1000, Phaser.Easing.Linear.None)
//			.start();
//        }
//    }
    
    if (this.counter > 1 && this.counter % 5 === 0) {
        for (k = 0; k < 4; k = k + 1) {
            malware = this.gameObjGenerator.getSpyware(k * 100 + 100, 0);
            this.malwares.add(malware);

			tween = this.game.add.tween(malware)
                .to({ y: malware.position.y + 100}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 10 * (k + 1), y: malware.position.y + 100 * (k + 1)}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 10 * (k + 2), y: malware.position.y + 100 * (k + 2)}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 30 * k}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x - 30 * (k + 1)}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x, y: malware.position.y + 450}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x, y: malware.position.y + 100}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 100}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 10 * (k + 1), y: malware.position.y + 100 * (k + 1)}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 10 * (k + 2), y: malware.position.y + 100 * (k + 2)}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 30 * (k + 1)}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x - 30 * (k + 1)}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x, y: malware.position.y + 450}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 300}, 1000, Phaser.Easing.Linear.None)
                .start();
        }
    }
    
    if (this.counter > 1 && (this.counter % 3 === 0 || this.counter % 10 === 0)) {
        for (k = 0; k < 3; k = k + 1) {
            malware = this.gameObjGenerator.getSpyware(k * 100 + 150, 0);
            this.malwares.add(malware);

			tween = this.game.add.tween(malware)
                .to({ y: malware.position.y + 100}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 50 * (k + 1)}, 2000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x - 100 * (k + 1), y: malware.position.y + 200 * k }, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 50 * k, y: malware.position.y + 300 - (5 * k)}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x, y: malware.position.y + 400 }, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 200 }, 2000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 200}, 2000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x - 100, y: malware.position.y + 300 }, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 100, y: malware.position.y + 400 }, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x, y: malware.position.y + 500 }, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x, y: malware.position.y + 300 }, 2000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 450, y: malware.position.y + 300 }, 1000, Phaser.Easing.Linear.None)
                .start();
        }
    }
};