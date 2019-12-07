import {
  network
} from "../../utils/network.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: null,
    tv: null,
    tvshow: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    // 电影
    network.getMovieList({
      success: (movies) => {
        this.setData({
          movies
        })
      }
    })

    // 电视剧
    network.getTvList({
      success: (tv) => {
        this.setData({
          tv
        })
      }
    })

    // 综艺
    network.getTvShow({
      success: (tvshow) => {
        this.setData({
          tvshow
        })
      }
    })
  },

})