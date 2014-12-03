var Scene = {};

Scene.Boot = function (game) {
    "use strict";
};

Scene.Boot.prototype = {
    preload: function () {
        "use strict";
        this.load.image('preloaderBar', 'assets/images/static/loading.png'); // preload loader image
    },
    create: function () {
        "use strict";
        this.game.state.start('Preloader');
    }
};