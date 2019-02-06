// pages/index/main.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    prjName: 'U Perform',
    pics: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
        that.setData({ 'pics': res.tempFiles})
        wx.setStorage({
          key: 'pics',
          data: res.tempFiles
        })
      }
    })
  },

  tapToPicDetail() {
    wx.navigateTo({
      url: './picdetail',
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