// pages/search/search.js
import {
  network
} from "../../utils/network.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    histories: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.getStorage({
      key: 'searched',
      success: (res) => {

        let data = res.data
        // console.log(data)
        this.setData({
          histories: data
        })
      },
    })
  },

  onSearchInputEvent(event) {
    // console.log(event)
    let value = event.detail.value
    
    network.getSearch({
      q: value,
      success: (subjects) => {
        this.setData({
          subjects
        })
      }
    })
  },


  onItemTapEvent(event) {
    // console.log(event)
    var id = event.currentTarget.dataset.id
    var title = event.currentTarget.dataset.title
    var histories = this.data.histories
    var isExisted = false

    if (histories) {
      for (let i = 0; i < histories.length; i++) {
        let movie = histories[i]
        if (movie.id === id) {
          var isExisted = true
          break
        }
      }
    }

    if (!isExisted) {
      histories.push({
        title,
        id
      })
      wx.setStorage({
        key: 'searched',
        data: histories,
        success: () => {
          // console.log("chengg")
        }
      })
    }

    wx.navigateTo({
      url: '/pages/detail/detail?type=movie&id=' + id,
    })
  },

  onClearEvent(event) {
    wx.removeStorage({
      key: 'searched',
      success: function(res) {
        console.log("sccc")
      },
    })
    this.setData({
      histories: null
    })
  }
})