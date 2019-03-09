<template>
  <section id="home-content">
    <section class="top-content">
      <Introduction/>
    </section>
    <section class="bottom-content">
      <section class="left-container">
        <About/>
        <News/>
      </section>
      <section class="right-container">
        <TwitterBar/>
      </section>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Introduction from "./home/Introduction.vue";
import About from "./home/About.vue";
import News from "./home/News.vue";
import TwitterBar from "./home/TwitterBar.vue";

@Component({
  components: {
    Introduction,
    About,
    News,
    TwitterBar,
  },
})
export default class HomeContent extends Vue {}
</script>

<style scoped lang="scss">
#home-content {
  display: flex;
  flex-direction: column;
  .top-content {
    height: 100%;
  }

  .bottom-content {
    margin: 1em 1em;
    display: flex;
    flex-direction: row;
    .left-container {
      width: 75%;
      border-right: solid thin #ddd;
      padding: 1em;
    }
    .right-container {
      width: 25%;
      padding: 0 8px;
    }
  }
}
</style>


