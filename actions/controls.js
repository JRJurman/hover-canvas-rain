module.exports = {
  init: () => ({
    ArrowUp: 0,
    ArrowDown: 0,
    ArrowLeft: 0,
    ArrowRight: 0,
    " ": 0
  }),
  keyUp: (controls, key, actions) => {
    const newControls = Object.assign({}, controls, {[key]: 0 })
    actions.emitControls(newControls)
    return newControls
  },
  keyDown: (controls, key, actions) => {
    const newControls = Object.assign({}, controls, {[key]: 1 })
    actions.emitControls(newControls)
    return newControls
  }
}
