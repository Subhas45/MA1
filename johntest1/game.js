var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 1000,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: true,
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [preload, world, room1, room2, room3, gameover1, gameover2, gameover3, gameover4, win1, win2, win3, 
        intro1, intro2, intro3, intro4, preroom1, preroom2, preroom3, aboutgame]
};

var game = new Phaser.Game(config);
window.dump1 = true;
