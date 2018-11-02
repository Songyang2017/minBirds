// pages/pickMessage/pickMessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  formSubmit: function(e) {
    let nam = e.detail.value.name
    let tel = e.detail.value.tel
    if (!nam || !tel) {
      wx.showToast({
        title: '请填写完整！',
          icon: 'none'
      })
      return
    }
    const db = wx.cloud.database()

    db.collection('pickedMessage').add({
      data: e.detail.value,
      success: res => {
        wx.showToast({
          title: '提交成功！',
          success: function(res) {
            setTimeout(()=>{
              wx.navigateTo({
                url: '../notice/notice'
              })
            }, 200)
          },
        })
      }
    })
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