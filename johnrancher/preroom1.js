class preroom1 extends Phaser.Scene {
  constructor() {
    super({
      key: "preroom1",
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
    this.load.image('preroom1','assets/room1.png');
    
  }
  


  create() {
    console.log("*** preroom1 scene");

    this.add.image(0, 0, 'preroom1').setScale(1).setOrigin(0,0);

    
    

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
        console.log(" room1 function");
        let playerPos = {};
        playerPos.x = 1562;
       playerPos.y = 2195;
       playerPos.dir = "boy";
         this.scene.start(
          "room1",
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
