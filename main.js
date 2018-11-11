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
const randY = () => (Math.random()*-canvas.height) - canvas.height
const randSpd = () => (Math.random()*15) + 3

// create rain drop actions, and add them to the engine
const rainDrops =  [...Array(300).keys()]
  .map(_ => newRain(randX(), randY(), randSpd(), canvas.height))
  .forEach((rainActions, index) => {
    engine.addActions({[`rain${index}`]: rainActions})
  })

engine.actions.initDraw()
