// pages/index/main.js
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    prjName: 'U Perform',
    projects: [{'pics':[], 'links':[]}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.getStorage({
      key: 'projects',
      success(res) {
        console.log(res.data)
        that.setData({ 'projects': res.data })
      },
      fail(res){
        wx.setStorage({
          key: 'projects',
          data: [{ 'pics': [], 'links': [] }]
        })
      }
    })

  },

  bindLoadPic: function () {
    var that =this
    wx.chooseImage({
      count: 9, // max, default is 9
      sizeType: ['compressed'], //['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.info(res.tempFiles)

        var p = that.data.projects
        p[0].pics = res.tempFiles
        that.setData({ 'projects': p})
        wx.setStorage({
          key: 'projects',
          data: that.data.projects
        })
      }
    })
  },

  tapToPicDetail() {
    wx.navigateTo({
      url: './picdetail?picnum=1',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.info('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})