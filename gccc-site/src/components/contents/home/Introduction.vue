<template>
  <section class="bg">
    <section id="introduction">
      <h1>Make a Game
      <br>Make Yourself.
      </h1>
      <p>Game Creation Circle "C"</p>
      <p>Unity / UnrealEngine / Siv3D / DxLib / Tyrano Builder</p>
      <Button linkHref="https://twitter.com/gcccinfo" snsType="Twitter"/>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "@/components/parts/Button.vue";

@Component({
  components: {
    Button,
  },
})
export default class Introduction extends Vue {}

</script>

<style lang="scss" scoped>
.bg {
  background-image: url("../../../assets/header-logo.png");
  background-size: cover;
}

#introduction {
  background-color: rgba(0,0,0,0.45);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  transition: all 0.5s ease;
  h1 {
    color: #eef;
    font-size: 84px;
    padding: 0;
    margin: 0;
    margin-top: 20px;
    transition: all 0.5 ease;
  }
  p {
    color: #eee;
    font-size: 24px;
  }
}

</style>