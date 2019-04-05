<template>
  <section id="about">
    <h2>About</h2>
    <p>
      関西大学総合情報学部のゲーム制作サークル「GameCreationCircle"C"」(GCCC)の公式サイトへようこそ！
      当サイトでは、サークルの概要や制作物、活動予定などを発信しています！
    </p>
    <h3>活動紹介</h3>
    <h4>講習</h4>
    <p>
      GCCCでは、ゲームを構成する「プログラム」「グラフィック」「音楽」のこれら三要素の基礎を覚えるための講習を行っています。
      サークルに所属している人であれば自由に参加することができます。
    </p>
    <p>
      他にも今年度は「シナリオ」に関しても講習を行う予定です！ゲームのシナリオに興味ある方、とりあえず話を聞いてみたいといった方までぜひお越しください！
    </p>
    <p>
      また各講習は大学の講義内容とも関連しているため、講義の予習や復習にも役立ちます。
      一度顔を出してみてください！
    </p>
    <h4>イベント</h4>
    <h5>夏コミ</h5>
      <p>夏コミの参加申請を行いました。夏コミに向けて様々なゲームを開発しています。
    <h5>情祭</h5>
      <p>総合情報学部で開催される学祭にゲームを展示します。</p>
    <h4>その他</h4>
    <h5>スマブラ</h5>
    <p>腕に自身がある方も！初心者でも！履修相談しながら楽しくスマブラ！</p>
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
}
</style>