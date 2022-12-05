class preload extends Phaser.Scene {
  constructor() {
    super("preload");

    // Put global variable here
  }
  
  // incoming data from scene below
 init(data) {
  this.player = data.player
  this.inventory = data.inventory;
  this.playerPos = data.playerPos;
}


  
  preload() {

    this.load.spritesheet("enemy", "assets/wolf.png", {frameWidth: 320,frameHeight: 320});

    this.load.spritesheet("cow", "assets/cow.png", {frameWidth: 320,frameHeight: 320});

    this.load.spritesheet("sheep", "assets/sheep.png", {frameWidth: 320,frameHeight: 320});

    this.load.spritesheet("chick", "assets/chick.png", {frameWidth: 320,frameHeight: 320});
    
    this.load.spritesheet("about", "assets/about.png", {frameWidth: 321,frameHeight: 321});
    
    this.load.spritesheet("cattlefarm", "assets/cattlefarm.png", {frameWidth: 321,frameHeight: 321});
     
    this.load.spritesheet("sheepfarm", "assets/sheepfarm.png", {frameWidth: 321,frameHeight: 321});
    
    this.load.spritesheet("chickfarm", "assets/chickfarm.png", {frameWidth: 321,frameHeight: 321});
     
     
     
     
    this.load.spritesheet('boy', 'assets/boy.png',{ frameWidth:320, frameHeight:320});   

    this.load.spritesheet('dump', 'assets/dump.png',{ frameWidth:32, frameHeight:32});   

    this.load.image("introstart","assets/introstart.png");

    
      
  }
  

  create() {
    console.log("*** preload scene");


    this.add.image(0, 0, 'introstart').setOrigin(0, 0);

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
     key: "wolf",
     frames: this.anims.generateFrameNumbers("enemy", { start: 0, end: 3 }),
     frameRate: 5,
    repeat: -1,
   });

   this.anims.create({
    key: "sheepAnimation",
    frames: this.anims.generateFrameNumbers("sheep", { start: 0, end: 3 }),
    frameRate: 5,
   repeat: -1,
  });

  this.anims.create({
    key: "cowAnimation",
    frames: this.anims.generateFrameNumbers("cow", { start: 0, end: 3 }),
    frameRate: 5,
   repeat: -1,
  });

  this.anims.create({
    key: "chickAnimation",
    frames: this.anims.generateFrameNumbers("chick", { start: 0, end: 3 }),
    frameRate: 5,
   repeat: -1,
  });


  
   this.anims.create({
    key:'dumpAnimation',
    frames:this.anims.generateFrameNumbers('dump',
    { start:0, end:3}),
    frameRate:4,
    repeat:-1
});


this.anims.create({
  key:'aboutAnimation',
  frames:this.anims.generateFrameNumbers('about',
  { start:0, end:3}),
  frameRate:4,
  repeat:-1
});



this.anims.create({
  key:'farm1Animation',
  frames:this.anims.generateFrameNumbers('cattlefarm',
  { start:0, end:3}),
  frameRate:4,
  repeat:-1
});

this.anims.create({
  key:'farm2Animation',
  frames:this.anims.generateFrameNumbers('sheepfarm',
  { start:0, end:3}),
  frameRate:4,
  repeat:-1
});
  
this.anims.create({
  key:'farm3Animation',
  frames:this.anims.generateFrameNumbers('chickfarm',
  { start:0, end:3}),
  frameRate:4,
  repeat:-1
});




    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to intro1 scene");

        this.scene.start(
          "intro1",
          // Optional parameters
          {}
        );
      },
      this
    );

    // // Add any text in the main page
    // this.add.text(90, 600, "Press spacebar to continue", {
    //   font: "30px Courier",
    //   fill: "#FFFFFF",
    // });

    // Create all the game animations here
  }
}
