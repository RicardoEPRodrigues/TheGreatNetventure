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
        this.updatesButton.width = 140;
        
        style = { font: "bold 22px Arial", fill: "#ffffff", align: "center" };
        
        text = this.game.add.text(this.game.world.centerX, 200, 'Anti-virus', style);
        text.anchor.set(0.5, 0.5);
                
        text = this.game.add.text(this.game.world.centerX, 300, 'Anti-spyware', style);
        text.anchor.set(0.5, 0.5);
            
        text = this.game.add.text(this.game.world.centerX, 400, 'Updates', style);
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
                                  'Anti-virus is a class of program that\n\nwill prevent and detect incoming\n\nviruses or search them in your\n\nhard drive in order to kill them all.', 'bullet', 'protection');
        }
    },
    
    antispywareOnUp : function (button, pointer, isOver) {
        "use strict";
        //  In this example if the Pointer is no longer over the Button, then we'll treat it
        //  as if the user cancelled the operation and didn't want to press the Button after all

        if (isOver) {
            this.game.state.start('InformationScreen', true, false,
                                  'Anti-spywares can provide real-time\n\nprotection, they scan all incoming\n\nnetwork data for spyware and blocks\n\nany threats it detects. Such programs\n\n inspect the contents of the computer\n\n and remove files and entries, that\n\nmatch with a list of known spywares.',
                                  'bulletSpyware', 'protection');
        }
    },
    
    updatesOnUp : function (button, pointer, isOver) {
        "use strict";
        //  In this example if the Pointer is no longer over the Button, then we'll treat it
        //  as if the user cancelled the operation and didn't want to press the Button after all

        if (isOver) {
            this.game.state.start('InformationScreen', true, false,
                                  'Security updates prevent hackers from\n\nexploiting the vulnerabilities of your\n\nsystem, so it is really\n\nimportant to keep every program\n\nand operative system updated',
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