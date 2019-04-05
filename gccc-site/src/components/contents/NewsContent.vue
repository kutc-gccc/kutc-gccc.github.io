<template>
	<section id="news-content">
    <Article :articleHtml="newsData" :articleTitle="newsTitle"></Article>
	</section>
</template>

<script lang="ts">
// import decorator below
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import Article from "./news/Article.vue";
import axios from "axios";
const API_ENDPOINT: string = "https://gccc-site-api.herokuapp.com";

interface NewsData {
  id: number;
  title: string;
  html: string;
}

@Component({
  components: {
    Article,
  },
})
export default class NewsContent extends Vue {
  private newsData: NewsData | null = null;
  private newsTitle: string | null = null;

  public async created() {
    const res = await axios({
      method: "GET",
      url: API_ENDPOINT + "/api/" + this.$route.params.id,
      headers: {"Access-Conrol-Allow-Origin": "true"},
      responseType: "json",
    });
    console.log(res);
    this.newsData = res.data.html;
    this.newsTitle = res.data.title;
  }

  @Watch("$route")
  public async fetchNewsData() {
    const res = await axios({
      method: "GET",
      url: API_ENDPOINT + "/api/" + this.$route.params.id,
      headers: {"Access-Conrol-Allow-Origin": "true"},
      responseType: "json",
    });
    this.newsData = res.data.html;
  }
}
</script>


<style lang="scss" scoped>
// scoped is affect only this components
</style>
