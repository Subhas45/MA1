class preload extends Phaser.Scene {
  constructor() {
    super("preload");

    // Put global variable here
  }

  preload() {

    this.load.spritesheet("enemy", "assets/wolf.png", {frameWidth: 320,frameHeight: 320});
     
    this.load.spritesheet('boy', 'assets/boy.png',{ frameWidth:320, frameHeight:320});   

    this.load.spritesheet('dump', 'assets/dump1.png',{ frameWidth:32, frameHeight:32});   

    this.load.image("cover","assets/cover.png");

    
      
  }
  

  create() {
    console.log("*** preload scene");


    this.add.image(0, 0, 'cover').setOrigin(0, 0);

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

   //tween anims

   this.anims.create({
    key: "dirt",
    frames: this.anims.generateFrameNumbers("dump", { start: 0, end: 3 }),
    frameRate: 5,
   repeat: -1,
  });

  // this.anims.create({
  //   key: "wo1",
  //   frames: this.anims.generateFrameNumbers("enemy", { start: 0, end: 3 }),
  //   frameRate: 15,
  //   repeat: -1,
  // });

  // this.anims.create({
  //   key: "wo2",
  //   frames: this.anims.generateFrameNumbers("enemy", { start: 4, end: 7 }),
  //   frameRate: 15,
  //   repeat: -1,
  // });

  // this.anims.create({
  //   key: "wo3",
  //   frames: this.anims.generateFrameNumbers("enemy", { start: 8, end: 11 }),
  //   frameRate: 15,
  //   repeat: -1,
  // });

  // this.anims.create({
  //   key: "wo4",
  //   frames: this.anims.generateFrameNumbers("enemy", { start: 12, end: 15 }),
  //   frameRate: 15,
  //   repeat: -1,
  // });


    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to world scene");

        this.scene.start(
          "world",
          // Optional parameters
          {}
        );
      },
      this
    );

    // Add any text in the main page
    this.add.text(90, 600, "Press spacebar to continue", {
      font: "30px Courier",
      fill: "#FFFFFF",
    });

    // Create all the game animations here
  }
}
