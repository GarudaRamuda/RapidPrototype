class Gameplay extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    init(data) {
        this.text = messages[data.messageIndex].text;
        this.targetSceneKey = messages[data.messageIndex].target;
        this.currMessageIndex = data.messageIndex;
    }

    create() {
        this.loseTransitionText = this.add.text(32, 32, "Press L to lose!");
        this.input.on("pointerdown", () => {
            console.log(this.targetSceneKey)
            this.scene.start(this.targetSceneKey, {messageIndex: this.currMessageIndex});
        });
        this.input.keyboard.on("keydown-L", () => {
            this.scene.start("lossScene");
        }, this) 
    }
}