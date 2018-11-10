module.exports = {
  init: () => (new Date()),
  draw: (ticker, ctx, actions) => {
    window.requestAnimationFrame(() => {
      actions.clear()
      actions.draw(ctx)
    })
    const updatedTicker = new Date()
    if ((updatedTicker - ticker) > 60) {
      actions.update()
      return updatedTicker
    }
    return ticker
  },
}
