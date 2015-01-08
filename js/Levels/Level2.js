Scene.Level2 = function (game) {
    "use strict";
    Scene.Level0.call(this, game);
    this.minTimeToWin = 24;
    this.maxTimeToWin = 120;
    //this.mutiplier = 1;
};

Scene.Level2.prototype = Object.create(Scene.Level0.prototype);
Scene.Level2.prototype.constructor = Scene.Level2;

Scene.Level2.prototype.createMalwares = function () {
    "use strict";
    // insert code here
    var k, malware, tween;

    //        console.log(this.counter);

    if (this.counter > 1 && this.counter % 5 === 0) {
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
    
    if (this.counter > 1 && (this.counter % 3 === 0 || this.counter % 10 === 0)) {
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