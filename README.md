# TODO

- 总览和添加图片
- 点击图片详情

- 播放中
- 添加链接和过渡
- 总览添加9宫格
- 项目保存在本地：图片链接
- 所有项目
- 新建
- 编辑添加的图片
- 长按移除或替换图片
- 编辑链接和过渡
- 长按拖动图片顺序


Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData:{}
  },
  tap: function(){
    hide.call(this)
  }
})

var animation=wx.createAnimation({
  duration: 300,
        transformOrigin: "50% 50%",
      
      timingFunction: "ease",//timingFunction: 'cubic-bezier(.8,.2,.1,0.8)',

      delay: 0
})

function hide(){
  animation.opacity(0).step()
  animation.height(0).step()
     this.animation.translateY(-420).rotate(-5).translateX(0).step();
    this.animation.translateY(0).translateX(0).rotate(0).step();

  this.setData({animationData: animation.export()})

    setTimeout(function () {
      that.setData({
        animationData: {}
      });

}






<scroll-view scroll-x="true">  
<view class="uploadWrap" scroll-x="true">  
  <view class="upload_Item">  
    <image class="upload_Item_img"  src="../../image/test1.jpg"></image>  
  </view>  
  <view class="upload_Item">  
    <image class="upload_Item_img"  src="../../image/test2.jpg"></image>  
  </view>  
</view>  
</scroll-view>  


.uploadWrap{height:160rpx; width:100%; display: flex; display: -webkit-box; flex-direction: column;}  
.upload_Item{ width: 160rpx; height: 160rpx;  flex: 1;}  
.upload_Item_img{ width: 160rpx; height: 160rpx;}  

<scroll-view scroll-x="true">  
  <view class="uploadWrap" scroll-x="true" >  
    <view class="upload_Item" wx:for="{{imgUrls}}" wx:key="id">  
      <image class="upload_Item_img" src="{{item.imgurl}}"data-id="{{item.id}}" bindtap="changeMainImgFn2"></image>  
      <icon type="clear" size="16" class="upload_Btn" color="#f64400"></icon>  
      <view class="upload_mask {{upload_ImgSelId2==item.id? 'show':' ' }}">主图</view>  
    </view>  
  </view>  
</scroll-view>






<scroll-view scroll-x="true">  
  <view class="uploadWrap" scroll-x="true" >  
    <view class="upload_Item" wx:for="{{imgUrls}}" wx:key="id">  
      <image class="upload_Item_img" src="{{item.imgurl}}"data-id="{{item.id}}" bindtap="changeMainImgFn2"></image>  
      <icon type="clear" size="16" class="upload_Btn" color="#f64400"></icon>  
      <view class="upload_mask {{upload_ImgSelId2==item.id? 'show':' ' }}">主图</view>  
    </view>  
  </view>  
</scroll-view>