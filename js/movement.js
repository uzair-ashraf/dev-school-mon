class Movement {
  constructor(levelPosition, playerPosition, ctx, level) {
    this.levelPosition = levelPosition
    this.playerPosition = playerPosition
    this.ctx = ctx
    this.level = level
  }
  moveLeft() {
    let [x, y] = this.levelPosition
    this.ctx.drawImage(this.level.image, --y, x)
    this.levelPosition = [x, y]
  }
  moveRight() {
    let [x, y] = this.levelPosition
    this.ctx.drawImage(this.level.image, ++y, x)
    this.levelPosition = [x, y]
  }
  moveUp() {

  }
  moveDown() {

  }
}
