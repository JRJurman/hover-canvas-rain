module.exports = (drops) => ({
  init: () => drops,
  update: (drops) => drops.map(drop => Object.assign({}, drop, {y: drop.y < drop.cap ? drop.y + drop.spd : -10})),
  draw: (drops, ctx) => {
    drops.forEach(drop => {
      ctx.fillStyle = 'rgb(138, 43, 226)'
      ctx.fillRect(drop.x,drop.y,1,10)
    })
    return drops
  }
})
