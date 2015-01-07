Scene.ProtectionMenu = function (game) {
    "use strict";
    this.starfield = null;
    this.antivirusButton = null;
    this.antispywareButton = null;
    this.updatesButton = null;
    this.backButton = null;
};

Scene.ProtectionMenu.prototype = {

    create: function () {
        "use strict";
        var style, text;
        
        this.starfield = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'starfield');
        this.antivirusButton = this.game.add.button(this.game.world.centerX, 200, 'button', this.antivirusOnUp, this, 1, 0, 2);
        this.antivirusButton.width = 160;
        this.antivirusButton.anchor.set(0.5, 0.5);
        
        this.antispywareButton = this.game.add.button(this.game.world.centerX, 300, 'button', this.antispywareOnUp, this, 1, 0, 2);
        this.antispywareButton.anchor.set(0.5, 0.5);
        this.antispywareButton.width = 180;
        
        this.updatesButton = this.game.add.button(this.game.world.centerX, 400, 'button', this.updatesOnUp, this, 1, 0, 2);
        this.updatesButton.anchor.set(0.5, 0.5);
        this.updatesButton.width = 180;
        
        style = { font: "bold 22px Arial", fill: "#ffffff", align: "center" };
        
        text = this.game.add.text(this.game.world.centerX, 200, 'Anti-virus', style);
        text.anchor.set(0.5, 0.5);
                
        text = this.game.add.text(this.game.world.centerX, 300, 'Anti-spyware', style);
        text.anchor.set(0.5, 0.5);
            
        text = this.game.add.text(this.game.world.centerX, 400, 'Actualizações', style);
        text.anchor.set(0.5, 0.5);
        
        this.backButton = this.game.add.button(this.game.world.centerX, this.game.world.height - 100, 'backButton', this.backOnUp, this, 1, 0, 2);
        this.backButton.anchor.set(0.5, 0.5);
    },
  
    antivirusOnUp : function (button, pointer, isOver) {
        "use strict";
        //  In this example if the Pointer is no longer over the Button, then we'll treat it
        //  as if the user cancelled the operation and didn't want to press the Button after all

        if (isOver) {
            this.game.state.start('InformationScreen', true, false,
                                  'Um anti-virus é um programa que ajuda\n\n a prevenir e detectar ataques de virus.\n\n E permite também verificar no disco\n\n rígido, de forma a eliminá-los.', 'bullet', 'protection');
        }
    },
    
    antispywareOnUp : function (button, pointer, isOver) {
        "use strict";
        //  In this example if the Pointer is no longer over the Button, then we'll treat it
        //  as if the user cancelled the operation and didn't want to press the Button after all

        if (isOver) {
            this.game.state.start('InformationScreen', true, false,
                                  'Os anti-spywares fornecem protecção\n\n em tempo real verificando os dados\n\n da rede à procura de spywares e\n\n bloqueando qualquer possível ameaça.\n\n Estes programas verificam o\n\n conteúdo do computador e removem \n\nficheiros que constam numa\n\n lista de spywares conhecidos.',
                                  'bulletSpyware', 'protection');
        }
    },
    
    updatesOnUp : function (button, pointer, isOver) {
        "use strict";
        //  In this example if the Pointer is no longer over the Button, then we'll treat it
        //  as if the user cancelled the operation and didn't want to press the Button after all

        if (isOver) {
            this.game.state.start('InformationScreen', true, false,
                                  'As actualizaçoes de segurança ajudam\n\na prevenir possíveis ataques de \n\nhackers, corrigindo vulnerabilidades \n\nque possam existir no sistema. Daí ser \n\nimportante manter os programas\n\n e o sistema operativo actualizados',
                                  'bulletHacker', 'protection');
        }
    },

    backOnUp : function (button, pointer, isOver) {
        "use strict";
        if (isOver) {
            this.game.state.start('MainMenu');
        }
    },

    update : function () {
        "use strict";

        //  Scroll the background
        this.starfield.tilePosition.y += 6;
    }
};