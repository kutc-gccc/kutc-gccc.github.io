<template>
  <section id="article">
    <p class="title">{{ articleTitle }}</p>
    <section id="content" v-html="articleHtml"></section>
  </section>
</template>


<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component
export default class Article extends Vue {
  @Prop()
  private articleHtml!: string;
  @Prop()
  private articleTitle!: string;
}
</script>

<style lang="scss" scoped>
#article {
  display: block;
  text-align: left;
  p {
    font-size: 3em;
    margin: 1vh 0;
  }
  section {
    padding: 4vh;
  }
}
</style>


