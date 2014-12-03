Scene.MainMenu = function (game) {
    "use strict";
};

Scene.MainMenu.prototype = {
    create: function () {
        "use strict";
        this.game.state.start('Level0');
    }
};