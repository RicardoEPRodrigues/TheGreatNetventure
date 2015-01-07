function Hacker(game, x, y) {
    "use strict";
    Phaser.Sprite.call(this, game, x, y, 'hacker');
    this.anchor.setTo(0.5, 0.5);
    this.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
    this.play('fly');
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
//    this.body.moves = false;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.lives = 5;
//    this.events.onOutOfBounds.add(this.outOfBoundsCheck, this);
    this.weakness = BulletType.SECURITYUPDATES;
}

Hacker.prototype = Object.create(Phaser.Sprite.prototype);
Hacker.prototype.constructor = Hacker;