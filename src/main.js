let canvasStyle = " \
border-radius: 10px; \
"

let config = {
    type: Phaser.CANVAS,
    width: 480, // street.png width * export resize factor
    height: 320,
    scene : [Title, Message, Victory],
    backgroundColor : "#1982FC",
    canvasStyle: canvasStyle
    
}

let game = new Phaser.Game(config);