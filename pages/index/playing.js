// pages/index/playing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    projects: [],
    currPicIdx: 0,
    zBufferA: 2000,
    zBufferB: 1000,
    isAoverB: true

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'projects',
      success(res) {
        console.log(res.data)
        that.setData({ 'projects': res.data })
      }
    })
  
      wx.getSystemInfo({
      success(res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth) //可使用窗口宽度，单位px
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    that.setData({ 'picPathA': this.data.projects[0].pics[this.data.currPicIdx].path, 'picPathB': this.data.projects[0].pics[this.data.currPicIdx + 1].path })
  },

  tap: function(e) {
    console.log(e)
    var tmp = this.data.zBufferA
    this.setData({ 'zBufferA': this.data.zBufferB, 'zBufferB': tmp})

  },

  longtap: function (e) {
    console.log(e)
    wx.showModal({
      title: '提示',
      content: '退出播放？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateBack({})
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
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