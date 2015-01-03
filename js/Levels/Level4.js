Scene.Level4 = function (game) {
    "use strict";
    Scene.Level0.call(this, game);
    this.minTimeToWin = 24;
    this.maxTimeToWin = 120;
    this.mutiplier = 2;
};

Scene.Level4.prototype = Object.create(Scene.Level0.prototype);
Scene.Level4.prototype.constructor = Scene.Level4;

Scene.Level4.prototype.createMalwares = function () {
    "use strict";
    // insert code here
    var k, malware, tween, follower;

    //        console.log(this.counter);

    if (this.counter > 1 && this.counter % 7 === 0) {
        for (k = 0; k < 3; k = k + 1) {
            malware = this.gameObjGenerator.getWorm(k * 100 + 150, 0, 'wormhead');
            this.malwares.add(malware);

			tween = this.game.add.tween(malware)
                .to({ y: malware.position.y + 100}, 2000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 100}, 2000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x - 100 + 100 * k, y: malware.position.y + 300}, 2000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x - 100 + 100 * k, y: malware.position.y + 550 - 50 * (k % 2)}, 3000, Phaser.Easing.Linear.None)
                .to({ x: 250, y: malware.position.y + 550 - 50 * (k % 2), angle: -90 + 90 * k}, 2000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x, y: malware.position.y + 500, angle: -180}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x, y: malware.position.y + 350}, 2000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x, y: malware.position.y + 100}, 2000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x, y: malware.position.y + 300, angle: 0}, 2000, Phaser.Easing.Linear.None)
                .start();
            
            follower = this.gameObjGenerator.getFollower(k * 100 + 150, 0, Worm, malware, 'wormbody');
            this.malwares.add(follower);
            follower = this.gameObjGenerator.getFollower(k * 100 + 150, 0, Worm, follower, 'wormbody');
            this.malwares.add(follower);
            follower = this.gameObjGenerator.getFollower(k * 100 + 150, 0, Worm, follower, 'wormbody');
            this.malwares.add(follower);
        }
    }

    if (this.counter === 2 || (this.counter > 1 && (this.counter % 10 === 0))) {
        for (k = 0; k < 3; k = k + 1) {
            malware = this.gameObjGenerator.getWorm(k * 100 + 150, 0, 'wormhead');
            this.malwares.add(malware);

			tween = this.game.add.tween(malware)
                .to({ y: malware.position.y + 100}, 2000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 100}, 2000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 200}, 2000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 300}, 2000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 450}, 3000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 300, angle: 180}, 2000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 200}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 100}, 2000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 200, angle: 0}, 2000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 300}, 3000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 450}, 3000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 300, angle: 180}, 3000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 400, angle: 0}, 3000, Phaser.Easing.Linear.None)
                .start();
            
            follower = this.gameObjGenerator.getFollower(k * 100 + 150, 0, Worm, malware, 'wormbody');
            this.malwares.add(follower);
            follower = this.gameObjGenerator.getFollower(k * 100 + 150, 0, Worm, follower, 'wormbody');
            this.malwares.add(follower);
            follower = this.gameObjGenerator.getFollower(k * 100 + 150, 0, Worm, follower, 'wormbody');
            this.malwares.add(follower);
        }
    }
};