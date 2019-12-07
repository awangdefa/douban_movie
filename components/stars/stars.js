// components/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rate: {
      type: Number,
      value: 0,
      observer(newvalue,oldvalue ,changedpath){
        this.updatarate()
      }
    },
    starsize: {
      type: Number,
      value: 20 //rpx
    },
    fontsize: {
      type: Number,
      value: 20 //rpx
    },
    fontcolor: {
      type:String,
      value: "#ccc"
    },
    istext:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    updatarate(){
      const rate = this.properties.rate
      const intRate = parseInt(rate)
      const light = parseInt(intRate / 2)
      const half = intRate % 2
      const gray = 5 - light - half

      const lights = []
      const halfs = []
      const grays = []
      for (let i = 1; i <= light; i++) {
        lights.push(i)
      }
      for (let i = 1; i <= half; i++) {
        halfs.push(i)
      }
      for (let i = 1; i <= gray; i++) {
        grays.push(i)
      }
      const textrate = rate && rate > 0 ? rate.toFixed(1) : "未评分"
      this.setData({
        lights,
        halfs,
        grays,
        textrate
      })
    }
  },

  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.updatarate()
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})