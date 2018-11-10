module.exports = {
  init: () => ({
    squished: false,
    acc: 0,
    pos: 0,
    speed: 0
  }),
  emitControls: (char, controls) => {
    const isSquished = !!controls.ArrowDown
    const isJumping = !!controls[" "]

    return Object.assign({}, char, {
      squished: isSquished,
      acc: isJumping ? 4.9 : 9.8,
      speed: isJumping && char.pos == 0 ? 30 : char.speed
    })
  },
  update: (char) => {
    console.log(char)
    return Object.assign({}, char, {
      speed: char.pos >= 0 ? char.speed - char.acc : 0,
      pos: char.pos >= 0 ? char.pos + char.speed : 0
    })
  },
  draw: (char, ctx) => {
    ctx.fillStyle = '#ef0438';
    ctx.fillRect(
      100,
      190 - char.pos - (char.squished ? 0 : 20),
      30,
      char.squished ? 10 : 30)
    return char
  }
}
