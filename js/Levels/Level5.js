Scene.Level5 = function (game) {
    "use strict";
    Scene.Level0.call(this, game);
    this.minTimeToWin = 24;
    this.maxTimeToWin = 120;
    //this.mutiplier = 2;
};

Scene.Level5.prototype = Object.create(Scene.Level0.prototype);
Scene.Level5.prototype.constructor = Scene.Level5;

Scene.Level5.prototype.createMalwares = function () {
    "use strict";
    // insert code here
    var k, malware, tween, follower;

    //        console.log(this.counter);

    if (this.counter === 2 || (this.counter > 1 && this.counter % 7 === 0)) {
       
        malware = this.gameObjGenerator.getWorm(250, 0, 'wormhead');
        this.malwares.add(malware);

		tween = this.game.add.tween(malware)
            .to({ y: malware.position.y + 300}, 2000, Phaser.Easing.Linear.None)
            .to({ x: malware.position.x - 200, angle: 90}, 2000, Phaser.Easing.Linear.None)
            .to({ y: malware.position.y + 400, angle: 0}, 1000, Phaser.Easing.Linear.None)
            .to({ y: malware.position.y + 500}, 2000, Phaser.Easing.Linear.None)
            .to({ y: malware.position.y + 550}, 1000, Phaser.Easing.Linear.None)
            .to({ x: malware.position.x, angle: -90}, 2000, Phaser.Easing.Linear.None)
            .to({ y: malware.position.y + 450, angle: -180}, 1000, Phaser.Easing.Linear.None)
            .to({ y: malware.position.y + 350}, 1000, Phaser.Easing.Linear.None)
            .to({ y: malware.position.y + 250}, 1000, Phaser.Easing.Linear.None)
            .to({ x: malware.position.x + 200, angle: -90}, 2000, Phaser.Easing.Linear.None)
            .to({ y: malware.position.y + 400, angle: 0}, 1000, Phaser.Easing.Linear.None)
            .to({ y: malware.position.y + 500}, 1000, Phaser.Easing.Linear.None)
            .to({ y: malware.position.y + 550}, 1000, Phaser.Easing.Linear.None)
            .to({ x: malware.position.x, angle: 90}, 2000, Phaser.Easing.Linear.None)
            .to({ y: malware.position.y + 400, angle: 180}, 2000, Phaser.Easing.Linear.None)
            .to({ y: malware.position.y + 250}, 2000, Phaser.Easing.Linear.None)
            .to({ y: malware.position.y + 50}, 2000, Phaser.Easing.Linear.None)
            .to({ x: malware.position.x - 150 , angle: -270}, 2000, Phaser.Easing.Linear.None)
            .to({ y: malware.position.y + 300, angle: 0}, 2000, Phaser.Easing.Linear.None)
            .start();
            
        follower = this.gameObjGenerator.getFollower(250, 0, Worm, malware, 'wormbody');
        this.malwares.add(follower);
        
        for (k = 0; k < 15; k = k + 1) {
            follower = this.gameObjGenerator.getFollower(250, 0, Worm, follower, 'wormbody');
            this.malwares.add(follower);
        }
    }

};