module.exports = (initX, initY, initSpeed, height) => ({
  init: () => ({ x: initX, y: initY, speed: initSpeed }),
  update: (char) => Object.assign(
    {}, char, {y: char.y < height ? char.y + char.speed : initY}
  ),
  draw: (char, ctx) => {
    ctx.fillStyle = 'rgb(138, 43, 226)';
    ctx.fillRect(char.x,char.y,1,10)
    return char
  }
})
