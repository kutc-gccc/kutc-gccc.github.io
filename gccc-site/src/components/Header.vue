<template>
  <header>
    <section class="logo">
      <h2>GCCC</h2>
    </section>
    <section class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/news">News</router-link>
      <router-link to="/works">Works</router-link>
    </section>
  </header>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "./button/Button.vue";

@Component({
  components: {
    Button,
  },
})
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {

}

header {
  background-color: rgba(10, 20, 20, 0.8);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  height: 6vh;
  width: 100%;
}

h2 {
  color: #eef;
  font-size: 44px;
  padding: 0;
  margin: 0 24px;
}

.links router-link, a {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-decoration: none;
  border-bottom: solid thin #fff;
  margin: 0 8px;
  padding: 0 2px;
}

main {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

main h1 {
  color: #fff;
  font-size: 84px;
  padding: 0;
  margin: 0;
  padding: 0;
  margin-top: 10%;
}

main p {
  color: #eee;
  font-size: 24px;
}
</style>
