class App {
  constructor() {
    this.canvas = document.querySelector('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.foreground = document.getElementById('foreground')
    this.level = new Level(this.loadLevel.bind(this), '../assets/cities/cerulean-city.png')
    this.movement = new Movement([0, 0], [0, 0], this.ctx, this.level)
  }
  startEventListeners() {
    document.addEventListener('keydown', this.handleMovement.bind(this))
  }
  loadLevel() {
    this.ctx.drawImage(this.level.image, 0, 0)
  }
  setCanvasStyling() {
    this.canvas.style.height = '400px'
  }
  handleMovement(e) {
    const movements = new Map(
      [
        [37, this.movement.moveLeft.bind(this.movement)],
        [38, this.movement.moveUp.bind(this.movement)],
        [39, this.movement.moveRight.bind(this.movement)],
        [40, this.movement.moveDown.bind(this.movement)],
      ]
    )
    if(!movements.has(e.keyCode)) return
    movements.get(e.keyCode)()
  }
  start() {
    this.setCanvasStyling()
    this.startEventListeners()
  }
}
