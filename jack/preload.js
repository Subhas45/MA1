class preload extends Phaser.Scene {
  constructor() {
    super("preload");

    // Put global variable here
  }

  preload() {
    this.load.image("cover","assets/cover.png");
  }

  create() {
    console.log("*** preload scene");

    this.add.image(0, 0, 'cover').setOrigin(0, 0);
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
