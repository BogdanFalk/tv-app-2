<template>
  <v-app>
    <v-content transition="slide-x-transition">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <foot/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",
  components: {
   
  },
  data() {
    return {
      //
    };
  }
};
</script>
