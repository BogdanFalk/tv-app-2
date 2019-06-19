<template>
  <v-carousel-item class="v-carousel-news">
  
      <v-layout align-space-around justify-space-between column fill-height>
        <v-card v-for="news in newsData" v-bind:key="news.title">
          <v-img :src="news.urlToImage" aspect-ratio="6.5"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{news.title}}</h3>
              <div>{{ news.description }}</div>
            </div>
          </v-card-title>
        </v-card>
      </v-layout>
 
  </v-carousel-item>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      newsUrl:
        "https://newsapi.org/v2/top-headlines?country=ro&category=technology&apiKey=68648c3acc2f4cb3ae7dda55845435dc",
      newsData: []
    };
  },
  methods: {
    getNews: function() {
      axios
        .get(this.newsUrl)
        .then(response => {
          this.newsData = [];
          console.log(response.data);
          var newsIndex = 0;
          for (let index = 0; index < 3; index++) {
            this.newsData.push(response.data.articles[index]);
          }
          console.log(this.newsData);
        })
        .catch(e => {
          console.log(e.message);
        });
    }
  },
  mounted() {
    this.getNews();
    setInterval(() => {
      this.getNews();
    }, 900000);
  }
};
</script>

<style>
.news-bk {
  position: absolute;

  width: 100%;
  height: 100%;
}

.v-window__container {
  height: 100%;
}
.v-carousel-news {
  height: 100%;
  background-color: aquamarine;
}
.v-carousel__item {
  height: 100% !important;
  width: 72% !important;
  margin: auto !important;
}
</style>


