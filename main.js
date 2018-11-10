const HoverEngine = require('hover-engine')
const engine = new HoverEngine()

const canvas = document.getElementById('game-canvas')

engine.addActions({
  canvas: require('./actions/canvas')(canvas),
  ticker: require('./actions/ticker'),
  character: require('./actions/character'),
  clock: require('./actions/clock'),
  controls: require('./actions/controls')
})

canvas.onclick = engine.actions.initDraw
window.onkeydown = event => engine.actions.keyDown(event.key)
window.onkeyup = event => engine.actions.keyUp(event.key)
