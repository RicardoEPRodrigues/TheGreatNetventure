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

    getSpyware : function (x, y) {
        "use strict";
        var alien = new Spyware(this.game, x, y);
        return alien;
    },
    
    getWorm : function (x, y, bodypart) {
        "use strict";
        var alien = new Worm(this.game, x, y, bodypart);
        return alien;
    },

    getPlayerBullet : function (x, y) {
        "use strict";
        var bullet = new Bullet(this.game, x, y);
        return bullet;
    },

    getFollower : function (x, y, type, target, bodypart) {
        "use strict";
        var follower = new Follower(this.game, x, y, type, target, bodypart);
        return follower;
    }
};