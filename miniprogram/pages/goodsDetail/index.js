// pages/goodsDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sizeIdx:"",//当前选中码数
    colorIdx: "",//当前选中颜色
    collage:false,//是否可以拼团
    carNum:34,//购物车数量
    shopType:'',
    swiperData: {
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      circular: true,
      interval: 2000,  
      duration: 300,
      activeColor: '#fff'
    },
    goods:{
      name:"马甲",
      price:"24",
      awards:"5",
      numbers:"1",
      praise:"9",
      photo:[
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      img:"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
      describe:"非常好看的马甲，款式多多多",
      size:[130,120,110,90.70],
      color: ["红色", "蓝色", "白色", "黑色", "红色", "蓝色", "白色", "黑色", "红色"]
    },
    evaluate: [
      {
        eval_avatar: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        eval_text: "",
        eval_time: "2017-10-4 20:00",
        eval_size: "102",
        eval_color: "红色",
        eval_type: ""
      },
      {
        eval_avatar: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
        eval_text: "绝对好绝对好绝对好绝对好绝对好绝对好绝对好绝对好绝对好绝对好绝对好绝对好绝对好评",
        eval_time: "2017-10-10 20:00",
        eval_size: "139",
        eval_color: "灰色",
        eval_type: "好评"
      },
      {
        eval_avatar: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        eval_text: "垃圾，什么垃圾",
        eval_time: "2017-10-5 20:50",
        eval_size: "110",
        eval_color: "黑色",
        eval_type: "差评"
      }
    ]
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
  //选择尺码
  chooseBtn:function(){
    this.setData({
      shopType: "addShopCar"
    })
  },
  //选中颜色
  selectColor:function(e){
    var index = e.currentTarget.dataset.index;
    this.setData({
      colorIdx: index,
    })
  },
  //选中码数
  selectSize: function (e) {
    var index = e.currentTarget.dataset.index;
    // console.log(index);
    this.setData({
      sizeIdx: index,
    })
  },
  //加入购物车
  addCar:function(){
    this.setData({
      shopType:"addShopCar"
    })
  },
  //立即购买
  goBuy: function () {
    this.setData({
      shopType: "tobuy"
    })
  },
  //关闭按钮
  closePopupTap:function(){
   
    this.setData({
      shopType: ""
    })
  },
  //加减按钮
  jiaBtnTap:function(){
    var nowgoods = this.data.goods;
    var nowNum = this.data.goods.numbers;
    if (nowNum <10) {
      nowNum++;
    }
    nowgoods.numbers = nowNum;
    this.setData({
      goods: nowgoods
    })
  },
  jianBtnTap: function () {
    var nowgoods = this.data.goods;
    var nowNum = this.data.goods.numbers;
    if (nowNum>1){
      nowNum--;
    }
    nowgoods.numbers = nowNum;
    this.setData({
      goods: nowgoods
    })
  },
  goShopCar:function(){
    console.log("11");
    wx.switchTab({
      url: '../shop-cart/index',
    })
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