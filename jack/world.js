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
    // this.load.image("star","assets/dump1.png")
    this.load.spritesheet("u3", "assets/ultima.gif", {frameWidth: 16,frameHeight: 16});
    
    
    this.load.spritesheet('boy', 'assets/boy.png',{ frameWidth:320, frameHeight:320});   
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
   
    
   

  // this.anims.create({
  //     key:'spin',
  //     frames:this.anims.generateFrameNumbers('star',
  //     { start:0, end:3}),
  //     frameRate:15,
  //     repeat:-1
  // });

  this.anims.create({
      key:'left',
      frames:this.anims.generateFrameNumbers('boy',
      { start:0, end:3}),
      frameRate:15,
      repeat:-1
  });

  this.anims.create({
      key:'back',
      frames:this.anims.generateFrameNumbers('boy',
      { start:3, end:5}),
      frameRate:7,
      repeat:-1
  });

  this.anims.create({
      key:'front',
      frames:this.anims.generateFrameNumbers('boy',
      { start:3, end:5}),
      frameRate:7,
      repeat:-1
  });

  this.anims.create({
      key:'right',
      frames:this.anims.generateFrameNumbers('boy',
      { start:5, end:8}),
      frameRate:15,
      repeat:-1
  });

   //tween anims

   this.anims.create({
    key: "fig",
    frames: this.anims.generateFrameNumbers("u3", { start: 36, end: 37 }),
    frameRate: 5,
    repeat: -1,
  });


    this.player = this.physics.add.sprite(1443, 1742, 'boy').setScale(0.2);
    window.player= this.player
    this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.7)

    this.player.setCollideWorldBounds(true); // don't go out of the this.map

    this.time.addEvent({
      delay: 0,
      callback: this.moveLadder,
      callbackScope: this,
      loop: false,
    });
    //Tween  
    this.fighter = this.physics.add.sprite(100, 300, "u3").play("fig").setScale(2);
    // // create the arrow keys
     this.cursors = this.input.keyboard.createCursorKeys();

    // // camera follow player
    this.cameras.main.startFollow(this.player);

     this.decoLayer.setCollisionByProperty({wall : true});

     this.physics.add.collider(this.decoLayer, this.player);

     this.buildingLayer.setCollisionByProperty({walltwo : true});

     this.physics.add.collider(this.buildingLayer, this.player);

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

  moveLadder() {
    console.log("moveLadder");
    this.tweens.timeline({
      targets: this.fighter,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 1000,
  
      tweens: [
        {
          y: 1153,
        },
        {
          x: 2195,
        },
        {
          y: 1053,
        },
        {
          x: 2095,
        },
        {
          y: 953,
        },
        {
          x: 1995,
        },
        {
          x: 1253,
          y: 2295,
        },
      ],
    });
  }

} //////////// end of class world ////////////////////////
