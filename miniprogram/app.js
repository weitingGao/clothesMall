//app.js
//环境名称：clothes-mall 环境ID：clothes-mall-16cc3b

App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    this.globalData = {
      openid:""
    }
  }
})
