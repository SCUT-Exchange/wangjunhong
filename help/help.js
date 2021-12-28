Page({
    data: {
      banner: [
        {
          picUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-80eaaf6430877bfc31e7465344026b51_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641989499&t=317592b57996c0e17725c9f9ca2d16e1'
        },
        {
          picUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0706%252F977df4d4p00qvs4jc008rd200u000gwg00hn009x.png%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642161444&t=f0ab59c33b6834752d56b1e3f6c37638    '
        },
        {
          picUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp4.itc.cn%2Fq_70%2Fimages03%2F20210525%2F1e5aaf39c9d94bb4bec97bb1a695fa33.jpeg&refer=http%3A%2F%2Fp4.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642161444&t=0ca3e5583b28eafe316743cb4b739b7b'
        }
      ],
    },
    //页面可见
    onShow() {
      //this.getTopBanner(); //请求顶部轮播图
      //this.getHotGood()
    },
    //轮播图点击事件
    
    goToSCUT: function(){
        wx.navigateTo({
        url: '/pages/toscut/toscut', //
        success: function() {
        }, //成功后的回调；
        fail: function() {console.log("fail to goToSCUT"); }, //失败后的回调；
        complete: function() { } //结束后的回调(成功，失败都会执行)
    })
    },
    goToIntroduction(){
        wx.navigateTo({
          url: '/pages/introduction/introduction',
        })
    },
    goTomyqiugou(){
        wx.navigateTo({
            url: '/pages/myqiugou/myqiugou',
          })
    },
    goTootherqiugou(){
        wx.navigateTo({
            url: '/pages/otherqiugou/otherqiugou',
          })
    },
    goToPhone() {
      wx.makePhoneCall({
        phoneNumber: '18760395771' //我的手机号
      })
    },
})