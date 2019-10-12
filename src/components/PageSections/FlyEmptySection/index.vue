<template>
  <section>
    <v-container class="my-5" :fluid="fluid">
      <v-row v-if="title" justify="center">
        <div class="mb-8 text-center">
          <h2 class="display-1 font-weight-medium">
            {{ title }}
          </h2>
          <p v-if="subtitle" class="title font-weight-light">
            {{ subtitle }}
          </p>
        </div>
      </v-row>
      <v-row class="text-center" justify="center">
        <slot />
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'empty-section',
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    fluid: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    },
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped></style>
