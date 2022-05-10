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

let currMesageIndex = 0; // Index of current message
let messages = [
    {text: "Watch out for slugs!", target: "Play"},
    {text: "That's good work!", target: "Message"},
    {text: "Good job!", target: "Play"},
    {text: "This is the last level!", target: "Message"},
    {text: "Watch out for snails!", target: "Play"},
    {text: "The roly poly gets a badge!", target: "Victory"},
];