const { Phaser } = require("../lib/phaser")

let canvasStyle = " \
border-radius: 10px; \
"

let config = {
    type: Phaser.CANVAS,
    width: 768, // street.png width * export resize factor
    height: 432,
    scene : [Play],
    backgroundColor : "#1982FC",
    canvasStyle: canvasStyle
    
}

let game = new Phaser.game(config);