//index.js
Page({
  data: {
    swiperData:{
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
      activeColor:'#fff'
    },
    navData: ["全部", "上装", "外套", "裤子", "秋裤", "内衣", "袜子", "鞋包", "特价"],
    navWidth:"auto",//导航栏宽度
    navIdx:"0",//当前选中栏目
    notice:"老板携带小姨子跑路啦，统统大减价！",
    discount:[
      {
        price:"45",
        dounType:"新店优惠",
        condition:"满100减40",
        end:"领取15天内有效"
      },
      {
        price: "45",
        dounType: "新店优惠",
        condition: "满100减40",
        end: "领取15天内有效"
      },
      {
        price: "45",
        dounType: "新店优惠",
        condition: "满100减40",
        end: "领取15天内有效"
      }
    ],
    navWidth2:"auto",
    proData:[
      {
        photo: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name:"袜子",
        price:"15"
      },
      {
        photo: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        name: "帽子",
        price: "25"
      },
      {
        photo: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        name: "衬衣",
        price: "45"
      },
      {
        photo: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: "裤子",
        price: "45"
      },
      {
        photo: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        name: "袜子",
        price: "245"
      },
      {
        photo: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: "毛衣",
        price: "45"
      },
      {
        photo: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: "外套",
        price: "145"
      },
      {
        photo: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        name: "袜子",
        price: "45"
      },
    ]
  },
  onLoad: function (options) {
    //设置导航栏宽度
    this.setData({
      navWidth: this.data.navData.length*125+"rpx",
      navWidth2: this.data.discount.length * 296 + "rpx"
    })
    // console.log(this.data.navWidth);

    // 调用云函数获取openid
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        getApp().globalData.openid = res.result.openid
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })

  },
  addClass:function(event){
    var idx = event.currentTarget.dataset.idx;
    // console.log(idx);
    this.setData({
      navIdx: idx
    })
  },
  toDetail:function(){
    wx.navigateTo({url:"../goodsDetail/index"})
  }
  
})