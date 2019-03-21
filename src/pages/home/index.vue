<template>
  <div class="homeBox">
     <div class="yangli">
        <picker mode="date" :value="dateDay" start="1600-01-01" end="6000-01-01" @change="bindDateChange">
          <div style="display:inline-block;">{{dataD.yangli}}</div><div class="iconfont icontubiaozhizuo-" style="display:inline-block;color:#666;margin-left:8rpx;"></div>
        </picker>
      </div>
      <div class="yinli">{{dataD.yinli}}</div>
      <div class="ji-yi">
        <div class="yiTxt"><div class="yibgFont">宜</div>{{dataD.yi}}</div>
        <div class="jiTxt"><div class="jibgFont">忌</div>{{dataD.ji}}</div>
      </div>
      <div class="lineTxt"><div class="titleStyle">拜祭</div>{{dataD.baiji}}</div>
      <div class="lineTxt"><div class="titleStyle">冲煞</div>{{dataD.chongsha}}</div>
      <div class="lineTxt"><div class="titleStyle">吉神</div>{{dataD.jishen}}</div>
      <div class="lineTxt"><div class="titleStyle">凶神</div>{{dataD.xiongshen}}</div>
      <div class="lineTxt"><div class="titleStyle">五行</div>{{dataD.wuxing}}</div>
      <div class="dataHours">
        <swiper
          :autoplay="true"
          :interval="4000"
          :duration="500"
          :vertical="true"
          :circular="true"
        >
          <block>
            <swiper-item v-for="(item,index) of dataHours" :key="index">
              <div>时间:{{item.hours}}点钟</div>
              <div>
                {{item.des}}
              </div>
              <div class="dataHours-box">
                <div class="yiTxt"><div class="yibgFont">宜</div>{{item.yi}}</div>
                <div class="jiTxt"><div class="jibgFont">忌</div>{{item.ji}}</div>
              </div>
            </swiper-item>
          </block>
        </swiper>
      </div>
  </div>
</template>

<script>
let baseUrl = require("../../utils/index")
import store from './store'
export default {
  data () {
    return {
      
    }
  },
  methods:{
    bindDateChange(e){
      // console.log(e.mp.detail.value)
      this.dateDay=e.mp.detail.value
      this.requestFn(e.mp.detail.value)
    },
    requestFn(timeDay) {
        let that = this
        wx.request({
            url: baseUrl.default.juheUrl + 'laohuangli/d?date=' + timeDay + '&key=707488f53cdf13407a7f5ffc5b5b3e99',
            success(res) {
                store.commit("changeData",res.data.result)
            }
        })
        wx.request({
            url: baseUrl.default.juheUrl + 'laohuangli/h?date=' + timeDay + '&key=707488f53cdf13407a7f5ffc5b5b3e99',
            success(res1) {
                store.commit("changeDataHours",res1.data.result)

            }
        })

    },
  },
  computed:{
    dataD(){
      return store.state.dataD
    },
    dataHours(){
      return store.state.dataHours
    }
  },
  mounted(){
    // console.log(store)
      let time = new Date()
      let month = time.getMonth() * 1 + 1
      let defaultDate = ""+time.getFullYear() + '-' + month + '-' + time.getDate()
      this.requestFn(defaultDate)
  }
}
</script>

<style lang="scss">
.homeBox{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background-color: #fff;
    .yangli{
      width: 100%;
      text-align: center;
    }
    .yinli {
        width: 100%;
        text-align: center;
        font-size: 60rpx;
        color: #ff461f;
        font-family: "楷体";
        font-weight: 600;
        padding: 16rpx 0;
        border-bottom: 1px solid #ccc;
    }
    .ji-yi {
        margin: 20rpx 0;
        width: 90%;
        line-height: 60rpx;
        font-size: 40rpx;
        .yiTxt {
            margin: 14rpx 0;
            .yibgFont {
                margin-right: 8rpx;
                border-radius: 40rpx;
                padding: 0 20rpx;
                display: inline-block;
                color: #fff;
                background-color: #7cc2db;
            }
        }
        .jiTxt {
            margin: 14rpx 0;
            .jibgFont {
                margin-right: 8rpx;
                border-radius: 40rpx;
                padding: 0 20rpx;
                display: inline-block;
                color: #fff;
                background-color: #e34f43;
            }
        }
    }
    .lineTxt {
        margin: 0 0 12rpx 0;
        display: block;
        width: 100%;
        padding: 0 5%;
        box-sizing: border-box;
    }
    .titleStyle {
        color: #f56c02;
        display: inline;
        margin-right: 20rpx;
    }
    .dataHours {
        height: auto;
        width: 100%;
        background-color: #D6D6D6;
        padding: 14rpx 5% 0;
        box-sizing: border-box;
        .dataHours-box {
            margin: 10rpx 0;
            width: 90%;
            line-height: 50rpx;
            font-size: 32rpx;
            .yiTxt {
                margin: 6rpx 0;
                .yibgFont {
                    margin-right: 4rpx;
                    border-radius: 50%;
                    padding: 0 10rpx;
                    display: inline-block;
                    color: #fff;
                    background-color: #7cc2db;
                }
            }
            .jiTxt {
                margin: 6rpx 0;
                .jibgFont {
                    margin-right: 8rpx;
                    border-radius: 50%;
                    padding: 0 10rpx;
                    display: inline-block;
                    color: #fff;
                    background-color: #e34f43;
                }
            }
        }
    }
}
</style>
