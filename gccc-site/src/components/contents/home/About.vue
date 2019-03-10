<template>
  <section id="about">
    <h2>About</h2>
    <p>Write About us here.</p>
    <h3>活動紹介</h3>
    <h4>講習</h4>
    <p>Lecture here</p>
    <h4>イベント</h4>
    <p>Event here</p>
    <h4>その他</h4>
    <p>SSBU here</p>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {}
</script>

<style lang="scss" scope>
#about {
  border-bottom: solid thin gray;
  padding-left: 32px;
}
</style>