//Initialize global variables
//Global variables for player position
var counterX = 200;
var counterY = 395;

//Possible x and y pixel values
var possibleY = [55, 140, 225, 310];
var possibleX = [0, 100, 200, 300, 400];

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
	this.x = -100;
    this.y = possibleY[Math.floor(Math.random() * possibleY.length)];
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x = this.x + (dt * 300 * Math.random());
	 //collision engine
   if (this.x - player.x < 50 && this.x - player.x > 0 && this.y === player.y) {
        player.reset();
    };
    //resets enemys at start after reaching end of board
    if (this.x > 505) {
        this.x = -100
        this.y = possibleY[Math.floor(Math.random() * possibleY.length)];
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = counterX;
    this.y = counterY;
	this.score = 0;
	 
};



Player.prototype.reset = function() {
{	this.lives = 6;
    this.score = 6;
    this.x = 200;
    this.y = 395;
    this.lives = this.lives - 1;
    var lifeSpanElement = document.getElementById("lives"); 
    lifeSpanElement.innerHTML = this.lives;
        document.write("<h1>Game Over</h1><h3>Refresh to play again</h3>");
		canvas.reset();
    }
};



Player.prototype.update = function(dt) {

   if (this.x === key.x && this.y === key.y) {
        key.found();
    }
}




Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) {
    switch (key) {
        case 'up': 
            //checks if player is off the map
            if (this.y === 55) {
                this.reset();
            }
            else {
                this.y -= 85;
            }
            break;
        case 'down':
            if (this.y === 395) {
                this.reset();
            }
            else {
                this.y += 85;
            }
            break;
        case 'left':
            if (this.x === 0) {
                this.reset();
            }
            else {
                this.x -= 100;
            }
            break;
        case 'right':
            if (this.x === 400) {
                this.reset();
            }
            else {
                this.x += 100; 
            }
            
            break;
    }
}

var Key = function() {
    this.sprite = 'images/Star.png';
    this.x = possibleX[Math.floor(Math.random() * possibleX.length)];
    this.y = possibleY[Math.floor(Math.random() * possibleY.length)];
    keyX = this.x;
    keyY = this.y;
};

Key.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [new Enemy(), new Enemy(), new Enemy(), new Enemy(), new Enemy()];

var player = new Player();

var key = new Key();

Key.prototype.found = function() {
    counterX = 200;
    counterY = 395;
    score = score + 10;
    this.x = possibleX[Math.floor(Math.random() * possibleX.length)];
    this.y = possibleY[Math.floor(Math.random() * possibleY.length)];
    var numKeys = document.getElementById("score");
    numKeys.innerHTML = score;
    if (score === 10) {
        document.write("<h1>YOU WIN!</h1><h3>Refresh to play again</h3>");
    }
};



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
	console.log(allowedKeys[e.keyCode]);
});
