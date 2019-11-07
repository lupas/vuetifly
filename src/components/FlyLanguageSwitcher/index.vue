<template>
  <v-menu left offset-y>
    <template v-slot:activator="{ on: menu }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn text v-on="{ ...tooltip, ...menu }">
            <v-img :src="getIcon(currentLanguage.id)" height="24" width="24" />
            <span class="ml-2" v-if="showText">{{
              currentLanguage.id | capitalize
            }}</span>
          </v-btn>
        </template>
        <span>{{ tooltipText }}</span>
      </v-tooltip>
    </template>
    <v-list light>
      <v-list-item
        v-for="language in languages"
        :key="language.id"
        @click="changeLanguage(language.id)"
      >
        <v-list-item-icon>
          <img :src="getIcon(language.id)" />
        </v-list-item-icon>
        <v-list-item-title>
          {{ language.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  filters: {
    capitalize: function(text) {
      return text.toUpperCase()
    }
  },
  props: {
    languages: {
      type: Array,
      required: true
    },
    tooltipText: {
      type: String,
      default: 'Change Language'
    },
    showText: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentLanguage() {
      const english = JSON.parse(JSON.stringify(this.languages)).filter(
        x => x.id === 'en'
      )[0]
      const possibleLanguageId = this.$route.path.slice(1, 3)
      const possibleLanguage = JSON.parse(
        JSON.stringify(this.languages)
      ).filter(x => x.id === possibleLanguageId)[0]

      if (!possibleLanguage) {
        return english
      }

      // If another language then english is selected,
      // the third url character should either be / or emtpy
      const thirdUrlCharacter = this.$route.path.slice(3, 4)
      if (thirdUrlCharacter === '/' || thirdUrlCharacter === '') {
        return possibleLanguage
      }

      return english
    }
  },
  methods: {
    changeLanguage(id) {
      this.$router.push(this.switchLocalePath(id))
      this.$emit('languageChanged', id)
    },
    getIcon(id) {
      try {
        return require(`./icons/${id}.svg`)
      } catch (e) {
        console.error(e)
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  height: 24px;
  width: 24px;
}
</style>
