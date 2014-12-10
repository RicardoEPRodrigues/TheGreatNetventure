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
        this.playButton = this.game.add.button(this.game.world.centerX - 95, 200, 'basicButton', this.playOnUp, this, 2, 1, 0);
        this.virusButton = this.game.add.button(this.game.world.centerX - 95, 300, 'basicButton', this.playOnUp, this, 2, 1, 0);
        this.protectionButton = this.game.add.button(this.game.world.centerX - 95, 400, 'basicButton', this.playOnUp, this, 2, 1, 0);
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

    update : function () {
        "use strict";

        //  Scroll the background
        this.starfield.tilePosition.y += 6;
    }
};