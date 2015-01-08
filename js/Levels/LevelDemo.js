Scene.LevelDemo = function (game) {
    "use strict";
    Scene.Level0.call(this, game);
    this.minTimeToWin = 102;
    //this.multiplier = 4;
};

Scene.LevelDemo.prototype = Object.create(Scene.Level0.prototype);
Scene.LevelDemo.prototype.constructor = Scene.LevelDemo;

Scene.LevelDemo.prototype.createMalwares = function () {
    "use strict";
    var malware, tween, follower, k;
    this.stage.disableVisibilityChange = true;

    // Intro
    if (this.counter === 1) {
        this.drawMenu("Usa as teclas das setas\npara mover a nave",
                      this.player,
                      function (scene) {
                scene.drawMenu("Isto é uma bala de \nAnti-Virus! Prime\n ESPAÇO para disparar.", this.bullets.getAt(0));
            }
                     );
    }

    //Virus walks into a bar...
    if (this.counter === 5) {
        for (k = 0; k < 3; k = k + 1) {
            malware = this.gameObjGenerator.getBasicVirus(k * 48 * 3 + 80, 0);
            this.malwares.add(malware);

            this.game.add.tween(malware).to({y : 60}, 1000, Phaser.Easing.Linear.None).start();
        }
        this.drawMenu("Estes são os Vírus\n\nEles vão tentar destruir\n os teus ficheiros!\n\nTens que os deter!", this.malwares.getBottom());
    }
    
    // Wave of Virus - Dance number one
    if (this.counter >= 10 && this.counter <= 20 && this.counter % 4 === 0) {
        for (k = 0; k < 3; k = k + 1) {
            malware = this.gameObjGenerator.getBasicVirus(k * 48 * 3 + 10, 0);
            this.malwares.add(malware);

            tween = this.game.add.tween(malware)
                .to({y : malware.position.y + 100}, 1000, Phaser.Easing.Linear.None)
                .to({x: malware.position.x + 200, y : malware.position.y + 200}, 1000, Phaser.Easing.Linear.None)
                .to({x: malware.position.x, y : malware.position.y + 300}, 1000, Phaser.Easing.Linear.None)
                .to({x: malware.position.x + 200, y : malware.position.y + 400}, 1000, Phaser.Easing.Linear.None)
                .to({x: malware.position.x, y : malware.position.y + 500}, 1000, Phaser.Easing.Linear.None)
                .to({x: malware.position.x + 100, y : malware.position.y + 300}, 1000, Phaser.Easing.Linear.None)
                .to({y: malware.position.y + this.game.world.height + 100}, 3000, Phaser.Easing.Linear.None)
                .start();
        }
    }
    
    // Wave of Virus - Dance number two
    if (this.counter >= 10 && this.counter <= 20 && this.counter % 5 === 0) {
        for (k = 0; k < 3; k = k + 1) {
            malware = this.gameObjGenerator.getBasicVirus(k * 48 * 3 + 10, 0);
            this.malwares.add(malware);

            tween = this.game.add.tween(malware)
                .to({y : malware.position.y + 100}, 1000, Phaser.Easing.Linear.None)
                .to({x: malware.position.x + 50 * (k + 1), y : malware.position.y + 200}, 1000, Phaser.Easing.Linear.None)
                .to({x: malware.position.x, y : malware.position.y + 300}, 1000, Phaser.Easing.Linear.None)
                .to({x: malware.position.x + 100, y : malware.position.y + 200}, 1000, Phaser.Easing.Linear.None)
                .to({x: malware.position.x + 200, y : malware.position.y + 50 * (k + 1)}, 1000, Phaser.Easing.Linear.None)
                .to({x: malware.position.x + 100, y : malware.position.y + 300}, 1000, Phaser.Easing.Linear.None)
                .to({y: malware.position.y + this.game.world.height + 100}, 3000, Phaser.Easing.Linear.None)
                .start();
        }
    }
    
    //The Spywares arrive...
    if (this.counter === 30) {
        
        for (k = 0; k < 3; k = k + 1) {
            malware = this.gameObjGenerator.getSpyware(k * 48 * 3 + 80, 0);
            this.malwares.add(malware);

            this.game.add.tween(malware).to({y : 60}, 1000, Phaser.Easing.Linear.None).start();
        }
        
        this.drawMenu("Estes são os Spywares.\n\nEles vão espiar tudo\n o que fazes!\n\nTu sabes o que fazer!", this.malwares.getTop());
    }
    
    if (this.counter === 35) {
        this.drawMenu("Mas que...?\n\nAs balas de Anti-Vírus\n não funcionam?\n\nEspera, acho que tenho aqui\n algo para ti...", this.malwares.getTop(), function (scene) {
            scene.bulletTypesLock[BulletType.ANTISPYWARE - 1] = true;
            scene.drawMenu("Aqui está\nIsto é uma bala de\n Anti-Spyware\nAcaba com eles!\n\nPrime a tecla '2'\n para mudar a bala", this.bullets.getAt(10));
        });
    }
    
    // Wave of Spywares
    if (this.counter >= 45 && this.counter <= 55 && this.counter % 4 === 0) {
        for (k = 0; k < 4; k = k + 1) {
            malware = this.gameObjGenerator.getSpyware(k * 100 + 100, 0);
            this.malwares.add(malware);
            
            tween = this.game.add.tween(malware)
                .to({ y: malware.position.y + 100}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 10 * (k + 1), y: malware.position.y + 100 * (k + 1)}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 10 * (k + 2), y: malware.position.y + 100 * (k + 2)}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 30 * k}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x - 30 * (k + 1)}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x, y: malware.position.y + 300}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 100}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 10 * (k + 1), y: malware.position.y + 100 * (k + 1)}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + this.game.world.height + 100}, 2000, Phaser.Easing.Linear.None)
                .start();
        }
    }
    
    // Wave two. Let the game begin
    
    // Virus!    
    if (this.counter >= 65 && this.counter <= 85 && this.counter % 6 === 0) {
        for (k = 0; k < 4; k = k + 1) {
            malware = this.gameObjGenerator.getBasicVirus(k * 100 + 100, 0);
            this.malwares.add(malware);
            
            tween = this.game.add.tween(malware)
                .to({ y: malware.position.y + 200}, 2000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 90}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 300}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x - 90}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 400}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 200}, 2000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + this.game.world.height + 100}, 3000, Phaser.Easing.Linear.None)
                .start();
        }
    }
    
    // Spywares!
    if (this.counter >= 60 && this.counter <= 90 && this.counter % 10 === 0) {
        for (k = 0; k < 3; k = k + 1) {
            malware = this.gameObjGenerator.getSpyware(k * 100 + 200, 0);
            this.malwares.add(malware);
            
            tween = this.game.add.tween(malware)
                .to({ y: malware.position.y + 100}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x - 190}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 200}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x + 90}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 300 }, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x - 190}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 390}, 1000, Phaser.Easing.Linear.None)
                .to({ x: malware.position.x}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + 200}, 1000, Phaser.Easing.Linear.None)
                .to({ y: malware.position.y + this.game.world.height + 100}, 2000, Phaser.Easing.Linear.None)
                .start();
        }
    }
    
    // Boss Fight!
    if (this.counter === 100) {

        this.boss = this.gameObjGenerator.getHacker(250, 0);
        this.malwares.add(this.boss);

        this.enemyFireDelay = 1000;
        
        tween = this.game.add.tween(this.boss)
            .to({ x: 25, y: this.boss.position.y + 75}, 1000, Phaser.Easing.Linear.None)
            .to({ x: 475}, 2000, Phaser.Easing.Linear.None, true, 0, Infinity, true)
            .start();
        
        this.drawMenu("Mas o que é isto?\n\nÉ um Hacker!\nIsto não é bom!\n\nEle vai tentar roubar \na tua informação\n para fazer chantagem!", this.boss, function (scene) {
            scene.bulletTypesLock[BulletType.SECURITYUPDATES - 1] = true;
            scene.drawMenu("Aqui está!\n\n A bala de Actualizações\n de Segurança, boa sorte!", this.bullets.getAt(20));
        });
    }
    
    // Wall of Spywares and virus    
    if (this.counter >= 100 && this.counter % 10 === 0) {
        for (k = 0; k < 6; k = k + 1) {
            
            malware = this.gameObjGenerator.getBasicVirus(0, 300);
            this.malwares.add(malware);
            tween = this.game.add.tween(malware).to({ x: k * 95 + 10}, 2000, Phaser.Easing.Linear.None).start();
            
            malware = this.gameObjGenerator.getSpyware(0, 200);
            this.malwares.add(malware);
            tween = this.game.add.tween(malware).to({ x: k * 95 + 10}, 2000, Phaser.Easing.Linear.None).start();
            
            this.enemyFireDelay = 1000;
        }
    }
    
    if (this.counter >= 95 && (this.counter - 100) % 8 === 0) {
        this.enemyFireDelay = 500;
    }
};