module.exports = {
  init: () => ({
    pos: [0, 0]
  }),
  move: () => ({
    pos: [0, 100]
  }),
  draw: (character, ctx) => {
    ctx.font = "30px Arial"
    const ms = (new Date()).getMilliseconds()
    ctx.fillText(ms, 30, 30)
    return character
  }
}
