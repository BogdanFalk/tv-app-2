<template>
  <v-carousel hide-delimiters style="height:100%">
    <News/>
    <RattT8/>
  </v-carousel>
</template>

<script>
import News from "../components/news-component";
import RattT8 from "../components/ratt-T8-component";
export default {
  components: {
    News,
    RattT8
  },
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  }
};
</script>

<style>
</style>
