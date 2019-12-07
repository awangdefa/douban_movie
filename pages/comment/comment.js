// pages/comment/comment.js

import {
  network
} from "../../utils/network.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    total: 0,
    start: 1,
    count: 20,
    nextloading: false,
    preloading: false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    console.log(options)
    this.setData(options)
    this.getComments(1)

  },

  getComments(start) {
    if (start > this.data.start) {
      this.setData({
        nextloading: true
      })
    } else {
      this.setData({
        preloading: true
      })
    }
    network.getItemComments({
      type: this.data.type,
      id: this.data.id,
      start,
      count: 20,
      success: (data) => {
        console.log(data)
        let total = data.total
        let comments = data.interests
        this.setData({
          total,
          comments,
          start,
          preloading: false,
          nextloading: false
        }),
        wx.pageScrollTo({
          scrollTop: 0,
        })
      }
    })
  },

  onItemTapEvent(e) {
    wx.navigateBack({})
  },

  onPrePageTap(e) {
    let oldstart = this.data.start
    let start = oldstart - this.data.count
    if (oldstart - this.data.count > 0) {
      this.getComments(start)
    }
  },

  onNextPageTap(e) {
    let oldstart = this.data.start
    let start = oldstart + this.data.count
    this.getComments(start)
  }
})