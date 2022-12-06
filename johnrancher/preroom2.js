class preroom2 extends Phaser.Scene {
  constructor() {
    super({
      key: "preroom2",
    });
  }

  // incoming data from scene below
  init(data) {
    this.player = data.player
    this.inventory = data.inventory;
    this.playerPos = data.playerPos;
  }

  preload() {
    // Preload all the assets here
    this.load.image('preroom2','assets/room2.png');

    this.load.audio("won","assets/lonely.mp3");
  
  }
  


  create() {
    console.log("*** preroom2 scene");

    this.add.image(0, 0, 'preroom2').setScale(1).setOrigin(0,0);

    
    

    // Add any sound and music here
    // ( 0 = mute to 1 is loudest )
    // this.music = this.sound.add('won').setVolume(0.3) // 10% volume

    // this.music.play()
    // window.music = this.music

    // Add image and detect spacebar keypress
    //this.add.image(0, 0, 'main').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log(" room2 function");
       // window.music.stop(); 
        let playerPos = {};
         playerPos.x = 1435;
        playerPos.y = 1768;
        playerPos.dir = "boy";
         this.scene.start(
          "room2",
          { playerPos : playerPos }
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
