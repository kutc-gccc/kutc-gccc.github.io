<template>
  <header>
    <section id="top-nav">
      <section class="logo">
        <h2>GCCC</h2>
      </section>
      <section class="links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">News</a>
      </section>
    </section>
    <main>
      <h1>Make a Game
        <br>Make Yourself.
      </h1>
      <p>Game Creation Circle C</p>
      <p>Unity / UnrealEngine / Siv3D / DxLib / Tyrano Builder</p>
      <Button linkHref="https://twitter.com/gcccinfo" snsType="Twitter"/>
    </main>
  </header>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "./button/Button.vue";

@Component({
  components: {
    Button
  }
})
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-image: url("../assets/header-logo.png");
  background-size: cover;

  display: flex;
  flex-direction: column;
  height: 80vh;
}

#top-nav {
  background-color: rgba(10, 20, 20, 0.8);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
}

h2 {
  color: #eef;
  font-size: 48px;
  padding: 0;
  margin: 0 24px;
}

.links a {
  color: rgb(255, 255, 255);
  font-size: 20px;
  text-decoration: none;
  border-bottom: solid thin #fff;
  margin: 0 8px;
  padding: 0 2px;
}

main {
  height: 100%;
  background-color: rgba(10, 20, 20, 0.45);
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
