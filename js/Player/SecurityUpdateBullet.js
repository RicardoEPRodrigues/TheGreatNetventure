function SecurityUpdateBullet(game, x, y) {
    "use strict";
    Bullet.call(this, game, x, y, 'bulletHacker');
    this.bulletType = BulletType.SECURITYUPDATES;
}

SecurityUpdateBullet.prototype = Object.create(Bullet.prototype);
SecurityUpdateBullet.prototype.constructor = SecurityUpdateBullet;