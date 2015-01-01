function Spyware(game, x, y) {
    "use strict";
    Phaser.Sprite.call(this, game, x, y, 'spyware');
    this.anchor.setTo(0.5, 0.5);
    this.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
    this.play('fly');
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.moves = false;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
//    this.events.onOutOfBounds.add(this.outOfBoundsCheck, this);
}

Spyware.prototype = Object.create(Phaser.Sprite.prototype);
Spyware.prototype.constructor = Spyware;

//Virus.prototype.outOfBoundsCheck = function () {
//    "use strict";
//    if (this.y >= 700) {
//        this.kill();
//    }
//};