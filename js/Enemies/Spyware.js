function Spyware(game, x, y) {
    "use strict";
    Phaser.Sprite.call(this, game, x, y, 'spyware');
    this.anchor.setTo(0.5, 0.5);
    this.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
    this.play('fly');
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
//    this.body.moves = false;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.lives = 2;
    this.multiplier = 2;
    //    this.events.onOutOfBounds.add(this.outOfBoundsCheck, this);
    this.weakness = BulletType.ANTISPYWARE;

    game.add.tween(this)
        .to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None)
        .to({ alpha: 1}, 1000, Phaser.Easing.Linear.None)
        .loop().start();
}

Spyware.prototype = Object.create(Phaser.Sprite.prototype);
Spyware.prototype.constructor = Spyware;
