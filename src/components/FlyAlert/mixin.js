export default {
  methods: {
    showFlyAlert(text, color, errorDetails) {
      this.$store.commit('FlyAlertMutation', {
        color,
        text,
        errorDetails
      })
    },
    showFlySuccessAlert(text) {
      this.$store.commit('FlyAlertMutation', {
        color: 'success',
        text,
        errorDetails: null
      })
    },
    showFlyErrorAlert(error, text = 'Something went wrong, please try again.') {
      const fatalErrorsRegExp = [
        'INTERNAL ASSERTION FAILED: AsyncQueue is already failed'
      ]
      for (const fatalErrorRegExp of fatalErrorsRegExp) {
        const re = new RegExp(fatalErrorRegExp)
        const isMatch = re.test(error) || re.test(error.message)
        if (isMatch && window.location.hash !== '#retry') {
          if (this.$sentry) {
            this.$sentry.captureMessage(
              `Error successfully captured and page reloaded: ${error}`
            )
          }
          // mark the page to don't trigger reload infinitely
          setTimeout(function() {
            // wait a second so the sentry message can be sent
            window.location.hash = '#retry'
            window.location.reload(true)
          }, 1000)
          return
        }
      }

      // Show the alert
      this.$store.commit('FlyAlertMutation', {
        color: 'error',
        text,
        errorDetails: error
      })
    }
  }
}
