class room1 extends Phaser.Scene {
    constructor() {
        super({ key: 'room1' });
        
        // Put global variable here

        var player;
        var stars;
        var groundLayer;
    }


    init(data) {
        this.player = data.player
    }
   
   
    preload() {

    // Step 1, load JSON
    this.load.tilemapTiledJSON("room1","assets/roomone.tmj");

    this.load.image("oneImg","assets/one.png");
    this.load.image("twoImg","assets/two.png");
    this.load.image("threeImg","assets/three.png");
      this.load.image("star","assets/dump1.png");
    

    }

    create() {
        console.log('*** room1 scene');

        //Step 3 - Create the map from main
        let map = this.make.tilemap({key:'room1'}); 

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

        this.decoLayer.setCollisionByProperty({wall : true});
    
        this.physics.add.collider(this.decoLayer, this.player);
        this.physics.add.collider(this.groundLayer, this.stars);

        this.physics.add.overlap(player,stars, collectStar,null,this);

       
        // create the arrow keys
        this.cursors = this.input.keyboard.createCursorKeys();
         
    

        // camera follow player
        this.cameras.main.startFollow(this.player);

        
        var score = 0;
        var scoreText;
    
        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    }

    update() {

        //  if ( this.player.x > 2846 && this.player.x < 2883 && this.player.y > 278 && this.player.y < 308 ) {
        //     // console.log("room1 exit")
        //      this.world();
        //    }

           if (
            this.player.x < 2883 &&
            this.player.y > 278 &&
            this.player.y < 308 
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

//     function collectStar (player, star) 
//     {
//        console.log("collect star")
//        star.disableBody(true, true);
//     }

//     function collectStar (player, star)
// {
//     star.disableBody(true, true);

//     score += 10;
//     scoreText.setText('Score: ' + score);
// }

   
    } //// end of updates /////////

     // Function to jump to room1
   // Function to jump to room1
   world(player, tile) {
    console.log("world function");
    this.scene.start("world");
  }
}
  