const app = getApp()
let searchKey = '' //搜索词
Page({
  data: {
    banner: [
      {
        picUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-80eaaf6430877bfc31e7465344026b51_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641989499&t=317592b57996c0e17725c9f9ca2d16e1'
        , url:'/pages/toscut/toscut'
      },
      {
        picUrl: 'https://img0.baidu.com/it/u=3305662085,4086643105&fm=26&fmt=auto' , url:'/pages/toscut/toscut'
      },
      {
        picUrl: '/image/top3.png', url:'/pages/advertisePage/advertisePage'
      }
    ],
  },

  OnJump:function(e){                             //点击图片触发的事件
    console.log(e)                                //查看标签上的属性
    var url = e.currentTarget.dataset.url         //取出标签上绑定的url
    wx.navigateTo({                               //不关闭当前页面，跳转到非tarber页面
      url: url,
    })
  },
  //页面可见
  onShow() {
    this.getTopBanner(); //请求顶部轮播图
    this.getHotGood()
  },
  //轮播图点击事件

  //去二手商城页
  goToMall() {
    wx.navigateTo({
      url: '/pages/mall/mall'
    })
  },
  //去新发布商品列表页,现在变为去留言评论页
  goToNew() {
    wx.navigateTo({
      url: '/pages/newGood/newGood'
    })
  },
  //客服电话
  goToPhone() {
    wx.makePhoneCall({
      phoneNumber: '18760395771' //我的手机号
    })
  },
  //去上门回收页,现在改为求购界面
  goHuiShou() {
    wx.navigateTo({
      url: '/pages/huishou/huishou',
    })
  },
  goToHelp(){
    wx.navigateTo({
      url: '/pages/help/help',
    })
  },
  goFaBu() {
    wx.navigateTo({
      url: '/pages/fabu/fabu',
    })
  },
  //获取用户输入的搜索词
  getSearchKey(e) {
    searchKey = e.detail.value
  },
  //搜索点击事件
  goSearch() {
    wx.navigateTo({
      url: '/pages/newGood/newGood?searchKey=' + searchKey,
    })
  },
  //获取首页顶部轮播图
  getTopBanner() {
    wx.cloud.database().collection("lunbotu")
      .get()
      .then(res => {
        console.log("首页banner成功", res.data)
        if (res.data && res.data.length > 0) {
          //如果后台配置轮播图就用后台的，没有的话就用默认的
          this.setData({
            banner: res.data
          })
        }
      }).catch(res => {
        console.log("首页banner失败", res)
      })
  },
  //获取首页推荐位的商品
  getHotGood() {
    wx.cloud.callFunction({
      name: "getGoodList",
      data: {
        action: 'getHot'
      }
    }).then(res => {
      console.log("首页推荐商品数据", res.result)
      this.setData({
        goodList: res.result.data,
      })
    }).catch(res => {
      console.log("商品数据请求失败", res)
    })
  },
  //去商品详情页
  goDetail(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?goodid=' + e.currentTarget.dataset.id
    })
  },
  goToSCUT: function(){
    wx.navigateTo({
    url: '/pages/toscut/toscut', //
    success: function() {
    }, //成功后的回调；
    fail: function() { }, //失败后的回调；
    complete: function() { } //结束后的回调(成功，失败都会执行)
    })
  },
})