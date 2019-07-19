Page({
  goNewTab(){
    wx:wx.navigateTo({
      url: '../newIndex/newIndex',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {
        console.log("跳转成功")
      },
    })
  },
  checkAir() {
    wx: wx.navigateTo({
      url: '../newIndex2/newIndex2',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) {
        console.log("跳转成功")
      },
    })
  },
  checkMovie() {
    wx: wx.navigateTo({
      url: '../movie/movie',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) {
        console.log("跳转成功")
      },
    })
  },
})
