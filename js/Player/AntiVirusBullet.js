function AntiVirusBullet(game, x, y) {
    "use strict";
    Bullet.call(this, game, x, y, 'bullet');
    this.bulletType = BulletType.ANTIVIRUS;
    this.width = 15;
}

AntiVirusBullet.prototype = Object.create(Bullet.prototype);
AntiVirusBullet.prototype.constructor = AntiVirusBullet;