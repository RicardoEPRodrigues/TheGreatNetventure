Scene.Level1 = function (game) {
    "use strict";
    Scene.Level0.call(this, game);
};

Scene.Level1.prototype = Object.create(Scene.Level0.prototype);
Scene.Level1.prototype.constructor = Scene.Level1;

Scene.Level1.prototype.updateMalwares = function () {
    "use strict";
    // insert code here
    var k, alien, tween;

    //        console.log(this.counter);

    if (this.counter === 1) {
        for (k = 0; k < 3; k = k + 1) {
            alien = this.gameObjGenerator.getBasicVirus(k * 48 * 3 + 50, k * 50 + 50);
            this.aliens.add(alien);

            tween = this.game.add.tween(alien).to({ x: alien.position.x + 100 }, 2000, Phaser.Easing.Linear.None)
            .to({ y: alien.position.y + 300 }, 1000, Phaser.Easing.Linear.None)
            .to({ x: alien.position.x }, 2000, Phaser.Easing.Linear.None)
            .to({ y: alien.position.y + 100 }, 1000, Phaser.Easing.Linear.None)
            .start();
        }
    }

    this.counter = this.counter + 1;
};