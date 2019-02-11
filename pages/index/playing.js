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
    animationDataA: {},
    animationDataB: {}
  },
  isAoverB: true,
  isAnimating: false, // disable tapping when animating

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.getStorage({
      key: 'projects',
      success(res) {
        console.log(res.data)
        that.setData({
          'projects': res.data
        })
      }
    })

    wx.getSystemInfo({
      success(res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth) //可使用窗口宽度，单位px
        that.windowWidth = res.windowWidth
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
  onReady: function() {
    var that = this
    that.setData({
      'picPathA': this.data.projects[0].pics[this.data.currPicIdx].path,
      'picPathB': this.data.projects[0].pics[this.data.currPicIdx + 1].path
    })

    this.animation = wx.createAnimation({
      duration: 800,
      transformOrigin: "50% 50%",
      timingFunction: "ease", //timingFunction: 'cubic-bezier(.8,.2,.1,0.8)',
      delay: 0
    })
    this.animationRecover = wx.createAnimation({
      duration: 10,
      transformOrigin: "50% 50%",
      timingFunction: "step-start", //timingFunction: 'cubic-bezier(.8,.2,.1,0.8)',
      delay: 10
    })
  },

  tap: function(e) {
    var that = this
    // if(isAnimating){}
    console.log(e)
    console.log('tap, isAoverB= ' + this.isAoverB)

    this.animation.translateX(-1 * this.windowWidth).step()
    if (this.isAoverB) {
      this.setData({
        animationDataA: this.animation.export()
      })
    } else {
      this.setData({
        animationDataB: this.animation.export()
      })
    }

    //after animation, swap the z-index of buffers
    setTimeout(function() {
      this.animationRecover.translateX(0).step()
      if (this.isAoverB) {
        that.setData({
          'zBufferA': 1000,
          'zBufferB': 2000,
          animationDataA: this.animationRecover.export()
        })
      } else {
        that.setData({
          'zBufferA': 2000,
          'zBufferB': 1000,
          animationDataB: this.animationRecover.export()
        })
      }
      this.isAoverB = !(this.isAoverB)
      console.log('timeout, isAoverB= ' + this.isAoverB)

    }.bind(this), 1000)
  },

  longtap: function(e) {
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