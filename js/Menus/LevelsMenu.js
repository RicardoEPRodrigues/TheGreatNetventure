Scene.LevelsMenu = function (game) {
    "use strict";
    this.starfield = null;
    this.levelButtons = [];
    this.backButton = null;
};

Scene.LevelsMenu.prototype = {

    create: function () {
        "use strict";
        this.starfield = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'starfield');
        var i, j, button, style, text, posX, posY;
        for (i = 0; i < 3; i = i + 1) {
            for (j = 0; j < 3; j = j + 1) {
                posX = (this.game.world.centerX - 100) + (j * 100);
                posY = 100 + (i * 100);
                
                button = this.game.add.button(posX, posY, 'button', this.selectOnUp, this, 1, 0, 2);
                button.indexNum = (i * 3) + j + 1;
                button.anchor.set(0.5, 0.5);
                this.levelButtons.push(button);

                style = { font: "40px Arial", fill: "#ffffff", align: "center" };
                text = this.game.add.text(posX, posY, button.indexNum, style);
                text.anchor.set(0.5, 0.5);
            }
        }
        this.backButton = this.game.add.button(this.game.world.centerX, this.game.world.height - 100, 'backButton', this.backOnUp, this, 1, 0, 2);
        this.backButton.anchor.set(0.5, 0.5);
    },

    selectOnUp : function (button, pointer, isOver) {
        "use strict";
        //  In this example if the Pointer is no longer over the Button, then we'll treat it
        //  as if the user cancelled the operation and didn't want to press the Button after all

        if (isOver) {
            /* Uncomment to use test level */
            if (button.indexNum === 9) {
                this.game.state.start('LevelDemo');
            } else {
                this.game.state.start('Level' + button.indexNum);
            }
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