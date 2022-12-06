class preroom3 extends Phaser.Scene {
  constructor() {
    super({
      key: "preroom3",
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
    this.load.image('preroom3','assets/room3.png');

    
    
    
    
  }
  


  create() {
    console.log("*** preroom3 scene");

    this.add.image(0, 0, 'preroom3').setScale(1).setOrigin(0,0);

    
    

    // Add any sound and music here
    // ( 0 = mute to 1 is loudest )
    

    // Add image and detect spacebar keypress
    //this.add.image(0, 0, 'main').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log(" room3 function");
       // window.music.stop(); 
        let playerPos = {};
         playerPos.x = 1435;
        playerPos.y = 1768;
        playerPos.dir = "boy";
         this.scene.start(
          "room3",
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