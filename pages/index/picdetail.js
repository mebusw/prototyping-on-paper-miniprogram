// pages/index/picdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    y: 0,
    projects: [],
    picPath: '',
    picNum: 0
  },

  tap(e) {
    this.setData({
      x: 30,
      y: 30
    })
  },

  onChange(e) {
    console.log(e.detail)
  },

  onScale(e) {
    console.log(e.detail)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.getStorage({
      key: 'projects',
      success(res) {
        console.log(res.data)
        var projects = res.data
        that.setData({ 'projects': projects})
        that.setData({'picPath': projects[0].pics[0].path})
      }
    })
  },

  addLink() {
    var that = this
    var links = that.data.projects[0].links
    console.info(links)

    wx.setStorage({
      key: 'projects',
      data: that.data.projects
    })
  },

  done() {
    wx.navigateBack({})
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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