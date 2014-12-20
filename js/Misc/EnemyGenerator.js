function EnemyGenerator(game) {
    "use strict";
    this.game = game;
}

EnemyGenerator.prototype = {
    getBasicVirus : function (x, y) {
        "use strict";
        var alien = new Virus(this.game, x, y);
        return alien;
    },
    
    getPlayerBullet : function (x, y) {
        "use strict";
        var bullet = new Bullet(this.game, x, y);
        return bullet;
    }
};