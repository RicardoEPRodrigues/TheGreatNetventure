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

    getHacker : function (x, y) {
        "use strict";
        var alien = new Hacker(this.game, x, y);
        return alien;
    },

    getAntiVirusBullet : function (x, y) {
        "use strict";
        var bullet = new AntiVirusBullet(this.game, x, y);
        return bullet;
    },

    getAntiSpywareBullet : function (x, y) {
        "use strict";
        var bullet = new AntiSpywareBullet(this.game, x, y);
        return bullet;
    },

    getSecurityUpdateBullet : function (x, y) {
        "use strict";
        var bullet = new SecurityUpdateBullet(this.game, x, y);
        return bullet;
    },

    getEnemyBullet : function (x, y) {
        "use strict";
        var bullet = new EnemyBullet(this.game, x, y);
        return bullet;
    },

    getFollower : function (x, y, type, target, bodypart) {
        "use strict";
        var follower = new Follower(this.game, x, y, type, target, bodypart);
        return follower;
    }
};