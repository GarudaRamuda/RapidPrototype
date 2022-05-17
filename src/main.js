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

let messages = [
    {text: "Watch out for slugs!", target: "playScene"},
    {text: "That's good work!", target: "messageScene"},
    {text: "Good job!", target: "playScene"},
    {text: "This is the last level!", target: "messageScene"},
    {text: "Watch out for snails!", target: "playScene"},
    {text: "The roly poly gets a badge!", target: "victoryScene"},
];