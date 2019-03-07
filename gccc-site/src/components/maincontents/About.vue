<template>
  <section id="about">
    <h2>About</h2>
    <p>関西大学総合情報学部のゲーム制作サークル[GCCC]のHPへようこそ!
      <br>このページではGCCCの活動や、制作物の公開などを行っております。
    </p>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {}
</script>

<style scope>
#about {
  height: 25vh;
}
</style>