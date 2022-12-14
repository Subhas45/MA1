var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 1000,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false,
            debug: true
        }
    },
    // scale: {
    //     mode: Phaser.Scale.FIT,
    //     autoCenter: Phaser.Scale.CENTER_BOTH
    // },
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [preload, world, room1, room2, room3]
};

var game = new Phaser.Game(config);