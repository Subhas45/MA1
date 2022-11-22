class world extends Phaser.Scene {
  constructor() {
    super("world");
  }

  // incoming data from scene below
  init(data) {}

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("worldmap","assets/world1.tmj");

    // this.load.image("road", "assets/road.png");
    this.load.image("one","assets/one.png");
    this.load.image("two","assets/two.png");
    this.load.image("three","assets/three.png");
    // this.load.spritesheet("u3", "assets/ultima.gif", {frameWidth: 16,frameHeight: 16});
    
    
    // this.load.spritesheet('boy', 'assets/boy.png',{ frameWidth:320, frameHeight:320});   
    }
   
  

  create() {
    console.log("*** world scene");

    //Step 3 - Create the map from main
    let map = this.make.tilemap({key:'worldmap'}); 

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let oneTiles = map.addTilesetImage("one", "one");
    let twoTiles = map.addTilesetImage("two", "two");
    let threeTiles = map.addTilesetImage("three", "three");
   

    let tilesArray = [ oneTiles,twoTiles,threeTiles ]
    
    // Step 5  Load in layers by layers 
    this.groundLayer = map.createLayer("groundLayer", tilesArray, 0, 0);
    this.decoLayer = map.createLayer("decoLayer", tilesArray, 0, 0);
    this.buildingLayer = map.createLayer("buildingLayer", tilesArray, 0, 0);

      

     
   
    this.physics.world.bounds.width = this.groundLayer.width;
    this.physics.world.bounds.height = this.groundLayer.height;
   
    
  


    this.player = this.physics.add.sprite(1443, 1742, 'boy').setScale(0.2);
    window.player= this.player
    this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.7)

      //Tween  
      this.wolff = this.physics.add.sprite(1469, 2171, "enemy").play("wolf").setScale(0.2
        );

        this.wolff1 = this.physics.add.sprite(1552, 2134, "enemy").play("wolf").setScale(0.2
        
          );

          this.dirtt = this.physics.add.sprite(1700, 2500, "dump").play("dirt").setScale(0.2)
          this.dirtt.body.setSize(this.dirtt.width * 0.5, this.dirtt.height * 0.7)
      
    this.player.setCollideWorldBounds(true); // don't go out of the this.map

    this.time.addEvent({
      delay: 0,
      callback: this.moveSquare,
      callbackScope: this,
      loop: false,
    });
    
     
  


    // // create the arrow keys
     this.cursors = this.input.keyboard.createCursorKeys();

    // // camera follow player
    this.cameras.main.startFollow(this.player);

     this.decoLayer.setCollisionByProperty({wall : true});

     this.physics.add.collider(this.decoLayer, this.player);

     this.physics.add.collider(this.decoLayer, this.wolff);

     this.buildingLayer.setCollisionByProperty({walltwo : true});

     this.physics.add.collider(this.buildingLayer, this.player);

     this.physics.add.collider(this.buildingLayer, this.wolff);


     

    //this.decorLayer.setCollisionByExclusion(-1, true)
   // this.buildingLayer.setCollisionByExclusion(-1, true)

    // this.physics.add.collider(this.player, this.decoLayer);
    // this.physics.add.collider(this.player, this.buildingLayer);

  } /////////////////// end of create //////////////////////////////

  update() {
    
    // if ( this.player.x > 703  && this.player.x < 649 && this.player.y > 2972 && this.player.x < 2979) {
    //  // console.log("Jump to room1")
    //   this.room1();
    // }

    if (
      this.player.x < 700 &&
      this.player.y > 2599 &&
      this.player.y < 2982 
    ) {
      this.room1();
    }

     if (
       this.player.x > 2493 &&
       this.player.x < 2529 &&
       this.player.y > 1908 
      ) {
        this.room2();
      }

     if (
        this.player.x > 1509 &&
        this.player.y > 362 &&
       this.player.y < 405 
     ) {
        this.room3();
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


    
  } /////////////////// end of update //////////////////////////////

  // Function to jump to room1
     room1(player, tile) {
    console.log("room1 function");
    this.scene.start("room1");
  }

  room2(player, tile) {
    console.log("room2 function");
    this.scene.start("room2");
  }

  room3(player, tile) {
    console.log("room3 function");
    this.scene.start("room3");
  }

  //  moveRightLeft() {
  //   console.log("moveDownUp");
  //   this.tweens.timeline({
  //     targets: this.wolff,
  //     loop: -1, // loop forever
  //     ease: "Linear",
  //     duration: 2000,
  
  //     tweens: [
  //       {
  //         y: 1173,
  //       },
  //       {
  //         x: 2075,
  //       },
  //       {
  //         y: 1073,
  //       },
  //       {
  //         x: 1975,
  //       },
  //       {
  //         y: 973,
  //       },
  //       {
  //         x: 1875,
  //       },
  //       {
  //         x: 1273,
  //         y: 2175,
  //       },
  //     ],


      
  //   });
  // }

  moveRightLeft() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.wolff,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 1600,
        },
        {
          x: 1500,
        },
      ],
    });
  }


  moveRightLeft() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.dirtt,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 1469,
        },
        {
          x: 1309,
        },
      ],
    });
  }

  // moveSquare() {
  //   console.log("moveSquare");
  //   this.tweens.timeline({
  //     targets: this.wolff,
  //     ease: "Linear",
  //     loop: -1, // loop forever
  //     duration: 1000,
  
  //     tweens: [
  //       {
  //         y: 400,
  //       },
  //       {
  //         x: 400,
  //       },
  //       {
  //         y: 100,
  //       },
  //       {
  //         x: 100,
  //       },
  //     ],
  //   });
  // }

} //////////// end of class world ////////////////////////
