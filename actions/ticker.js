module.exports = {
  init: () => (null),
  initDraw: (ticker, _, actions) => {
    setInterval(actions.update, 1000/24)
  },
  draw: (ticker, ctx, actions) => {
    window.requestAnimationFrame(() => {
      actions.clear()
      actions.draw(ctx)
    })
  },
}
