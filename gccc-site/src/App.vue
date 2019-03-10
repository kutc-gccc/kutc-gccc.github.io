<template>
  <div id="app">
    <Header/>
    <div class="header-padding"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  box-sizing: border-box;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}

body {
  padding: 0;
  margin: 0;
}

.header-padding {
  height: 6vh;
}
</style>
