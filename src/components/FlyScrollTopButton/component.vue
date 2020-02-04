<template>
  <v-fab-transition>
    <v-btn
      v-show="showFloatingButton"
      v-scroll="onScroll"
      @click="scrollToTop"
      color="primary"
      fab
      fixed
      bottom
      right
    >
      <v-icon>{{ mdiMenuUp }}</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
import { mdiMenuUp } from '@mdi/js'

export default {
  data() {
    return {
      mdiMenuUp,
      offsetTop: 0
    }
  },
  computed: {
    showFloatingButton() {
      return this.offsetTop >= 300
    }
  },
  methods: {
    onScroll() {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    },
    scrollToTop() {
      this.$vuetify.goTo(0)
    }
  }
}
</script>

<style lang="scss" scoped></style>
