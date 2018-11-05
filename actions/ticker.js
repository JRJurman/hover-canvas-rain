module.exports = {
  init: () => null,
  draw: (ticker, ctx, actions) => {
    window.requestAnimationFrame(() => {
      actions.clear()
      actions.draw(ctx)
    })
  }
}
