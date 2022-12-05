class room2 extends Phaser.Scene {
    constructor() {
        super({ key: 'room2' });
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
    this.load.tilemapTiledJSON("room2","assets/roomtwo.tmj");

    this.load.spritesheet("exit", "assets/exit.png", {frameWidth: 321,frameHeight: 321});
    this.load.spritesheet("point", "assets/point.png", {frameWidth: 321,frameHeight: 321}); 


    this.load.image("oneImg","assets/one.png");
    this.load.image("twoImg","assets/two.png");
    this.load.image("threeImg","assets/three.png");

    this.load.audio('room','assets/lonely.mp3');
    this.load.audio('collect','assets/yeehaw.mp3')

    }

    create() {
        console.log('*** room2 scene');

        //Step 3 - Create the map from main
        let map = this.make.tilemap({key:'room2'}); 

       //sound

        this.backgroundmusic = this.sound.add('room').setVolume(0.3);
        this.collectsound = this.sound.add('collect').setVolume(0.5);

         window.music1 = this.backgroundmusic
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

        this.player.setCollideWorldBounds(true); // don't go out of the this.map
       
        this.decoLayer.setCollisionByProperty({wall : true});
        this.decoLayer.setCollisionByProperty({pillar : true});
        
        this.physics.add.collider(this.decoLayer, this.player);


         //sheep
        // Tween  
         this.sheep1 = this.physics.add.sprite(1709, 582, "sheep1").play("sheepAnimation").setScale(0.2);
         this.sheep2 = this.physics.add.sprite(878, 736, "sheep2").play("sheepAnimation").setScale(0.2);
         this.sheep3 = this.physics.add.sprite(1458, 1353, "sheep3").play("sheepAnimation").setScale(0.2);
         this.sheep4 = this.physics.add.sprite(1831, 1120, "sheep4").play("sheepAnimation").setScale(0.2);
         this.sheep5 = this.physics.add.sprite(2654, 1699, "sheep5").play("sheepAnimation").setScale(0.2);
         this.sheep6 = this.physics.add.sprite(2474, 2201, "sheep6").play("sheepAnimation").setScale(0.2);
         this.sheep7 = this.physics.add.sprite(697, 2484, "sheep7").play("sheepAnimation").setScale(0.2);
 
 
        this.physics.add.overlap(this.player, this.sheep1, this.overlapsen, null, this );
        this.physics.add.overlap(this.player, this.sheep2, this.overlapsen, null, this );
        this.physics.add.overlap(this.player, this.sheep3, this.overlapsen, null, this );
        this.physics.add.overlap(this.player, this.sheep4, this.overlapsen, null, this );
        this.physics.add.overlap(this.player, this.sheep5, this.overlapsen, null, this );
        this.physics.add.overlap(this.player, this.sheep6, this.overlapsen, null, this );
        this.physics.add.overlap(this.player, this.sheep7, this.overlapsen, null, this );
 
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
       this.point = this.physics.add.sprite(618, 1411, 'point').setScale(0.2);
    

        //collect item
     this.dump1 = this.physics.add.sprite(1175, 912, 'dump1').play("dumpAnimation").setScale(1.5);
     this.dump2 = this.physics.add.sprite(1926, 1488, 'dump2').play("dumpAnimation").setScale(1.5);
     this.dump3 = this.physics.add.sprite(3168, 2018, 'dump3').play("dumpAnimation").setScale(1.5);
     this.dump4 = this.physics.add.sprite(645, 1089, 'dump4').play("dumpAnimation").setScale(1.5);
     this.dump5 = this.physics.add.sprite(1954, 3146, 'dump5').play("dumpAnimation").setScale(1.5);
     this.dump6 = this.physics.add.sprite(631, 2226, 'dump6').play("dumpAnimation").setScale(1.5);
     this.dump7 = this.physics.add.sprite(32, 1872, 'dump7').play("dumpAnimation").setScale(1.5);
     this.dump8 = this.physics.add.sprite(581, 1065, 'dump8').play("dumpAnimation").setScale(1.5);
     this.dump9 = this.physics.add.sprite(1231, 2015, 'dump9').play("dumpAnimation").setScale(1.5);
     this.dump10 = this.physics.add.sprite(154, 3071, 'dump10').play("dumpAnimation").setScale(1.5);
     this.dump11 = this.physics.add.sprite(2573, 380, 'dump11').play("dumpAnimation").setScale(1.5);
     this.dump12 = this.physics.add.sprite(1888, 398, 'dump12').play("dumpAnimation").setScale(1.5);
    
    


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

        // if ( this.player.x < 1113 && this.player.y > 362 && this.player.y < 402 ) {
        //    console.log("room2 exit")
        //    this.world();
        //   }
        if (this.score== 3 ) {
          console.log('levelcomplete');
          window.music1.stop();   
          this.time.delayedCall(1000,function() {
            this.scene.start("win2");
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
      targets: this.sheep1,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 1946,
        },
        {
          x: 1709,
        },
      ],
    });
  }

  moveRightLeft2() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.sheep2,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 1095,
        },
        {
          x: 878,
        },
      ],
    });
  }


  moveRightLeft3() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.sheep3,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 1148,
        },
        {
          x: 1458,
        },
      ],
    });
  }

  moveRightLeft4() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.sheep4,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 2054,
        },
        {
          x: 1831,
        },
      ],
    });
  }

  moveRightLeft5() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.sheep5,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 2848,
        },
        {
          x: 2654,
        },
      ],
    });
  }

  moveRightLeft6() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.sheep6,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 2117,
        },
        {
          x: 2474,
        },
      ],
    });
  }
  
  moveRightLeft7() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.sheep7,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 2000,
      tweens: [
        {
          x: 964,
        },
        {
          x: 697,
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
    this.cameras.main.shake(400);
    this.score = 0
    this.scene.start("gameover2")
  }

  //jump to world
  world(player, tile) {
    console.log("world function");
    let playerPos = {};
    playerPos.x = 2324;
    playerPos.y = 1910;
    playerPos.dir = "boy";
    this.scene.start("world",{ playerPos : playerPos });
  }
}
  