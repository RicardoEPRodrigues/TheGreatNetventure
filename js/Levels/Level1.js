Scene.Level1 = function (game) {
    "use strict";
    Scene.Level0.call(this, game);
    this.minTimeToWin = 24;
    this.maxTimeToWin = 120;
    this.mutiplier = 1;
};

Scene.Level1.prototype = Object.create(Scene.Level0.prototype);
Scene.Level1.prototype.constructor = Scene.Level1;

Scene.Level1.prototype.createMalwares = function () {
    "use strict";
    // insert code here
    var k, malware, tween;

    //        console.log(this.counter);

    if (this.counter === 1 || this.counter === 15) {
        for (k = 0; k < 3; k = k + 1) {
            malware = this.gameObjGenerator.getBasicVirus(k * 100 + 150, 0);
            this.malwares.add(malware);

			tween = this.game.add.tween(malware)
            .to({ y: malware.position.y + 100}, 1000, Phaser.Easing.Linear.None)
            .to({ y: malware.position.y + 100}, 2000, Phaser.Easing.Linear.None)
			.to({ x: malware.position.x + 100, y: malware.position.y + 200 }, 1000, Phaser.Easing.Linear.None)
            .to({ x: malware.position.x - 100, y: malware.position.y + 300 }, 1000, Phaser.Easing.Linear.None)
			.to({ x: malware.position.x, y: malware.position.y + 400 }, 1000, Phaser.Easing.Linear.None)
			.to({ y: malware.position.y + 200 }, 2000, Phaser.Easing.Linear.None)
			.to({ y: malware.position.y + 200}, 2000, Phaser.Easing.Linear.None)
			.to({ x: malware.position.x + 100, y: malware.position.y + 300 }, 1000, Phaser.Easing.Linear.None)
            .to({ x: malware.position.x - 100, y: malware.position.y + 400 }, 1000, Phaser.Easing.Linear.None)
			.to({ x: malware.position.x, y: malware.position.y + 500 }, 1000, Phaser.Easing.Linear.None)
			.to({ x: malware.position.x, y: malware.position.y + 300 }, 2000, Phaser.Easing.Linear.None)
            .to({ x: malware.position.x - 450, y: malware.position.y + 300 }, 1000, Phaser.Easing.Linear.None)
			.start();
        }
    }
    
    if (this.counter === 8 || this.counter === 22) {
        for (k = 0; k < 3; k = k + 1) {
            malware = this.gameObjGenerator.getBasicVirus(k * 100 + 150, 0);
            this.malwares.add(malware);

			tween = this.game.add.tween(malware)
            .to({ y: malware.position.y + 100}, 1000, Phaser.Easing.Linear.None)
            .to({ y: malware.position.y + 100}, 2000, Phaser.Easing.Linear.None)
			.to({ x: malware.position.x - 100, y: malware.position.y + 200 }, 1000, Phaser.Easing.Linear.None)
            .to({ x: malware.position.x + 100, y: malware.position.y + 300 }, 1000, Phaser.Easing.Linear.None)
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