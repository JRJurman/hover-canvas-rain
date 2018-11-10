module.exports = {
  init: () => null,
  draw: (_, ctx) => {
    ctx.font = "30px Arial"
    const ms = (new Date()).getMilliseconds()
    ctx.fillStyle = '#e338e3';
    ctx.fillText(ms, ctx.canvas.width - 60, 30)
  }
}
