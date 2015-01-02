function Follower(game, x, y, type, target) {
    "use strict";
    type.call(this, game, x, y);

    // Save the target that this Follower will follow
    // The target is any object with x and y properties
    this.target = target;

    // Define constants that affect motion
    this.MAX_SPEED = 300; // pixels/second
    this.MIN_DISTANCE = 37; // pixels

    this.prototype = Object.create(type.prototype);
}

// Followers are a type of Phaser.Sprite
Follower.prototype = Object.create(Phaser.Sprite.prototype);
Follower.prototype.constructor = Follower;

Follower.prototype.update = function () {
    "use strict";
    // Calculate distance to target
    var distance = this.game.math.distance(this.x, this.y, this.target.x, this.target.y),
        rotation;

    // If the distance > MIN_DISTANCE then move
    if (distance > this.MIN_DISTANCE) {
        // Calculate the angle to the target
        rotation = this.game.math.angleBetween(this.x, this.y, this.target.x, this.target.y);

        // Calculate velocity vector based on rotation and this.MAX_SPEED
        this.body.velocity.setTo(Math.cos(rotation) * this.MAX_SPEED,
                                 Math.sin(rotation) * this.MAX_SPEED);
    } else {
        this.body.velocity.setTo(0, 0);
    }
};