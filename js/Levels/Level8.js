Scene.Level8 = function (game) {
    "use strict";
    Scene.Level0.call(this, game);
    this.minTimeToWin = 24;
    this.maxTimeToWin = 120;
    //this.multiplier = 3;
};

Scene.Level8.prototype = Object.create(Scene.Level0.prototype);
Scene.Level8.prototype.constructor = Scene.Level8;

Scene.Level8.prototype.createMalwares = function () {
    "use strict";
    // insert code here
    var k, malware, tween;

    //        console.log(this.counter);
    
    if (this.counter > 1 && this.counter % 5 === 0) {
        for (k = 0; k < 4; k = k + 1) {
            malware = this.gameObjGenerator.getSpyware(k * 100 + 100, 0);
            this.malwares.add(malware);

			tween = this.game.add.tween(malware)
                .to({ y: malware.position.y + 100}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 50, y: malware.position.y + 100}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 10 * (k + 1), y: malware.position.y + 100 * (k + 2)}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 10 * k}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x - 30 * (k + 1)}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 60 * (k + 1)}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 500 - 100 * (k + 1)}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x, y: malware.position.y + 100}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 50, y: malware.position.y + 100}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 10 * (k + 1), y: malware.position.y + 100 * (k + 2)}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 10 * k}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x - 30 * (k + 1)}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 60 * (k + 1)}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 500 - 100 * (k + 1)}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x, y: malware.position.y + 300}, 1000, Phaser.Easing.Linear.None)
                .start();
        }
    }
    
    if (this.counter > 1 && (this.counter % 3 === 0 || this.counter % 10 === 0)) {
        for (k = 0; k < 5; k = k + 1) {
            malware = this.gameObjGenerator.getSpyware(k * 100 + 50, 0);
            this.malwares.add(malware);

			tween = this.game.add.tween(malware)
                .to({ y: malware.position.y + 100, alpha: 0}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 200 - 30 * (k + 1)}, 2000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 100 * (k + 1)}, 2000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x, y: malware.position.y + 500}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x, y: malware.position.y + 400}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 200 - 30 * (k + 1)}, 2000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 100 * (k + 1)}, 2000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 100, alpha: 0}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 200 - 30 * (k + 1)}, 2000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 100 * (k + 1)}, 2000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x, y: malware.position.y + 500}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x, y: malware.position.y + 400}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 200 - 30 * (k + 1)}, 2000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 100 * (k + 1)}, 2000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 300}, 2000, Phaser.Easing.Linear.None)
                .start();
        }
    }
};