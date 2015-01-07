Scene.Preloader = function (game) {
    "use strict";
    this.background = null; // define background
    this.preloadBar = null; // define loader bar
};

Scene.Preloader.prototype = {
    preload: function () {
        "use strict";
        this.game.stage.backgroundColor = '#000000'; // set background colour for whole game
        this.preloadBar = this.add.sprite(0, this.game.world.centerY, 'preloaderBar'); // show loader bar
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.width = this.game.world.width;
        this.load.setPreloadSprite(this.preloadBar); // assign loader image so it works as a loader
        
        this.load.spritesheet('bullet', 'assets/images/dynamic/avbullet17x40x4.png', 17, 40);
        this.load.spritesheet('bulletSpyware', 'assets/images/dynamic/spybullet30x48x4.png', 30, 48);
        this.load.spritesheet('bulletHacker', 'assets/images/dynamic/updatebullet24x24x4.png', 24, 24);
        this.load.image('enemyBullet', 'assets/images/static/enemy-bullet.png');
        this.load.image('ship', 'assets/images/static/ship.png');
        
        this.load.image('wormhead', 'assets/images/dynamic/wormhead.png');
        this.load.image('wormbody', 'assets/images/dynamic/wormbody.png');
        this.load.image('virus', 'assets/images/dynamic/virus.png');
        this.load.image('spyware', 'assets/images/dynamic/spyware.png');
        this.load.image('hacker', 'assets/images/dynamic/hacker.png');
        this.load.spritesheet('kaboom', 'assets/images/dynamic/explode.png', 128, 128);
        
        this.load.image('starfield', 'assets/images/backgrounds/starfield.png');
        
        this.load.spritesheet('basicButton', 'assets/images/buttons/basic_button.png', 193, 71);
        this.load.spritesheet('playButton', 'assets/images/buttons/play.png', 112, 69);
        this.load.spritesheet('backButton', 'assets/images/buttons/back.png', 124, 69);
        this.load.spritesheet('malwareButton', 'assets/images/buttons/malware.png', 134, 68);
        this.load.spritesheet('protectionButton', 'assets/images/buttons/protection.png', 170, 69);
        this.load.spritesheet('button', 'assets/images/buttons/button.png', 75, 75);
        this.load.image('monoButton', 'assets/images/buttons/mono_button.png');
    },
    create: function () {
        "use strict";
        this.game.state.start('MainMenu'); // go to menu when everything is loaded
    }
};