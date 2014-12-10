Scene.Level1 = function (game) {
    "use strict";
    Scene.Level0.call(this, game);
    this.minTimeToWin = 24;
};

Scene.Level1.prototype = Object.create(Scene.Level0.prototype);
Scene.Level1.prototype.constructor = Scene.Level1;

Scene.Level1.prototype.updateMalwares = function () {
    "use strict";
    // insert code here
    var k, alien, tween;

    //        console.log(this.counter);

    if (this.counter === 1 || this.counter === 15) {
        for (k = 0; k < 3; k = k + 1) {
            alien = this.gameObjGenerator.getBasicVirus(k * 100 + 150, 0);
            this.aliens.add(alien);

			tween = this.game.add.tween(alien)
            .to({ y: alien.position.y + 100}, 1000, Phaser.Easing.Linear.None)
            .to({ y: alien.position.y + 100}, 2000, Phaser.Easing.Linear.None)
			.to({ x: alien.position.x + 100, y: alien.position.y + 200 }, 1000, Phaser.Easing.Linear.None)
            .to({ x: alien.position.x - 100, y: alien.position.y + 300 }, 1000, Phaser.Easing.Linear.None)
			.to({ x: alien.position.x, y: alien.position.y + 400 }, 1000, Phaser.Easing.Linear.None)
			.to({ y: alien.position.y + 200 }, 2000, Phaser.Easing.Linear.None)
			.to({ y: alien.position.y + 200}, 2000, Phaser.Easing.Linear.None)
			.to({ x: alien.position.x + 100, y: alien.position.y + 300 }, 1000, Phaser.Easing.Linear.None)
            .to({ x: alien.position.x - 100, y: alien.position.y + 400 }, 1000, Phaser.Easing.Linear.None)
			.to({ x: alien.position.x, y: alien.position.y + 500 }, 1000, Phaser.Easing.Linear.None)
			.to({ x: alien.position.x, y: alien.position.y + 300 }, 2000, Phaser.Easing.Linear.None)
            .to({ x: alien.position.x - 450, y: alien.position.y + 300 }, 1000, Phaser.Easing.Linear.None)
			.start();
        }
    }
    
    if (this.counter === 8 || this.counter === 22) {
        for (k = 0; k < 3; k = k + 1) {
            alien = this.gameObjGenerator.getBasicVirus(k * 100 + 150, 0);
            this.aliens.add(alien);

			tween = this.game.add.tween(alien)
            .to({ y: alien.position.y + 100}, 1000, Phaser.Easing.Linear.None)
            .to({ y: alien.position.y + 100}, 2000, Phaser.Easing.Linear.None)
			.to({ x: alien.position.x - 100, y: alien.position.y + 200 }, 1000, Phaser.Easing.Linear.None)
            .to({ x: alien.position.x + 100, y: alien.position.y + 300 }, 1000, Phaser.Easing.Linear.None)
			.to({ x: alien.position.x, y: alien.position.y + 400 }, 1000, Phaser.Easing.Linear.None)
			.to({ y: alien.position.y + 200 }, 2000, Phaser.Easing.Linear.None)
			.to({ y: alien.position.y + 200}, 2000, Phaser.Easing.Linear.None)
			.to({ x: alien.position.x - 100, y: alien.position.y + 300 }, 1000, Phaser.Easing.Linear.None)
            .to({ x: alien.position.x + 100, y: alien.position.y + 400 }, 1000, Phaser.Easing.Linear.None)
			.to({ x: alien.position.x, y: alien.position.y + 500 }, 1000, Phaser.Easing.Linear.None)
			.to({ x: alien.position.x, y: alien.position.y + 300 }, 2000, Phaser.Easing.Linear.None)
            .to({ x: alien.position.x + 450, y: alien.position.y + 300 }, 1000, Phaser.Easing.Linear.None)
			.start();
        }
    }
	
	

    this.counter = this.counter + 1;
};