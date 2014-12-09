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
        this.starfield = this.game.add.tileSprite(0, 0, 800, 600, 'starfield');
        this.playButton = this.game.add.button(this.game.world.centerX - 95, 200, 'basicButton', this.playOnUp, this, 2, 1, 0);
        this.virusButton = this.game.add.button(this.game.world.centerX - 95, 200, 'basicButton', this.playOnUp, this, 2, 1, 0);
        this.protectionButton = this.game.add.button(this.game.world.centerX - 95, 200, 'basicButton', this.playOnUp, this, 2, 1, 0);
    },

    onUp : function (button, pointer, isOver) {
        "use strict";
        //  In this example if the Pointer is no longer over the Button, then we'll treat it
        //  as if the user cancelled the operation and didn't want to press the Button after all

        if (isOver) {
            //            this.starfield.visible = !this.starfield.visible;
            this.game.state.start('Level0');
        }
    },

    update : function () {
        "use strict";

        //  Scroll the background
        this.starfield.tilePosition.y += 6;
    }
};