class room3 extends Phaser.Scene {
    constructor() {
        super({ key: 'room3' });
        this.score = 0
        
        // Put global variable here
    }


   // incoming data from scene below
  init(data) {
    this.player = data.player
    this.inventory = data.inventory;
    this.playerPos = data.playerPos;
  }

    preload() {

    // Step 1, load JSON
    this.load.tilemapTiledJSON("room3","assets/roomthree.tmj");

    this.load.spritesheet("exit", "assets/exit.png", {frameWidth: 321,frameHeight: 321});
    this.load.spritesheet("point", "assets/point.png", {frameWidth: 321,frameHeight: 321}); 


    this.load.image("oneImg","assets/one.png");
    this.load.image("twoImg","assets/two.png");
    this.load.image("threeImg","assets/three.png");

    this.load.audio('room3','assets/lonely.mp3');
    this.load.audio('collect','assets/yeehaw.mp3')

    }

    create() {
        console.log('*** room3 scene');

        //Step 3 - Create the map from main
        let map = this.make.tilemap({key:'room3'}); 

       //sound

        // this.backgroundmusic = this.sound.add('room3').setVolume(0.3);
        this.collectsound = this.sound.add('collect').setVolume(0.5);

        //  window.music1 = this.backgroundmusic
        //  window.music1.play();
        //  window.music1.loop = true;

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

        this.player.setCollideWorldBounds(true); // don't go out of the this.map
       
        this.decoLayer.setCollisionByProperty({wall : true});
        this.decoLayer.setCollisionByProperty({pillar : true});
        
        this.physics.add.collider(this.decoLayer, this.player);

        
        //direction
        this.exit = this.physics.add.sprite(173, 290, 'exit').setScale(0.5);
        this.point = this.physics.add.sprite(1024, 2166, 'point').setScale(0.2);

         //chicken
        // Tween  
         this.chick1 = this.physics.add.sprite(1577, 855, "chick1").play("chickAnimation").setScale(0.2);
         this.chick2 = this.physics.add.sprite(2662, 650, "chick2").play("chickAnimation").setScale(0.2);
         this.chick3 = this.physics.add.sprite(2061, 1639, "chick3").play("chickAnimation").setScale(0.2);
         this.chick4 = this.physics.add.sprite(1050, 1052, "chickp4").play("chickAnimation").setScale(0.2);
         this.chick5 = this.physics.add.sprite(1590, 2687, "chickp5").play("chickAnimation").setScale(0.2);
         this.chick6 = this.physics.add.sprite(2310, 991, "chick6").play("chickAnimation").setScale(0.2);
         this.chick7 = this.physics.add.sprite(2775, 1280, "chick7").play("chickAnimation").setScale(0.2);
         this.chick8 = this.physics.add.sprite(791, 944, "chick8").play("chickAnimation").setScale(0.2);
         this.chick9 = this.physics.add.sprite(918, 1721, "chick9").play("chickAnimation").setScale(0.2);
 
 
 
        this.physics.add.overlap(this.player, this.chick1, this.overlapsen, null, this );
        this.physics.add.overlap(this.player, this.chick2, this.overlapsen, null, this );
        this.physics.add.overlap(this.player, this.chick3, this.overlapsen, null, this );
        this.physics.add.overlap(this.player, this.chick4, this.overlapsen, null, this );
        this.physics.add.overlap(this.player, this.chick5, this.overlapsen, null, this );
        this.physics.add.overlap(this.player, this.chick6, this.overlapsen, null, this );
        this.physics.add.overlap(this.player, this.chick7, this.overlapsen, null, this );
        this.physics.add.overlap(this.player, this.chick8, this.overlapsen, null, this );
        this.physics.add.overlap(this.player, this.chick9, this.overlapsen, null, this );
 
 
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
       this.time.addEvent({
        delay: 0,
        callback: this.moveDownUp1,
        callbackScope: this,
        loop: false,
      });
      this.time.addEvent({
        delay: 0,
        callback: this.moveDownUp2,
        callbackScope: this,
        loop: false,
      });
  

        // create the arrow keys
        this.cursors = this.input.keyboard.createCursorKeys();

        // camera follow player
        this.cameras.main.startFollow(this.player);


        //collect item
     this.dump1 = this.physics.add.sprite(736, 32, 'dump1').play("dumpAnimation").setScale(1.5);
     this.dump2 = this.physics.add.sprite(731, 3168, 'dump2').play("dumpAnimation").setScale(1.5);
     this.dump3 = this.physics.add.sprite(387, 2688, 'dump3').play("dumpAnimation").setScale(1.5);
     this.dump4 = this.physics.add.sprite(645, 1089, 'dump4').play("dumpAnimation").setScale(1.5);
     this.dump5 = this.physics.add.sprite(347, 1436, 'dump5').play("dumpAnimation").setScale(1.5);
     this.dump6 = this.physics.add.sprite(1507, 96, 'dump6').play("dumpAnimation").setScale(1.5);
     this.dump7 = this.physics.add.sprite(2427, 512, 'dump7').play("dumpAnimation").setScale(1.5);
     this.dump8 = this.physics.add.sprite(3040, 378, 'dump8').play("dumpAnimation").setScale(1.5);
     this.dump9 = this.physics.add.sprite(2377, 815, 'dump9').play("dumpAnimation").setScale(1.5);
     this.dump10 = this.physics.add.sprite(2328, 1861, 'dump10').play("dumpAnimation").setScale(1.5);
     this.dump11 = this.physics.add.sprite(1411, 1664, 'dump11').play("dumpAnimation").setScale(1.5);
     this.dump12 = this.physics.add.sprite(718, 1280, 'dump12').play("dumpAnimation").setScale(1.5);
    
    


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
     
     
     this.paperText = this.add.text(900, 20, this.score, {
      fontSize: '65px',
      fill: '#FFFFFF'
      });

     
      this.paperText.setScrollFactor(0);
      this.paperText.visible = true;

    }

    update() {

      
        if (this.score== 10 ) {
          console.log('levelcomplete');
          //window.music1.stop();   
          this.time.delayedCall(1000,function() {
            this.scene.start("win3");
           },[], this);      
          }
        
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


  moveRightLeft1() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.chick1,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 1907,
        },
        {
          x: 1577,
        },
      ],
    });
  }

  moveRightLeft2() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.chick2,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 3072,
        },
        {
          x: 2662,
        },
      ],
    });
  }


  moveRightLeft3() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.chick3,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 2531,
        },
        {
          x: 2061,
        },
      ],
    });
  }

  moveRightLeft4() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.chick4,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 1363,
        },
        {
          x: 1050,
        },
      ],
    });
  }

  moveRightLeft5() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.chick5,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 2393,
        },
        {
          x: 1590,
        },
      ],
    });
  }

  moveRightLeft6() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.chick6,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 2567,
        },
        {
          x: 2310,
        },
      ],
    });
  }
  
  moveRightLeft7() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.chick7,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 3005,
        },
        {
          x: 2775,
        },
      ],
    });
  }

  moveDownUp1() {
    console.log("moveDownUp1");
    this.tweens.timeline({
      targets: this.chick8,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 1000,
      tweens: [
        {
          y: 1721,
        },
        {
          y: 1334,
        },
      ],
    });
  }

  moveDownUp2() {
    console.log("moveDownUp2");
    this.tweens.timeline({
      targets: this.chick9,
      ease: "Linear",
      loop: -1, // loop forever
      duration: 1000,
      tweens: [
        {
          y: 944,
        },
        {
          y: 1481,
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
    //window.music1.stop();
    this.cameras.main.shake(400);
    this.score = 0
    this.scene.start("gameover3")
  }

  //jump to world
  world(player, tile) {
    console.log("world function");
    let playerPos = {};
    playerPos.x = 1507;
    playerPos.y = 553;
    playerPos.dir = "boy";
    this.scene.start("world",{ playerPos : playerPos });
  }
}