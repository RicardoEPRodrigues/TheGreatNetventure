Scene.Level2 = function (game) {
    "use strict";
    Scene.Level0.call(this, game);
    this.minTimeToWin = 24;
};

Scene.Level2.prototype = Object.create(Scene.Level0.prototype);
Scene.Level2.prototype.constructor = Scene.Level2;

Scene.Level2.prototype.createAliens = function () {
    "use strict";
    // insert code here
    var k, alien, tween;

    //        console.log(this.counter);

    if (this.counter > 1 && this.counter % 5 === 0) {
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
    
    if (this.counter > 1 && (this.counter % 3 === 0 || this.counter % 10 === 0)) {
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
};