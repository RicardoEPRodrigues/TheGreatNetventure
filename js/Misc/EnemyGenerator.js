function EnemyGenerator(game) {
    "use strict";
    this.game = game;
}

EnemyGenerator.prototype = {
    getBasicVirus : function (x, y) {
        "use strict";
        var alien = this.game.add.sprite(x, y, 'invader');
        alien.anchor.setTo(0.5, 0.5);
        alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
        alien.play('fly');
        this.game.physics.enable(alien, Phaser.Physics.ARCADE);
//        alien.body.moves = false;
        alien.checkWorldBounds = true;
        alien.outOfBoundsKill = true;
        return alien;
    }
};