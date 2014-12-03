Scene.Preloader = function (game) {
    "use strict";
    this.background = null; // define background
    this.preloadBar = null; // define loader bar
};

Scene.Preloader.prototype = {
    preload: function () {
        "use strict";
        this.game.stage.backgroundColor = '#000000'; // set background colour for whole game
        this.preloadBar = this.add.sprite(this.game.world.centerX - 311, this.game.world.centerY - 27, 'preloaderBar'); // show loader bar
        this.load.setPreloadSprite(this.preloadBar); // assign loader image so it works as a loader
        
        this.load.image('bullet', 'assets/images/static/bullet.png');
        this.load.image('enemyBullet', 'assets/images/static/enemy-bullet.png');
        this.load.image('ship', 'assets/images/static/player.png');
        
        this.load.spritesheet('invader', 'assets/images/dynamic/invader32x32x4.png', 32, 32);
        this.load.spritesheet('kaboom', 'assets/images/dynamic/explode.png', 128, 128);
        
        this.load.image('starfield', 'assets/images/backgrounds/starfield.png');
    },
    create: function () {
        "use strict";
        this.game.state.start('MainMenu'); // go to menu when everything is loaded
    }
};