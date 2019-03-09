<template>
  <div id="app">
    <Header/>
    <MainContent/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import MainContent from "./components/MainContent.vue";

@Component({
  components: {
    Header,
    Footer,
    MainContent,
  },
})
export default class App extends Vue {}
</script>

<style>
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
</style>
