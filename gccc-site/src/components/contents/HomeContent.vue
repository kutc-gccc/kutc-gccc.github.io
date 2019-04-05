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
        <TwitterBar twitterId="GCCCinfo" profile="profile" tweetLimit=5></TwitterBar>
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
    margin: 0;
    width: 100vw;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
    .left-container {
      width: 100%;
      @media screen and (max-width: 600px) {
        width: 100%;
        padding: 0;
      }
      border-right: solid thin #ddd;
      display: flex;
      flex-direction: column;
      padding: 1em;
    }
    .right-container {
      width: 30%;
      padding: 0 8px;
    }
  }
}
</style>

<style lang="scss">
.bottom-content {
  h2 {
    font-size: 2.4em;
    color: #77e;
    border-bottom: 1px solid #696;
    border-left: 8px solid #999;
    border-radius: 8px;
    padding-left: 16px;
  }
  h3 {
    font-size: 1.9em;
    border-bottom: 1px dashed #242;
    padding-left: 4px;
  }
  h4 {
    font-size: 1.5em;
    padding-left: 8px;
  }
  h5 {
    font-size: 1.2em;
    padding-left: 12px;
  }
  p {
    padding-left: 1em;
  }
  .left-container {
    text-align: start;
  }
}
</style>


