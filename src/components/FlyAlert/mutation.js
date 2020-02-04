export default (
  state,
  { isShown = true, text = '', color = 'success', detailText }
) => {
  state.vuetifly.FlyAlert.isShown = isShown
  state.vuetifly.FlyAlert.text = text
  state.vuetifly.FlyAlert.detailText = detailText
  state.vuetifly.FlyAlert.color = color
}
