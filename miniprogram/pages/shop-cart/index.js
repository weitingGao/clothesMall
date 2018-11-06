// pages/shop-cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopCar:[
      {
        active:true,
        photo:"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        name:"袜子",
        price:"45",
        numbers:"1",
        score:"2"
      },
      {
        active: true,
        photo: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
        name: "裤子",
        price: "25",
        numbers: "3",
        score: "0"
      },
      {
        active: true,
        photo: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        name: "衣服",
        price: "245",
        numbers: "1",
        score: "1"
      },
    ],
    startX:"",
    saveHidden:true,
    totalPrice: 0,
    totalScoreToPay: 0,
    allSelect: true,
    noSelect: false,
    curTouchGoodStore:"10"//库存数量（每一个都会变）
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
    this.countMoney();
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
  //拖动出现删除按钮
  touchS: function (e) {
    if (e.touches.length == 1) {
      this.setData({
        startX: e.touches[0].clientX
      });
    }
  },
  touchM: function (e) {
    var index=e.currentTarget.dataset.index;
    if (e.touches.length == 1) {
      var moveX = e.touches[0].clientX;
      var disX = this.data.startX - moveX;
      // console.log(disX);
      var left="";
      if (disX == 0 || disX<0){
        left = "margin-left:0px";
      } else if (disX>0){
        left = "margin-left:-" + disX + "px";
        if (disX>=90){
          left = "margin-left:-" + 55 + "px";
        }
      }
    }  
    var list =this.data.shopCar;
    if (index !=="" && index !== null) {
      list[parseInt(index)].left=left;
      this.setData({
        shopCar: list
      })
    }
  },
  touchE: function (e) {
    var index = e.currentTarget.dataset.index;
    var list = this.data.shopCar;
    if (e.changedTouches.length == 1) {
      var endX = e.changedTouches[0].clientX;
      var disX = this.data.startX - endX;
      var left = disX > 90 / 2 ? "margin-left:-" + 55 + "px" : "margin-left:0px";
      if (index !== "" && index != null) {
        // console.log(left);
        list[parseInt(index)].left = left;
        this.setData({
          shopCar: list
        })
      }
    }
  },
//编辑与完成
  editTap:function(){
    this.setData({
      saveHidden: false,
      allSelect: true,//提前设置，调用函数会改
      noSelect: true
    })
    this.bindAllSelect();
  },
  saveTap: function () {
    this.setData({
      saveHidden: true,
      allSelect: false,//提前设置，调用函数会改
      noSelect: false
    })
    this.bindAllSelect();
  },
  //全选按钮
  bindAllSelect:function(){
    var currentAllSelect = this.data.allSelect;
    var list = this.data.shopCar; 
    if (currentAllSelect){
      for(var i=0; i<list.length;i++){
        list[i].active=false;
      }
    }else{
      for (var i = 0; i < list.length; i++) {
        list[i].active = true;
      }
    }
    this.setData({
      shopCar: list,
      allSelect: !currentAllSelect,
      noSelect: currentAllSelect
    })
    this.countMoney();
  },
  //点击单个物品选中
  selectTap:function(e){
    var index = e.currentTarget.dataset.index;
    var list = this.data.shopCar; 
    var isSelect = list[index].active;
    if (isSelect){
      isSelect=false;
    }else{
      isSelect = true;
    }
    list[index].active = isSelect;//重新赋值
    this.setData({
      shopCar: list,
      allSelect: this.allSelect(),
      noSelect: this.noSelect()
    })
    this.countMoney();
  },
  //判断是否为全选
  allSelect:function(){
    var list = this.data.shopCar; 
    var allselect=false;
    for(var i=0;i<list.length;i++){
      if(list[i].active==true){
        allselect = true;
      } else if (list[i].active == false){
        allselect = false;
        return allselect
      }
    }
    return allselect
  },
  // 判断是否为全空
  noSelect:function(){
    var list = this.data.shopCar;
    var noselect = false;
    for (var i = 0; i < list.length; i++) {
      if (list[i].active == false) {
        noselect = true;
      } else if (list[i].active == true) {
        noselect = false;
        return noselect
      }
    }
    return noselect
  },
  //数量减号按钮
  jianBtnTap:function(e){
    var list = this.data.shopCar;
    var index = e.currentTarget.dataset.index;
    var num = list[index].numbers;
    if(num>1){
      num =parseInt(num)-1;
      list[index].numbers=num;//重新赋值
      this.setData({
        shopCar: list
      })
      this.countMoney();
    }
  },
//数量加号按钮【没接后台】
  jiaBtnTap: function (e) {
    var list = this.data.shopCar;
    var index = e.currentTarget.dataset.index;
    var num = list[index].numbers;
    if (num < this.data.curTouchGoodStore) {
      num = parseInt(num) + 1;
      list[index].numbers = num;//重新赋值
      this.setData({
        shopCar: list
      })
      this.countMoney();
    }
  },
  //底部删除按钮 【没接后台】
  deleteSelected:function(){
    if(!this.data.noSelect){
      var list = this.data.shopCar;
      var newList = list.filter(function (i) {
        return i.active == false;
      })
      console.log(newList);
      this.setData({
        shopCar: newList,
        allSelect: this.allSelect(),
        noSelect: this.noSelect()
      })
      this.countMoney();
    }
  },
  //删除单个项目【没接后台】
  delItem:function(e){
    var index = e.currentTarget.dataset.index;
    var list = this.data.shopCar;
    list.splice(index, 1);//删除指定元素
    this.setData({
      shopCar: list,
      allSelect: this.allSelect(),
      noSelect: this.noSelect()
    })
    this.countMoney();
  },
  //算钱了呀 【还是没接后台】
  countMoney:function(){
    var list = this.data.shopCar;
    var newList = list.filter(function (i) {
      return i.active == true;
    })
    // console.log(newList)
    var countMoney=0;
    var coutScore=0;
    for (var i = 0; i < newList.length;i++){
      countMoney = countMoney+(newList[i].price * newList[i].numbers);
      coutScore = coutScore + (newList[i].numbers * newList[i].score);
    }
    this.setData({
      totalPrice: countMoney,
      totalScoreToPay: coutScore
    })
    // console.log(this.data.totalPrice, this.data.totalScoreToPay);

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
  
  },
  goIndex:function(){
    wx.switchTab({
      url:"../index/index"
    })
  }
})