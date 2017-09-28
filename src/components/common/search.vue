<!--
自定义事件：
name：searchValChange
description: 搜索框值改变是触发

-->

<template>
  <div class="search">
    <input type="text" placeholder="搜索" v-model="val" @input="change">
    <img v-show="val == ''" src="../../assets/image/search.png" alt="">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        val: ''
      }
    },
    methods: {
      /*实时监听input输入的值*/
      change() {
        this.$emit('searchValChange',this.val);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/global.sass";
  .search {
    position: relative;
    height: 0.6rem;
    padding: 0.11rem 2.5%;

  }
  input {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
    font-size: .28rem;
    text-align: center;
    outline: none;
  }
  img {
    display: block;
    position: absolute;
    top: 50%;
    left: 42%;
    width: 0.24rem;
    height: 0.24rem;
    margin-top: -0.12rem;
  }
</style>
