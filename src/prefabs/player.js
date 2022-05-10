class Player extends Phaser.Physics.Arcade.Sprite {
   constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
      scene.add.existing(this);
      scene.physics.add.existing(this);

      this.isJumping = false;
   
   }
   update() {

      if (pointer.isDown && !this.isJumping) {
         this.isJumping = true;
         this.body.setVelocityY(-200);
         console.log(this.body);
      }
   
      if(this.body.velocity.y == 0 && this.isJumping) {
         console.log("landed");
         this.isJumping = false;
      }
   }

   gameOver() {
      this.body.setVelocityY(0);
      this.body.setVelocityX(0);
      this.body.setAccelerationX(0);
      this.body.setAccelerationY(0);
   }

}