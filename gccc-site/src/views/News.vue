<template>
  <div class="News">
    <NewsContent/>
  </div>
</template>

<script>
// @ is an alias to /src
import NewsContent from "@/components/contents/NewsContent.vue";

export default {
  name: "news",
  components: {
    NewsContent,
  },
};
</script>
