<template>
  <section>
    <div class="mapouter mapSizes" v-show="iframeLoaded">
      <div class="gmap_canvas mapSizes">
        <iframe
          width="100%"
          height="300"
          id="gmap_canvas"
          :src="src"
          frameborder="0"
          @load="load"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
    <div
      v-if="!iframeLoaded"
      class="flex items-center justify-center mapSizes"
      :style="{ 'background-color': backgroundColor }"
    >
      <!--<NxLoadingWheel color="blue" size="50" class="navbarMargins" />-->
    </div>
  </section>
</template>

<script>
export default {
  name: 'google-maps-section',
  components: {
    //NxLoadingWheel: () => import('../../NxLoadingWheel/index.js')
  },
  props: {
    src: {
      type: String,
      required: true
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data() {
    return {
      iframeLoaded: false
    }
  },
  methods: {
    load() {
      this.iframeLoaded = true
    }
  }
}
</script>
<style lang="postcss" scoped>
.mapSizes {
  height: 300px;
  width: 100vw;
}

.mapouter {
  position: relative;
  text-align: right;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
}
</style>
