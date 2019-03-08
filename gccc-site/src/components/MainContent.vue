<template>
  <section id="main-content">
    <section class="left-container">
      <About/>
      <News/>
    </section>
    <section class="right-container">
      <TwitterBar/>
    </section>
  </section>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import About from "./maincontents/About.vue";
import News from "./maincontents/News.vue";
import TwitterBar from "./maincontents/TwitterBar.vue";

@Component({
  components: {
    About,
    News,
    TwitterBar,
  },
})
export default class MainContent extends Vue {}
</script>

<style scoped>
#main-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1em 1em;
}

#main-content .left-container {
  width: 75%;
  border-right: solid thin #ddd;
  padding: 1em;
  
}

#main-content .right-container {
  width: 25%;
  padding: 0 8px;
}

</style>


