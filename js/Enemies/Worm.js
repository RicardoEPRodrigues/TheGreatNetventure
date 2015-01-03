function Worm(game, x, y, bodypart) {
    "use strict";
    Phaser.Sprite.call(this, game, x, y, bodypart);
    this.anchor.setTo(0.5, 0.5);
    this.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
    this.play('fly');
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
}

Worm.prototype = Object.create(Phaser.Sprite.prototype);
Worm.prototype.constructor = Worm;
