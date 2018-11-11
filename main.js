const HoverEngine = require('hover-engine')
const engine = new HoverEngine()
const newRain = require('./actions/rain')

// get canvas object for canvas actions
const canvas = document.getElementById('game-canvas')

engine.addActions({
  canvas: require('./actions/canvas')(canvas),
  ticker: require('./actions/ticker')
})

// random value helpers for rain objects
const randX = () => Math.random()*canvas.width
const randY = () => (Math.random()*-canvas.height)
const randSpd = () => (Math.random()*15) + 3

// create rain drop actions, and add them to the engine
const rainDrops =  [...Array(1000).keys()]
  .map(_ => ({x: randX(), y: randY(), spd: randSpd(), cap: canvas.height}))

engine.addActions({
  rain: require('./actions/rain')(rainDrops)
})

engine.actions.initDraw()
