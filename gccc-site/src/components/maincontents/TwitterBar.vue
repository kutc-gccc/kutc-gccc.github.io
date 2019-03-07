<template>
  <section id="twitter-bar">
    <a
      class="twitter-timeline"
      data-width="320"
      data-height="960"
      data-theme="light"
      data-link-color="#9266CC"
      href="https://twitter.com/GCCCinfo?ref_src=twsrc%5Etfw"
    >Tweets by GCCCinfo</a>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TwitterBar extends Vue {}
</script>

<style scope>
</style>