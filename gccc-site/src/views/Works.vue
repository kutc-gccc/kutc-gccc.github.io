<template>
  <div class="works">
    <WorksContent/>
  </div>
</template>

<script>
// @ is an alias to /src
import WorksContent from "@/components/contents/WorksContent.vue";

export default {
  name: "works",
  components: {
    WorksContent,
  },
};
</script>
