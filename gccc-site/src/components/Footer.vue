<template>
  <footer>
    <main>
      <p>Footer will place here</p>
    </main>
    <section id="bottom-nav">
      <small>&copy; GCCC all rights reserved.</small>
    </section>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>


<style lang="scss" scope>
main {
  height: 15vh;
  background-color: #ffe;
}
#bottom-nav {
  height: 5vh;
  width: 100%;
  background-color:royalblue;
  small {
    color: white;
    margin-top: 1em;
  }
}
</style>