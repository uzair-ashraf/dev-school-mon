class Level {
  constructor(onLoad, path) {
    this.image = new Image()
    this.setPathAndAddEventListener(onLoad, path)
  }
  setPathAndAddEventListener(onLoad, path) {
    this.image.src = path
    this.image.onload = onLoad
  }
}
