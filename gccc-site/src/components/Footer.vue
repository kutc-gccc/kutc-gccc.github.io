<template>
  <footer>
    <main>
      <p>Footer will place here</p>
    </main>
    <section id="bottom-nav">
    </section>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>


<style scope>
#bottom-nav {
  height: 5vh;
  width: 100%;
  background-color:royalblue;
}
</style>