<template>
  <header>
    <section class="logo">
      <router-link to="/"><h2>GCCC</h2></router-link>
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
import Button from "./parts/Button.vue";

@Component({
  components: {
    Button,
  },
})
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
  background-color: rgba(10, 20, 20, 0.90);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  height: 6vh;
  width: 100vw;
}

.logo {
  a {
    text-decoration: none;
  }
  h2 {
    color: #eef;
    font-size: 4vh;
    padding: 0;
    margin: 0 1vh;
  }
}


.links {
  a {
    color: rgb(255, 255, 255);
    font-size: 3vh;
    text-decoration: none;
    border-bottom: solid thin #fff;
    margin: 0 8px;
    padding: 0 4px;

    transition: all 0.5s ease;
  }
  a:hover {
    color: #e77;
    border-bottom: solid medium #e77;
    border-radius: 24px;
  }
}

main {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #fff;
    font-size: 84px;
    padding: 0;
    margin: 0;
    padding: 0;
    margin-top: 10%;
  }
  p {
    color: #eee;
    font-size: 24px;
  }
}
</style>
