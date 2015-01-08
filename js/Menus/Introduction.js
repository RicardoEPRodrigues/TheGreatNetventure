Scene.Introduction = function (game) {
    "use strict";
    this.starfield = null;
    this.bar = null;
    this.skipButton = null;
};

Scene.Introduction.prototype = {

    create: function () {
        "use strict";
        var style, text, choiseLabel;
        
        this.starfield = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'starfield');
        
        this.bar = this.game.add.sprite(this.game.world.width / 2, this.game.world.height - 320, 'monoButton');
        this.bar.anchor.set(0.5, 0.5);
        this.bar.width = 400;
        this.bar.height = 350;
        
        this.skipButton = this.game.add.button(this.game.world.centerX, this.game.world.height - 100, 'button', this.skipOnUp, this, 1, 0, 2);
        this.skipButton.anchor.set(0.5, 0.5);
        this.skipButton.width = 100;
        
        choiseLabel = this.game.add.text(this.game.world.centerX, this.game.world.height - 100, 'Skip', { font: '30px Arial', fill: '#fff' });
        choiseLabel.anchor.set(0.5, 0.5);
        
        choiseLabel = this.game.add.text(this.game.world.width / 2, this.game.world.height - 170, 'Clica para Continuar', { font: '30px Arial', fill: '#fff' });
        choiseLabel.anchor.setTo(0.5, 0.5);
        
        this.drawMenu("Olá! Eu sou o R2R2 e tu és um\n mensageiro cibernauta!\n\n O teu objectivo é entregares\n esta mensagem importante, que\n está encriptada,\n ao nosso posto de controlo.", function (scene) {
            scene.drawMenu("Mas tem cuidado, há muitos\n perigos por aí. Eu vou ser o\n teu guia na tua missão.\n\n Boa sorte!");
        });
    },

    skipOnUp : function (button, pointer, isOver) {
        "use strict";
        if (isOver) {
            this.game.state.start('LevelDemo');
        }
    },
    
    drawMenu : function (text, postfunction) {
        "use strict";
        if (postfunction) {
            this.postFunction = postfunction;
        }

        var textLabel;
        
        if (text) {
            textLabel = this.game.add.text(this.game.world.width / 2, this.game.world.height / 2 - 100, text, { font: 'bold 25px Arial', fill: '#fff' });
            textLabel.anchor.setTo(0.5, 0.0);
            textLabel.align = 'center';
        }

        this.game.input.onTap.addOnce(function () {
            //delete menu
            textLabel.destroy();
            if (this.postFunction) {
                this.postFunction(this);
                this.postFunction = null;
            } else { 
                this.game.state.start('LevelDemo');
            }
        }, this);
    },

    update : function () {
        "use strict";

        //  Scroll the background
        this.starfield.tilePosition.y += 6;
    }
};