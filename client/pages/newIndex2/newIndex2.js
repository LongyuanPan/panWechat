var app=getApp();
Page({
  data: {
      list:"",
  },
  onLoad:function(options){
    this.http("/novelApi",this.callback)
    // this.http("/femaleNameApi?page=1",this.callback)
  },
  http:function(category,callback){
    wx.request({
      url: app.globalUrl.openUrl + category,
      data: {
        // city: '厦门'
      },
      header: {
        'content-type': 'application/xml' // 默认值
      },
      success(res) {
        callback(res.data)
      }
    })
  },
  callback:function(res){
    console.log(res.data)
    let self=this;
    //数据处理
    this.setData({
      list: res.data
    })
  }
})