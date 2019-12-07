import {
  globalUrls
} from "/urls.js"

const network = {

  getMovieList(params) {
    params.type = "movie"
    this.getItemList(params)
  },

  getTvList(params) {
    params.type = "tv"
    this.getItemList(params)
  },

  getTvShow(params) {
    params.type = "tvshow"
    this.getItemList(params)
  },

  getItemList(params) {
    let url = ""
    if (params.type === "movie") {
      url = globalUrls.movelist
    } else if (params.type === "tv") {
      url = globalUrls.tvList
    } else {
      url = globalUrls.tvShowList
    }
    let count = params.count ? params.count : 7
    wx.request({
      url,
      data: {
        count
      },
      success: (res) => {
        const items = res.data.subject_collection_items
        // console.log(items)
        let itemsCount = items.length
        let left = itemsCount % 3
        if (left === 2) {
          items.push(null)
        }
        if (params && params.success) {
          params.success(items)
        }
      }
    })
  },

  getItemDetail(params) {
    let type = params.type
    let id = params.id
    let url = ""

    if (type === "movie") {
      url = globalUrls.movieDetail + id
    } else if (type === "tv") {
      url = globalUrls.tvDetail + id
    } else {
      url = globalUrls.showDetail + id
    }

    wx.request({
      url,
      success(res) {
        // console.log(res)
        let item = res.data
        if (params.success) {
          params.success(item)
        }
      }
    })
  },

  getItemTags(params) {
    let type = params.type
    let id = params.id
    let url = ""

    if (type === "movie") {
      url = globalUrls.movieTags(id)
    } else if (type === "tv") {
      url = globalUrls.tvTags(id)
    } else {
      url = globalUrls.showTags(id)
    }

    wx.request({
      url,
      success(res) {
        let tags = res.data.tags
        if (params.success) {
          params.success(tags)
        }
      }
    })
  },

  getItemComments(params) {
    let type = params.type
    let id = params.id
    let start = params.start ? params.start : 0
    let count = params.count ? params.count : 0
    let url = ""

    if (type === "movie") {
      url = globalUrls.movieComments(id, start, count)
    } else if (type === "tv") {
      url = globalUrls.tvComments(id, start, count)
    } else {
      url = globalUrls.showComments(id, start, count)
    }

    wx.request({
      url,
      success(res) {
        let item = res.data
        if (params.success) {
          params.success(item)
        }
      }
    })
  },

  // 获取搜索item
  getSearch(params){
    let q = params.q
    // 得到完整URL
    let url = globalUrls.searchUrl(q)
    wx.request({
      url,
      data:{},
      method:"GET",
      header: {
        'content-type': 'application/xml'
      },
      success(res){
        console.log(res)
        let subjects = res.data.subjects
        if (params.success){
          params.success(subjects)
        }
      }
    })
  }
}

export {
  network
}