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
  public id: string = this.twitterId;
  public sourceType: string = this.profile;
  public limit: number = this.tweetLimit;
  @Prop() private twitterId!: string;
  @Prop() private profile!: string;
  @Prop() private tweetLimit: number;
}
</script>

<style scope>
</style>