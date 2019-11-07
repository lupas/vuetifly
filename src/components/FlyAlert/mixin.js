export default {
  methods: {
    showFlyAlert({ color = 'success', text, defaultError = false }) {
      if (defaultError) {
        text = 'Something went wrong, please try again.'
      }
      this.$store.commit('FlyAlertMutation', {
        color,
        text
      })
    }
  }
}
