<template>
  <v-card>
    <v-snackbar
      top
      class="noPrint iPhonexTopPadding"
      multi-line
      v-model="snackbarLink"
      :color="color"
    >
      <span @click="showAlert">{{ snackbarText }}</span>
      <v-btn text @click.native="hideSnackbar">Close</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      snackbarIsShown: state => state.vuetifly.FlyAlert.isShown,
      snackbarText: state => state.vuetifly.FlyAlert.text,
      snackbarDetailText: state => state.vuetifly.FlyAlert.detailText,
      color: state => state.vuetifly.FlyAlert.color
    }),
    snackbarLink: {
      get() {
        return this.snackbarIsShown
      },
      set(val) {
        if (val !== null) {
          this.hideSnackbar()
        } else {
          // Should never happen
          this.vuexToggleSnackbar({ isShown: true, color: null, text: null })
        }
      }
    }
  },
  methods: {
    ...mapMutations({
      vuexToggleSnackbar: 'FlyAlertMutation'
    }),
    hideSnackbar() {
      this.vuexToggleSnackbar({ isShown: false, color: null, text: null })
    },
    showAlert() {
      if (this.snackbarDetailText) {
        alert(this.snackbarDetailText)
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.iPhonexTopPadding {
  padding-top: env(safe-area-inset-top);
}

@media print {
  .ajNoPrint,
  .ajNoPrint * {
    display: none !important;
  }
}
</style>
