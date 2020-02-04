export default {
  methods: {
    showFlyAlert({
      color = 'success',
      text = '',
      defaultError = false,
      detailText = null
    }) {
      if (defaultError) {
        color = 'error'
        text = 'Something went wrong, please try again.'
      }
      this.$store.commit('FlyAlertMutation', {
        color,
        text,
        detailText
      })
    }
  }
}
