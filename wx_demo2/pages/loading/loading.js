// pages/loading/loading.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingHidden:true
  },
  showToast () {
    wx.showToast({
      title: 'loading...',
      icon:'loading',
      duration:5000,
      mask:true,
      success (res) {},
      fail () {},
      complete () {}
    });
    setTimeout (this.closeToastLoading,2000);//主动关闭loading
  },
  //关闭loading显示
  closeToastLoading () {
    wx.hideToast();
  },
  showLoading () {
    wx.showLoading({
      title: 'loading...'

    });
    setTimeout(this.closeShowLoading,2000)
  },
  closeShowLoading () {
    wx.hideLoading();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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