<template>
  <section id="news">
    <h2>News</h2>
    <ul id="newslist">
      <li v-for="column in newsColumns" :key="column.id">
        <router-link :to="'news/' + column.id">{{ column.title }}</router-link>
        <small>{{ column.created_at }}</small>
      </li>
    </ul>

  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";
const API_ENDPOINT: string = "https://gccc-site-api.herokuapp.com";

interface NewsColumn {
  title: string;
  id: number;
  created_at: string;
}

@Component
export default class News extends Vue {
  private newsColumns: NewsColumn[] = [];

  public async created() {
    const res = await axios({
      method: "GET",
      url: API_ENDPOINT + "/api",
      headers: {"Access-Conrol-Allow-Origin": "true"},
      responseType: "json",
    });
    this.newsColumns = res.data;
  }
}
</script>

<style scope lang="scss">
#news {
  border-bottom: solid thin gray;
}

#newslist {
  list-style: none;
  padding-left: 1vw;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2vh 0;
    a {
      color: black;
      font-size: 1.2em;
      text-decoration: none;
    }
    small {
      color: #888;
    }
  }
}
</style>