module.exports = canvas => ({
  init: () => canvas.getContext('2d'),
  clear: (ctx) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    return ctx
  },
  initDraw: (ctx, _, actions) => {
    actions.draw(ctx)
    return ctx
  }
})
