// components/searchbar/searchbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isnavigator: {
      type: Boolean,
      value: false
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
    onInputEvent(event) {
      let value = event.detail.value
      let detail = {value}
      let options={}
      this.triggerEvent("searchinput", detail, options)
    }
  }
})