export default (state, { isShown = true, text, color, errorDetails }) => {
  state.vuetifly.FlyAlert.isShown = isShown
  state.vuetifly.FlyAlert.text = text
  state.vuetifly.FlyAlert.errorDetails = errorDetails
  state.vuetifly.FlyAlert.color = color
}
