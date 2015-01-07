function AntiSpywareBullet(game, x, y) {
    "use strict";
    Bullet.call(this, game, x, y, 'bulletSpyware');
    this.bulletType = BulletType.ANTISPYWARE;
}

AntiSpywareBullet.prototype = Object.create(Bullet.prototype);
AntiSpywareBullet.prototype.constructor = AntiSpywareBullet;