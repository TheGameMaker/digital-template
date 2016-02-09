window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        // Load an image and call it 'logo'.
        game.load.tilemap( 'water', 'assets/water.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('tiles', 'assets/water.jpg');
	game.load.image('boat', 'assets/boat.png');
	game.load.image('dolphins', 'assets/dolphin.png');
	game.load.image('trash', 'assets/trash.png');
    }
    
    var map;
    var layer;
    var p;
    var cursors;
    
    function create() {
        // Create a sprite at the center of the screen using the 'logo' image.
       // bouncy = game.add.sprite( game.world.centerX, game.world.centerY, 'logo' );
	game.stage.backgroundCOlor = '#787878';
	map = game.add.tilemap('water');
	map.addTilesetImage('Atlantic', 'tiles');
	layer = map.createLayer('Level 1');
	layer.resizeWorld();
	layer.wrap = true;
	cursors = game.input.keyboard.createCursorKeys();
    }

    function update() {
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
      //  bouncy.rotation = game.physics.arcade.accelerateToPointer( bouncy, this.game.input.activePointer, 500, 500, 500 );
	
	if (cursors.left.isDown){
	    game.camera.x -= 8;
	}
	else if (cursors.right.isDown){
	    game.camera.x += 8;
	}

	if (cursors.up.isDown){
	    game.camera.y -= 8;
	}
	else if (cursors.down.isDown){
	    game.camera.y += 8;
	}
    }
};
