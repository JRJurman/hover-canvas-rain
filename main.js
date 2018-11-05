const HoverEngine = require('hover-engine')
const engine = new HoverEngine()

const canvas = document.getElementById('game-canvas')

engine.addActions({
  canvas: require('./actions/canvas')(canvas),
  character: require('./actions/character'),
  ticker: require('./actions/ticker')
})

canvas.onclick = engine.actions.initDraw
