Scene.InformationScreen = function (game) {
    "use strict";
    this.starfield = null;
    this.bar = null;
    this.backButton = null;
};

Scene.InformationScreen.prototype = {

    init: function (information, sprite, menu) {
        "use strict";
        var style, text, spriteCopy;
        
        this.starfield = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'starfield');
        
        this.bar = this.game.add.sprite(this.game.world.width / 2, this.game.world.height - 320, 'monoButton');
        this.bar.anchor.set(0.5, 0.5);
        this.bar.width = 400;
        this.bar.height = 350;
        
        spriteCopy = this.game.add.sprite(this.game.world.width / 2, this.game.world.height / 2 - 150, sprite);
        spriteCopy.anchor.set(0.5, 0.5);
        
        style = { font: "bold 20px Arial", fill: "#ffffff", align: "center" };
        
        text = this.game.add.text(this.game.world.centerX, 300, information, style);
        text.anchor.set(0.5, 0.5);
        
        this.backButton = this.game.add.button(this.game.world.centerX, this.game.world.height - 100, 'backButton', this.backOnUp, this, 1, 0, 2);
        this.backButton.variable = menu;
        this.backButton.anchor.set(0.5, 0.5);
    },

    backOnUp : function (button, pointer, isOver) {
        "use strict";
        if (isOver) {
            if (button.variable === "protection") {
                this.game.state.start('ProtectionMenu');
            } else {
                this.game.state.start('MalwareMenu');
            }
        }
    },

    update : function () {
        "use strict";

        //  Scroll the background
        this.starfield.tilePosition.y += 6;
    }
};