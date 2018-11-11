module.exports = {
  init: () => ({updater: null, animator: null}),
  initDraw: (ticker, _, actions) => {
    const updater = setInterval(actions.update, 1000/24)
    return Object.assign(
      {}, ticker, {updater}
    )
  },
  draw: (ticker, ctx, actions) => {
    const drawer = window.requestAnimationFrame(() => {
      actions.clear()
      actions.draw(ctx)
    })
    return Object.assign({}, ticker, drawer)
  },
}
