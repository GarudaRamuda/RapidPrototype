// let canvasStyle = " \
// border-radius: 10px; \
// "

// let config = {
//     type: Phaser.CANVAS,
//     width: 768, // street.png width * export resize factor
//     height: 432,
//     scene : [Play],
//     backgroundColor : "#1982FC",
//     canvasStyle: canvasStyle
    
// }

let config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.Center_BOTH,
        width: 480,
        height: 320
    },
    scene: [Title]
    // Play, Final
}

let game = new Phaser.Game(config);

