export default (state, { isShown = true, text = '', color = 'success' }) => {
  state.vuetifly.FlyAlert.isShown = isShown
  state.vuetifly.FlyAlert.text = text
  state.vuetifly.FlyAlert.color = color
}
