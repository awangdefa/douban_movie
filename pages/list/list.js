// pages/list/list.js

import {
  network
} from "../../utils/network.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let type = options.type
    let title = ""
    this.setData({
      type
    })
    wx.showLoading({
      title: '正在加载中...',
    })

    if (type === "movie") {
      // 请求电影
      network.getMovieList({
        success: (items) => {
          this.setData({
            items
          })
          wx.hideLoading()
        },
        count: 1000
      })
      title = "电影"
    } else if (type === "tv") {
      // 请求电视剧
      network.getTvList({
        success: (items) => {
          this.setData({
            items
          })
          wx.hideLoading()
        },
        count: 1000
      })
      title = "电视剧"
    } else {
      // 请求综艺
      network.getTvShow({
        success: (items) => {
          this.setData({
            items
          })
          wx.hideLoading()
        },
        count: 1000
      })
      title = "综艺"
    }
    wx.setNavigationBarTitle({
      title
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})