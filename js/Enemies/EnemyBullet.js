function EnemyBullet(game, x, y) {
    "use strict";
    Phaser.Sprite.call(this, game, x, y, 'enemyBullet');
    this.anchor.setTo(0.5, 1);
//    this.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
//    this.play('fly');
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
//    this.body.moves = false;
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    
}

EnemyBullet.prototype = Object.create(Phaser.Sprite.prototype);
EnemyBullet.prototype.constructor = EnemyBullet;