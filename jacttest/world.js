class world extends Phaser.Scene {
  constructor() {
    super("world");
    this.score = 0
    
  }

 // incoming data from scene below
 init(data) {
  this.player = data.player
  this.inventory = data.inventory;
  this.playerPos = data.playerPos;
}

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("worldmap","assets/world1.tmj");

    // this.load.image("road", "assets/road.png");
    this.load.image("one","assets/one.png");
    this.load.image("two","assets/two.png");
    this.load.image("three","assets/three.png");
    
    this.load.audio('room','assets/wildwest.mp3');
    this.load.audio('collect','assets/yeehaw.mp3')
    }
   
  

  create() {
    console.log("*** world scene");


    this.backgroundmusic = this.sound.add('room').setVolume(0.3);
        this.collectsound = this.sound.add('collect').setVolume(0.5);

         window.music1 = this.backgroundmusic
         window.music1.play();
         window.music1.loop = true;

         window.sound2 = this.collectsound


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
   
    
  


     this.player = this.physics.add.sprite(this.playerPos.x, this.playerPos.y, this.playerPos.dir, 'boy').setScale(0.2);
    // this.player = this.physics.add.sprite(
    //   this.playerPos.x,
    //   this.playerPos.y,
    // this.playerPos.dir,
    //   'boy'
    //  ).setScale(0.2);
     
     window.player= this.player
     this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.7)

      //Tween  
        this.wolf1 = this.physics.add.sprite(858, 1355, "enemy").play("wolf").setScale(0.2);
        this.wolf2 = this.physics.add.sprite(753, 2454, "enemy").play("wolf").setScale(0.2);
        this.wolf3 = this.physics.add.sprite(2148,2181, "enemy").play("wolf").setScale(0.2);
        this.wolf4 = this.physics.add.sprite(1894, 1423, "enemy").play("wolf").setScale(0.2);
        this.wolf5 = this.physics.add.sprite(378, 1708, "enemy").play("wolf").setScale(0.2);
        this.wolf6 = this.physics.add.sprite(2316, 725, "enemy").play("wolf").setScale(0.2);

          
       this.physics.add.overlap(this.player, this.wolf1, this.overlapsen, null, this );
       this.physics.add.overlap(this.player, this.wolf2, this.overlapsen, null, this );
       this.physics.add.overlap(this.player, this.wolf3, this.overlapsen, null, this );
       this.physics.add.overlap(this.player, this.wolf4, this.overlapsen, null, this );
       this.physics.add.overlap(this.player, this.wolf5, this.overlapsen, null, this );
       this.physics.add.overlap(this.player, this.wolf6, this.overlapsen, null, this );

      
      
    this.player.setCollideWorldBounds(true); // don't go out of the this.map

    this.time.addEvent({
      delay: 0,
      callback: this.moveRightLeft1,
      callbackScope: this,
      loop: false,
    });
    
    this.time.addEvent({
      delay: 0,
      callback: this.moveRightLeft2,
      callbackScope: this,
      loop: false,
    });
     
    this.time.addEvent({
      delay: 0,
      callback: this.moveRightLeft3,
      callbackScope: this,
      loop: false,
    });
    
    this.time.addEvent({
      delay: 0,
      callback: this.moveRightLeft4,
      callbackScope: this,
      loop: false,
    });
    this.time.addEvent({
      delay: 0,
      callback: this.moveRightLeft5,
      callbackScope: this,
      loop: false,
    });


    // // create the arrow keys
     this.cursors = this.input.keyboard.createCursorKeys();

    // // camera follow player
    this.cameras.main.startFollow(this.player);
    

    this.about = this.physics.add.sprite(1850, 2802, 'about').play("aboutAnimation").setScale(0.4);

    
    
    this.decoLayer.setCollisionByProperty({wall : true});
    this.decoLayer.setCollisionByProperty({green : true});
    this.decoLayer.setCollisionByProperty({pillar : true});

    this.physics.add.collider(this.decoLayer, this.player);
    
    this.cattlefarm = this.physics.add.sprite(546, 2982, 'cattlefarm').play("farm1Animation").setScale(0.4);
    this.sheepfarm = this.physics.add.sprite(2609, 1951, 'sheepfarm').play("farm2Animation").setScale(0.4);
    this.chickfarm = this.physics.add.sprite(1502, 295, 'chickfarm').play("farm3Animation").setScale(0.4);
      

  } /////////////////// end of create //////////////////////////////

  update() {
    
 
  
  
  

   if (
      this.player.x < 726 &&
      this.player.x > 635 &&
      this.player.y < 3017 &&
      this.player.y > 2920 
    ) {
      this.room1();
    }

     if (
      this.player.x < 2511 &&
      this.player.x > 2444 &&
      this.player.y < 1961 &&
      this.player.y > 1910
      ) {
        this.room2();
      }

     if (
       this.player.x < 1552 &&
      this.player.x > 1424 &&
      this.player.y < 433 &&
      this.player.y > 357
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
    window.music1.stop(); 
    let playerPos = {};
    playerPos.x = 1562;
    playerPos.y = 2195;
    playerPos.dir = "boy";
    this.scene.start("room1",{ playerPos : playerPos });
  }

  room2(player, tile) {
    console.log("room2 function");
    window.music1.stop(); 
    this.scene.start("room2");
    let playerPos = {};
    playerPos.x = 1435;
    playerPos.y = 1768;
    playerPos.dir = "boy";
    this.scene.start("room2",{ playerPos : playerPos });
  }

  room3(player, tile) {
    console.log("room3 function");
    window.music1.stop(); 
    let playerPos = {};
    playerPos.x = 1435;
    playerPos.y = 1768;
    playerPos.dir = "boy";
    this.scene.start("room3",{ playerPos : playerPos });
  }
  
  // r1intro(player, tile) {
  //   console.log("r1intro scene");
  //   window.music1.stop(); 
  //   this.scene.start("r1intro");
  // }


  //    r2intro(player, tile) {
  //   console.log("r2intro scene");
  //   window.music1.stop(); 
  //   this.scene.start("r2intro");
  // }

  
  // r3intro(player, tile) {
  //   console.log("r3intro scene");
  //   window.music1.stop(); 
  //   this.scene.start("r3intro");
  // }

 
  moveRightLeft1() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.wolf1,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 1040,
        },
        {
          x: 858,
        },
      ],
    });
  }

  moveRightLeft2() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.wolf2,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 1040,
        },
        {
          x: 753,
        },
      ],
    });
  }
  moveRightLeft3() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.wolf3,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 2242,
        },
        {
          x: 2148,
        },
      ],
    });
  }
  moveRightLeft4() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.wolf4,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 2184,
        },
        {
          x: 1894,
        },
      ],
    });
  }
  moveRightLeft5() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.wolf5,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 635,
        },
        {
          x: 378,
        },
      ],
    });
  }
  moveRightLeft6() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.wolf6,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 2480,
        },
        {
          x: 2316,
        },
      ],
    });
  }
  
  
  overlapsen(){
    this.score = 0
    window.music1.stop(); 
    this.cameras.main.shake(400);
    this.scene.start("gameover4")
  }

  

} //////////// end of class world ////////////////////////
