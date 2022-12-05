class room1 extends Phaser.Scene {
    constructor() {
        super({ key: 'room1' });
        this.score = 0
  
        
        // Put global variable here
    }


    init(data) {
        this.playerPos = data.playerPos;
        this.inventory = data.inventory
    }

    preload() {

    // Step 1, load JSON
    this.load.tilemapTiledJSON("room1","assets/roomone.tmj");
   
    this.load.spritesheet("exit", "assets/exit.png", {frameWidth: 321,frameHeight: 321});
    this.load.spritesheet("point", "assets/point.png", {frameWidth: 321,frameHeight: 321}); 

    this.load.image("oneImg","assets/one.png");
    this.load.image("twoImg","assets/two.png");
    this.load.image("threeImg","assets/three.png");

    this.load.audio('room1','assets/lonely.mp3');
    this.load.audio('collect','assets/yeehaw.mp3')

    }

    create() {
        console.log('*** room1 scene');

        //Step 3 - Create the map from main
        let map = this.make.tilemap({key:'room1'}); 

        //sound

        this.backgroundmusic1 = this.sound.add('room1').setVolume(0.3);
        this.collectsound = this.sound.add('collect').setVolume(0.5);

         window.music1 = this.backgroundmusic1
         window.music1.play();
         window.music1.loop = true;

         window.sound2 = this.collectsound


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

        // this.player = this.physics.add.sprite(1443, 1742, 'boy').setScale(0.2);
         this.player = this.physics.add.sprite(
          this.playerPos.x,
          this.playerPos.y,
          this.playerPos.dir,
          'boy'
         ).setScale(0.2);

        window.player = this.player
        this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.7)

        this.player.setCollideWorldBounds(true); // don't go out of the this.map

        this.decoLayer.setCollisionByProperty({wall : true});
        this.decoLayer.setCollisionByProperty({pillar : true});
        
        this.physics.add.collider(this.decoLayer, this.player);
        

         //Tween  
        this.cow1 = this.physics.add.sprite(1000, 2008, "cow").play("cowAnimation").setScale(0.2);
        this.cow2 = this.physics.add.sprite(1921, 2452, "cow").play("cowAnimation").setScale(0.2);
        this.cow3 = this.physics.add.sprite(1284, 1411, "cow3").play("cowAnimation").setScale(0.2);
        this.cow4 = this.physics.add.sprite(748, 744, "cow4").play("cowAnimation").setScale(0.2);
        this.cow5 = this.physics.add.sprite(1641, 2031, "cow5").play("cowAnimation").setScale(0.2);
        this.cow6 = this.physics.add.sprite(2354, 1178, "cow6").play("cowAnimation").setScale(0.2);
        this.cow7 = this.physics.add.sprite(2484, 2801, "cow7").play("cowAnimation").setScale(0.2);


       this.physics.add.overlap(this.player, this.cow1, this.overlapsen, null, this );
       this.physics.add.overlap(this.player, this.cow2, this.overlapsen, null, this );
       this.physics.add.overlap(this.player, this.cow3, this.overlapsen, null, this );
       this.physics.add.overlap(this.player, this.cow4, this.overlapsen, null, this );
       this.physics.add.overlap(this.player, this.cow5, this.overlapsen, null, this );
       this.physics.add.overlap(this.player, this.cow6, this.overlapsen, null, this );
       this.physics.add.overlap(this.player, this.cow7, this.overlapsen, null, this );

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

      this.time.addEvent({
        delay: 0,
        callback: this.moveRightLeft6,
        callbackScope: this,
        loop: false,
      });
      this.time.addEvent({
        delay: 0,
        callback: this.moveRightLeft7,
        callbackScope: this,
        loop: false,
      });

       
        // create the arrow keys
        this.cursors = this.input.keyboard.createCursorKeys();
         
    

        // camera follow player
        this.cameras.main.startFollow(this.player);
       
        //direction
    this.exit = this.physics.add.sprite(173, 290, 'exit').setScale(0.5);
    this.point = this.physics.add.sprite(580, 2061, 'point').setScale(0.2);
    
    
       
     
     
     //collect item
     this.dump1 = this.physics.add.sprite(1039, 1718, 'dump1').play("dumpAnimation").setScale(1.5);
     this.dump2 = this.physics.add.sprite(1033, 928, 'dump2').play("dumpAnimation").setScale(1.5);
     this.dump3 = this.physics.add.sprite(629, 1088, 'dump3').play("dumpAnimation").setScale(1.5);
     this.dump4 = this.physics.add.sprite(645, 1089, 'dump4').play("dumpAnimation").setScale(1.5);
     this.dump5 = this.physics.add.sprite(471, 2335, 'dump5').play("dumpAnimation").setScale(1.5);
     this.dump6 = this.physics.add.sprite(984, 2932, 'dump6').play("dumpAnimation").setScale(1.5);
     this.dump7 = this.physics.add.sprite(1614, 2705, 'dump7').play("dumpAnimation").setScale(1.5);
     this.dump8 = this.physics.add.sprite(2481, 2101, 'dump8').play("dumpAnimation").setScale(1.5);
     this.dump9 = this.physics.add.sprite(3097, 1440, 'dump9').play("dumpAnimation").setScale(1.5);
     this.dump10 = this.physics.add.sprite(2944, 540, 'dump10').play("dumpAnimation").setScale(1.5);
     this.dump11 = this.physics.add.sprite(2676, 3168, 'dump11').play("dumpAnimation").setScale(1.5);
     this.dump12 = this.physics.add.sprite(256, 1038, 'dump12').play("dumpAnimation").setScale(1.5);
    
    


     //collect action
     this.physics.add.overlap(this.player, this.dump1, this.collectDump, null, this);
     this.physics.add.overlap(this.player, this.dump2, this.collectDump, null, this);
     this.physics.add.overlap(this.player, this.dump3, this.collectDump, null, this);
     this.physics.add.overlap(this.player, this.dump4, this.collectDump, null, this);
     this.physics.add.overlap(this.player, this.dump5, this.collectDump, null, this);
     this.physics.add.overlap(this.player, this.dump6, this.collectDump, null, this);
     this.physics.add.overlap(this.player, this.dump7, this.collectDump, null, this);
     this.physics.add.overlap(this.player, this.dump8, this.collectDump, null, this);
     this.physics.add.overlap(this.player, this.dump9, this.collectDump, null, this);
     this.physics.add.overlap(this.player, this.dump10, this.collectDump, null, this);
     this.physics.add.overlap(this.player, this.dump11, this.collectDump, null, this);
     this.physics.add.overlap(this.player, this.dump12, this.collectDump, null, this);
     
     

    
    //  if (window.dump != false) {
    //    this.dump1.setVisible(true)
    //  } else {
    //    this.dump1.disableBody(true,true)
    //  }
   








       this.paperText = this.add.text(900, 20, this.score, {
       fontSize: '65px',
       fill: '#FFFFFF'
       });

      
       this.paperText.setScrollFactor(0);
       this.paperText.visible = true;
      
    }

    update() {

      if (this.score== 3 ) {
        console.log('levelcomplete');
        window.music1.stop();   
        this.time.delayedCall(1000,function() {
          this.scene.start("win1");
         },[], this);      
        }
  

        //  if ( this.player.x > 2846 && this.player.x < 2883 && this.player.y > 278 && this.player.y < 308 ) {
        //     // console.log("room1 exit")
        //      this.world();
        //    }

             if (
            this.player.x < 224 &&
            this.player.x > 101 &&
            this.player.y < 364 &&
            this.player.y > 294
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

     // Function to jump to room1
   // Function to jump to room1
    


  moveRightLeft1() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.cow1,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 1180,
        },
        {
          x: 1000,
        },
      ],
    });
  }

  moveRightLeft2() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.cow2,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 2277,
        },
        {
          x: 1921,
        },
      ],
    });
  }


  moveRightLeft3() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.cow3,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 1461,
        },
        {
          x: 1284,
        },
      ],
    });
  }

  moveRightLeft4() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.cow4,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 948,
        },
        {
          x: 748,
        },
      ],
    });
  }

  moveRightLeft5() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.cow5,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 2031,
        },
        {
          x: 1641,
        },
      ],
    });
  }

  moveRightLeft6() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.cow6,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 2684,
        },
        {
          x: 2354,
        },
      ],
    });
  }
  
  moveRightLeft7() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.cow7,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 2801,
        },
        {
          x: 2484,
        },
      ],
    });
  }

  
   //Collect dump
   collectDump(player,dump) {
    console.log('collect dump')
    window.sound2.play();
    dump.disableBody (true,true)
    // window.dump = false
    this.cameras.main.shake(200);
    this.score = this.score + 1;
    this.paperText.setText(this.score);
  }
  overlapsen(){
    window.music1.stop();
    this.score = 0
    this.cameras.main.shake(400);
    this.scene.start("gameover1")
  }

  //jump to world
  world(player, tile) {
    console.log("world function");
    let playerPos = {};
    playerPos.x = 774;
    playerPos.y = 2972;
    playerPos.dir = "boy";
    this.scene.start("world",{ playerPos : playerPos });
  }
}
  