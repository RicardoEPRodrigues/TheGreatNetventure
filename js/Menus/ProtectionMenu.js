Scene.ProtectionMenu = function (game) {
    "use strict";
    this.starfield = null;
    this.levelButtons = [];
    this.backButton = null;
};

Scene.ProtectionMenu.prototype = {

    create: function () {
        "use strict";
        this.starfield = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'starfield');
        var i, j, button;
        for (i = 0; i < 3; i = i + 1) {
            button = this.game.add.button(this.game.world.centerX - 95, 100 + (i * 100), 'basicButton', this.selectOnUp, this, 2, 1, 0);
            button.indexNum = i;
            this.levelButtons.push(button);
        }
        this.backButton = this.game.add.button(this.game.world.centerX, this.game.world.height - 100, 'backButton', this.backOnUp, this, 1, 0, 2);
        this.backButton.anchor.set(0.5, 0.5);
    },

    selectOnUp : function (button, pointer, isOver) {
        "use strict";
        //  In this example if the Pointer is no longer over the Button, then we'll treat it
        //  as if the user cancelled the operation and didn't want to press the Button after all

        if (isOver) {
            //            this.game.state.start('Level' + button.indexNum);
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