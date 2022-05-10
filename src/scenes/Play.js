class Play extends Phaser.Scene {

   constructor() {
      super("Play");
   }

   preload() {

   }

   create() {

      this.gameover = false;

      // Player
      this.player = new Player(this, config.width / 4, config.height - 30, 'player');
      this.player.setCollideWorldBounds(true);

      // Slugs
      this.slug1 = new Slug(this, config.width, config.height - 20, 'slug');
      this.slug2 = new Slug(this, config.width + 200, config.height - 20, 'slug');
      

      // touch pointer
      pointer = this.input.activePointer;

   }

   update() {

      if (!this.gameover) {
         // Player update
         this.player.update();

         // Slugs update
         this.slug1.update();
         this.slug2.update();
      } else {
         
      }

   }

   gameOver() {
      console.log("game over");
      this.gameover = true;
   }
}
