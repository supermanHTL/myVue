<!--
------头部导航--------
自定义事件：
eventName：selected
description: 选中导航的项时触发，并将选中的结果返回

props的参数：
  headItem：一级导航的内容（数组）          （必须参数）
  defaultItem：导航默认选项（字符串）       （必须参数）
  listNav：二级导航内容（数组）             （必须参数）
  showMoreIcom：显示二级导航的icon（布尔值） （必须参数）

-->

<template>
  <div class="head" :class="{'activeHead': navShow, 'norHead': !navShow}">
    <div class="topWrap" :class="{'actTopWrap': navShow}">
      <ul class="top">
        <li v-for="item in headItem" @click="select(item)">
          <span :class="{'isActive': item == selectRes}">{{item}}</span>
        </li>
      </ul>
      <div class="moreIcon" @click="showNav()" v-if="isShowMoreIcon">
        <img src="../../assets/image/nav.png" alt="">
      </div>
    </div>
    <ul class="nav clearfix" v-show="navShow" @click="actMark()">
      <li v-for="(item,index) in listNav" @click="chooseNav(item,index)" :class="{'actNav': item == selectRes}">
        <span>{{item}}</span>
      </li>
    </ul>
    <div class="mark" v-show="navShow" @click="actMark()"></div>
  </div>
</template>

<script>
  export default {
    props:{
      headItem: {  //一级导航的内容（数组）
        type: Array,
        required: true
      },
      defaultItem: { //导航默认选项(字符串)
        type: String,
        required: true
      },
      listNav: {  //二级导航内容（数组）
        type: Array,
      },
      showMoreIcom: {  //显示二级导航的icon（布尔值）
        type: Boolean,
      }

    },
    data() {
      return {
        isShowMoreIcon: this.showMoreIcom || false,
        selectRes: this.defaultItem,  //用户选中的项
        navShow: false,   //是否显示全部导航项
      }
    },
    methods: {
      /*一级导航的选择*/
      select(val) {
        this.selectRes = val;
        this.navShow = false;
        /*ajax调用。。。。。。。*/
        this.$emit('selected',val);

      },
      /*二级导航的显示隐藏切换*/
      showNav() {
        this.navShow = !this.navShow
      },
      /*二级导航的选择*/
      chooseNav(val,index) {
        this.selectRes = val;
        this.$emit('selected',val);
        if(val == this.headItem[0] || val == this.headItem[1] || val == this.headItem[2]) {
          return;
        }
        //每次的选择，调整一级导航的顺序
        this.headItem[2] = this.headItem[1];
        this.headItem[1] = val;
      },

      /*mark蒙版层的点击*/
      actMark() {
        this.navShow = false;
      }
    }
  }
</script>

<style rel="styleheet/scss" lang="scss" scoped>
  @import "../../assets/scss/global.sass";
  .topWrap {
    display: flex;
    height: .7rem;
    padding: 0 0.3rem;
  }
  .actTopWrap {
    position: absolute;
    left: 0;
    right: 0;
    padding: 0 0.3rem 0.3rem;
    z-index: 9999;
    background: #fff;
  }
  .head {
    position: relative;
    @include border;
    font-size: .3rem;
    background: #fff;
  }
  .activeHead {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9990;
    font-size: .3rem;
  }
  .top {
    display: flex;
    flex: 1;

    li {
      display: flex;
      flex: 1;
      justify-content: center;
      span {
        display: flex;
        height: 100%;
        align-items: center;
        box-sizing: border-box;
      }
    }
    .isActive {
      border-bottom: .04rem solid  $theme;
      color: $theme;
      font-weight: bold;
    }
  }
  .moreIcon {
    @include flexCenter;
    width: .6rem;
    img {
      display: block;
      width: .4rem;
    }
  }
  .nav {
    position: absolute;
    left: 0;
    right: 0;
    top: 1rem;
    padding: 0 .3rem;
    z-index: 9999;
    background: #fff;
    li {
      float: left;
      width: 22%;
      height: 0.6rem;
      margin-right: 4%;
      margin-bottom: 0.3rem;
      border-radius: .08rem;
      @include flexCenter;
    }
    li:nth-child(4n) {
      margin-right: 0;
    }
    .actNav {
      background: $theme;
      color: #fff;
    }
  }
  .mark {
    position: absolute;
    left: 0;
    right: 0;
    top: 0.7rem;
    bottom: 0;
    background: rgba(0,0,0,0.7);
    z-index: 999;
  }

</style>
