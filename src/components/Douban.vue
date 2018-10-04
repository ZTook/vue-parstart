<template>
  <div id="douban">
    <h1>I am another page</h1>
    <md-card>
      <md-card-header>
        <div class="md-title">豆瓣电影排行榜</div>
        <div class="md-subhead">2018</div>
      </md-card-header>

      <md-card-media>
        <a>{{article.title}}</a>
      </md-card-media>

      <md-card-content>
        Here the good is.
      </md-card-content>
    </md-card>

    <div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
            <md-button @click="showFilm()" class="btn btn-default">提交</md-button>
        </div>
    </div>

    <a> written by {{ author }} </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "ZTook",
      articles: [],
    }
  },
  methods: {
    showFilm () {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
          headers: {
          },
          emulateJSON: true
      }).then(function(response) {
        // 这里是处理正确的回调
          this.articles = response.data.subjects
          // this.articles = response.data["subjects"] 也可以
          alert(this.articles[0].title)
      }, function(response) {
          // 这里是处理错误的回调
          console.log(response)
      });
    }
  },
  mounted: function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {
        },
        emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调
        this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以
    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  }
}
</script>
