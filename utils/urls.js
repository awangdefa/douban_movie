const globalUrls = {
  movelist: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',
  tvList: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items',
  tvShowList: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items',

  movieDetail: 'https://m.douban.com/rexxar/api/v2/movie/',
  tvDetail: 'https://m.douban.com/rexxar/api/v2/tv/',
  showDetail: 'https://m.douban.com/rexxar/api/v2/tv/',

  movieTags(id) {
    return "https://m.douban.com/rexxar/api/v2/movie/" + id + "/tags?count=8"
  },
  tvTags(id) {
    return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/tags?count=8"
  },
  showTags(id) {
    return this.tvTags(id)
  },

  movieComments(id, start = 0, count = 0) {
    return "https://m.douban.com/rexxar/api/v2/movie/" + id + "/interests?count=" + count + "&start=" + start
  },
  tvComments(id, start = 0, count = 0) {
    return "https://m.douban.com/rexxar/api/v2/tv/" + id + "/interests?count=" + count + "&start=" + start
  },
  showComments(id, start = 0, count = 0) {
    return this.tvComments(id, start, count)
  },

  searchUrl(q){
    return "https://m.douban.com/rexxar/api/v2/search?type=movie&q=" + q
  }
}
export {
  globalUrls
}