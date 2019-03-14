<template>
  <section id="twitter-bar">
    <Timeline
      :id="id"
      :sourceType="sourceType"
      :options="{ tweetLimit }"/>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Tweet, Moment, Timeline } from "vue-tweet-embed";



@Component({
  components: {
    Timeline,
  },
})
export default class TwitterBar extends Vue {
  @Prop() private twitterId!: string;
  @Prop() private profile!: string;
  @Prop() private tweetLimit!: number;
  private id: string = this.twitterId;
  private sourceType: string = this.profile;
  private limit: number = this.tweetLimit;
}
</script>

<style scope>
</style>