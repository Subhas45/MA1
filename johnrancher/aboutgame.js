class aboutgame extends Phaser.Scene {
  constructor() {
    super({
      key: "aboutgame",
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
    this.load.image('aboutgame','assets/aboutgame.png');

    
    this.load.audio("won","assets/wildwest.mp3");
    
    
   
 
    
  }
  


  create() {
    console.log("*** aboutgame scene");

    this.add.image(0, 0, 'aboutgame').setScale(1).setOrigin(0,0);

    
    

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
        console.log("world function");
        window.music.stop(); 
        let playerPos = {};
       playerPos.x = 1776;
       playerPos.y = 2655;
       playerPos.dir = "boy";
         this.scene.start(
          "world",
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
