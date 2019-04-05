<template>
  <section id="about">
    <h2>About</h2>
    <h3>Summary</h3>
    <p>関西大学総合情報学部のゲーム制作サークル[GCCC]のHPへようこそ!
      <br>このページではGCCCの活動や、制作物の公開などを行っております。
    </p>
    <h3>活動紹介</h3>
    <p>Comming soon...</p>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {}
</script>

<style scope>
#about {
  padding-top: 5vh;
  border-bottom: solid thin gray;
}
</style>