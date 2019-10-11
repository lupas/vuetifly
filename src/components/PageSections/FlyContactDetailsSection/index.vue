<template>
  <v-container class="my-5">
    <v-row :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
      <v-col class="px-10 py-5" :style="borderStyle" cols="12" md="4">
        <div class="title" :style="titleStyle">
          ADDRESS
        </div>
        <div class="title-second" :class="{ 'text-white': dark }">
          {{ details.addressName }}
        </div>
        <div class="body" :class="{ 'text-white': dark }">
          {{ details.addressLineOne }} <br />
          {{ details.addressLineTwo }}
        </div>
      </v-col>

      <v-col class="px-10 py-5" :style="borderStyle" cols="12" md="4">
        <div class="title" :style="titleStyle" :class="{ 'text-white': dark }">
          CONTACT
        </div>
        <div class="body" :class="{ 'text-white': dark }">
          <p v-if="details.tel">{{ details.tel }}</p>
          <p v-if="details.line">LINE: {{ details.line }}</p>
          <p v-if="details.mail">
            <a
              :href="`mailto:${details.email}?subject=888 Spa Website Request`"
              >{{ details.email }}</a
            >
          </p>
        </div>
      </v-col>

      <v-col class="px-10 py-5" cols="12" md="4">
        <div class="title" :style="titleStyle">
          OPENING HOURS
        </div>
        <div class="body">
          <p>
            <strong>{{ details.openingDays }}</strong>
          </p>
          <p>{{ details.openingHours }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    },
    color: {
      type: String,
      default: 'blue'
    },
    details: {
      type: Object,
      default: () => ({
        email: 'mail@foo.com',
        tel: "000'000'000",
        line: "000'000'000",
        addressName: 'TITLE',
        addressLineOne: 'Address Line 1',
        addressLineTwo: 'Address Line 2',
        openingDays: 'Monday - Sunday',
        openingHours: '08:00am – 6:00pm'
      })
    }
  },
  computed: {
    borderStyle() {
      return {
        'border-right': `1px solid ${this.color}`
      }
    },
    titleStyle() {
      return {
        color: this.color
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.address,
.contact,
.hours {
  padding: 20px 40px;
}

.title {
  font-weight: 700;
  text-transform: uppercase;
}

.title-second {
  font-weight: 700;
  text-transform: uppercase;
}

.body {
  font-weight: 300;
}

p {
  margin-bottom: 0;
}
</style>
