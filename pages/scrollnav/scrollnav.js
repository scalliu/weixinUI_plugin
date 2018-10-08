// pages/scrollnav/scrollnav.js
Page({
  data: {
    navList: ['今日特惠', '烟灶推荐', '净水饮水推荐', '洗碗机推荐', '电热推荐', '燃热推荐', '消毒柜推荐', '嵌入式推荐', '商用电器','活动说明'],
    status: 0,
    temp:['a','b'],
    xxxxxxxx:0,
      left: false ,
      right: false,
      activeIndex: 0,
      viewX:'a',
      xxx:'a1',
      c_index: 0,//当前
    s3_width: 0,
    t_width: 250,//上方每个tab的大小
    scroll_left: 0,//上方滚动的位置
    t_margin_left: 0,//上方的margin-left
    tab_tite_data: [
      { "name": "1", "color": "orange", }
      , { "name": "2", "color": "blue", }
      , { "name": "3", "color": "green", }
      , { "name": "4", "color": "yellow", }
      , { "name": "5", "color": "black", }
      , { "name": "6", "color": "pink", }
    ],
      
  },
  onShow: function () {
    this.getwidth();
  },
  //滑
  get_index: function (e) {
    var crash_current = e.detail.current;
    var s = 0;
    if (crash_current != 0 && crash_current != 1) {
      s = parseInt(crash_current - 1) * this.data.s3_width;
    }
    this.setData({
      c_index: e.detail.current,
      scroll_left: s
    });
    console.log(s,'==========42====',crash_current)
  },
  //点
  changeview: function (e) {
    var crash_current = e.currentTarget.dataset.current;
    var s = 0;
    if (crash_current != 0 && crash_current != 1) {
      s = parseInt(crash_current - 1) * this.data.s3_width;
    }
    this.setData({
      c_index: e.currentTarget.dataset.current,
      scroll_left: s
    });
  },
  getwidth: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        // 分层3等份数 --
        that.setData(that.data.s3_width = res.windowWidth / 3);
      },
    })
 
  },

  tap(event){
    console.log(event)
    let viewX = event.currentTarget.dataset.index
    console.log(viewX)
    this.setData({
      'xxx':viewX,
      scroll_left:211111111
    })
  },  
  scroll(e){
    console.log('1111111111111111')
    console.log(e)
  },
  getStatus(e){
    console.log(e.currentTarget.dataset.index)
    this.setData({ status: e.currentTarget.dataset.index , xxxxxxxx: e.currentTarget.dataset.index})
  },
  cccccc(event){
    console.log(event)
  },
  changeswiper: function(e) {
    console.log( e.detail)
    var index = e.detail.current;//当前所在页面的 index
    console.log(e)
    if(index > this.data.activeIndex) {//左滑事件判断
     this.setData({
     left: true,//若为左滑，left值为true,触发图片动画效果
     activeIndex:index
     })
    } else if(index < this.data.activeIndex) {//右滑事件判断
     this.setData({
     right: true,//若为右滑，right值为true,触发图片动画效果
     activeIndex:index
     })
    }
    setTimeout(() => {//每滑动一次，数据发生变化
    //  this.setData({
    //  activeIndex: index,
    //  left:false,
    //  right:false
    //  })
    }, 1000);
    },
})