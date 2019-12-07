// pages/detail/detail.js
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
    let id = options.id
    this.setData({
      type,
      id
    })

    network.getItemDetail({
      type,
      id,
      success: (item) => {
        // console.log(item)

        let genres = item.genres
        genres = genres.join("/")
        item.genres = genres

        let actors = item.actors
        let actorNames = []
        if (actors.length > 3) {
          actors = actors.slice(0, 5)
        }
        for (let i = 0; i < actors.length; i++) {
          actorNames.push(actors[i].name)
        }
        actorNames = actorNames.join("/")

        if (item.directors.length>0) {
          var director = item.directors[0].name
        } else {
          var director = "暂无"
        }

        // let director = item.directors[0].name

        let authors = director + "(导演)/" + actorNames
        item.authors = authors
 
        this.setData({
          item,

        })

      }
    })

    network.getItemTags({
      type,
      id,
      success: (tags) => {
        // console.log(tags)
        this.setData({
          tags
        })
      }

    })

    network.getItemComments({
      type,
      id,
      start: 0,
      count: 3,
      success: (commentsData) => {
        // console.log(comments)
        let totalComment = commentsData.total
        let comments = commentsData.interests
        // console.log(comments)
        this.setData({
          totalComment,
          comments
        })
      }
    })

    // console.log(JSON.stringify(this.data))
    // let a = this.data
    // console.log(a.tags)
  //   this.setData({
  //     a
  //   })
  // },
  },


  onReady: function() {
    // console.log(JSON.stringify(this.data))
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    wx.pageScrollTo({
      scrollTop: 0,
    })
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