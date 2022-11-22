class room3 extends Phaser.Scene {
    constructor() {
        super({ key: 'room3' });
        
        // Put global variable here
    }


    init(data) {
        this.player = data.player
    }

    preload() {

    // Step 1, load JSON
    this.load.tilemapTiledJSON("room3","assets/roomthree.tmj");

    this.load.image("oneImg","assets/one.png");
    this.load.image("twoImg","assets/two.png");
    this.load.image("threeImg","assets/three.png");

    }

    create() {
        console.log('*** room3 scene');

        //Step 3 - Create the map from main
        let map = this.make.tilemap({key:'room3'}); 

        // Step 4 Load the game tiles
        // 1st parameter is name in Tiled,
        // 2nd parameter is key in Preload
        let oneTiles = map.addTilesetImage("one", "oneImg");
        let twoTiles = map.addTilesetImage("two", "twoImg");
        let threeTiles = map.addTilesetImage("three", "threeImg");

        let tilesArray = [oneTiles, twoTiles, threeTiles ]

        // Step 5  Load in layers by layers 
        this.groundLayer = map.createLayer("groundLayer", tilesArray, 0, 0);
        this.decoLayer = map.createLayer("decoLayer", tilesArray, 0, 0);
        this.buildingLayer = map.createLayer("buildingLayer", tilesArray, 0, 0);

        this.physics.world.bounds.width = this.groundLayer.width;
        this.physics.world.bounds.height = this.groundLayer.height;
    

        var start = map.findObject("objectLayer",(obj) => obj.name === "start");

        this.player = this.physics.add.sprite(1443, 1742, 'boy').setScale(0.2);
        window.player = this.player

        this.player.setCollideWorldBounds(true); // don't go out of the this.map

        // create the arrow keys
        this.cursors = this.input.keyboard.createCursorKeys();

        // camera follow player
        this.cameras.main.startFollow(this.player);

    }

    update() {

        // if ( this.player.x > 1068 && this.player.y < 511 && this.player.y > 500 ) {
        //    // console.log("room3 exit")
        //     this.world();
        //   }

        if (
          this.player.x < 1442 &&
          this.player.y > 318 &&
          this.player.y < 365
        ) {
          this.world();
        }
        
          if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-200);
      this.player.anims.play("left", true); // walk left
    } 
    else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(200);
      this.player.anims.play("right", true);
    } else if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-200);
      this.player.anims.play("back", true);
      //console.log('up');
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(200);
      this.player.anims.play("front", true);
      //console.log('down');
    } else {
      this.player.anims.stop();
      this.player.body.setVelocity(0, 0);
    }



    } //// end of updates /////////

     // Function to jump to room3
   // Function to jump to room3
   world(player, tile) {
    console.log("world function");
    this.scene.start("world");
  }
}
  