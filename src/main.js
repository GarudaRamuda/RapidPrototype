let canvasStyle = " \
border-radius: 10px; \
"
    
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
    // need to add Play scene here
    scene: [Title, Message, Gameplay, Victory],
    backgroundColor : "#1982FC",
    canvasStyle: canvasStyle
    
}

let game = new Phaser.Game(config);

let messages = [
    {text: "Watch out for slugs!", target: "playScene"},
    {text: "That's good work!", target: "messageScene"},
    {text: "Good job!", target: "playScene"},
    {text: "This is the last level!", target: "messageScene"},
    {text: "Watch out for snails!", target: "playScene"},
    {text: "The roly poly gets a badge!", target: "victoryScene"},
];
