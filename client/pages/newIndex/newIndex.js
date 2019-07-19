// pages/newIndex/newIndex.js
Page({
  goNewTab2() {
    wx: wx.navigateTo({
      url: '../newIndex2/newIndex2',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) {
        console.log("跳转成功2")
      },
    })
  }

})