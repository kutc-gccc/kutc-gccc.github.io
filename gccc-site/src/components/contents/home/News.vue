<template>
  <section id="news">
    <h2>News</h2>
    <p>Comming soon...</p>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class News extends Vue {}
</script>

<style scope>
#news {
  border-bottom: solid thin gray;
  padding-left: 32px;
}
</style>