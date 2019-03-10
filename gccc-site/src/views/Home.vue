<template>
  <div class="home">
    <HomeContent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from "@/components/contents/HomeContent.vue";

export default {
  name: "home",
  components: {
    HomeContent,
  },
};
</script>
