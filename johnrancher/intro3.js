class intro3 extends Phaser.Scene {
  constructor() {
    super({
      key: "intro3",
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
    this.load.image('intro3','assets/intro3.png');

    
    this.load.audio("won","assets/wildwest.mp3");
    
    
   
 
    
  }
  


  create() {
    console.log("*** intro3 scene");

    this.add.image(0, 0, 'intro3').setScale(1).setOrigin(0,0);

    
    

    // Add any sound and music here
    // ( 0 = mute to 1 is loudest )
    this.music = this.sound.add('won').setVolume(0.3) // 10% volume

    this.music.play()
    window.music = this.music

    // Add image and detect spacebar keypress
    //this.add.image(0, 0, 'main').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to intro4 scene");
        window.music.stop(); 
      //   window.music.stop(); 
      //   let playerPos = {};
      //  playerPos.x = 1443;
      //  playerPos.y = 1742;
      //  playerPos.dir = "boy";
      //    this.scene.start(
      //     "world",
      //     { playerPos : playerPos }
      //   );
      // },
      this.scene.start(
        "intro4",
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
