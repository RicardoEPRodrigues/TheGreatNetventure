Scene.MainMenu = function (game) {
    "use strict";
    this.starfield = null;
    this.playButton = null;
    this.virusButton = null;
    this.protectionButton = null;
};

Scene.MainMenu.prototype = {

    create: function () {
        "use strict";
        this.starfield = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'starfield');
        this.playButton = this.game.add.button(this.game.world.centerX, 200, 'playButton', this.playOnUp, this, 1, 0, 2);
        this.playButton.anchor.set(0.5, 0.5);
        this.virusButton = this.game.add.button(this.game.world.centerX, 300, 'malwareButton', this.malwareOnUp, this, 1, 0, 2);
        this.virusButton.anchor.set(0.5, 0.5);
        this.protectionButton = this.game.add.button(this.game.world.centerX, 400, 'protectionButton', this.protectionOnUp, this, 1, 0, 2);
        this.protectionButton.anchor.set(0.5, 0.5);
    },

    playOnUp : function (button, pointer, isOver) {
        "use strict";
        //  In this example if the Pointer is no longer over the Button, then we'll treat it
        //  as if the user cancelled the operation and didn't want to press the Button after all

        if (isOver) {
            //            this.starfield.visible = !this.starfield.visible;
            this.game.state.start('LevelsMenu');
        }
    },

    protectionOnUp : function (button, pointer, isOver) {
        "use strict";
        //  In this example if the Pointer is no longer over the Button, then we'll treat it
        //  as if the user cancelled the operation and didn't want to press the Button after all

        if (isOver) {
            //            this.starfield.visible = !this.starfield.visible;
            this.game.state.start('ProtectionMenu');
        }
    },

    malwareOnUp : function (button, pointer, isOver) {
        "use strict";
        //  In this example if the Pointer is no longer over the Button, then we'll treat it
        //  as if the user cancelled the operation and didn't want to press the Button after all

        if (isOver) {
            //            this.starfield.visible = !this.starfield.visible;
            this.game.state.start('MalwareMenu');
        }
    },

    update : function () {
        "use strict";

        //  Scroll the background
        this.starfield.tilePosition.y += 6;
    }
};