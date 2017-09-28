<template>
  <div class="wrap">
    <selectHead :headItem="headItem" :defaultItem="defaultItem" @selected="selected"></selectHead>
    <Search @searchValChange="searchVal"></Search>
    <div class="banner">
      <img src="../assets/image/goods/banner.jpg" alt="广告图">
    </div>
    <!--<Product></Product>-->
  </div>
</template>

<script>
  import selectHead from '@/components/common/selectHead'
  import Search from '@/components/common/Search'
  import Product from '@/components/common/product'
  export default {
    created() {
      this.$axios.get('/api').then(data => {
        console.log(data)
      })
    },
    data() {
        return {
          headItem: ['全部商品','健康服务','健康设备'],
          defaultItem: '全部商品',
        }
    },
    methods: {
        //头部导航选中后的回调
        selected(val) {
          console.log('导航选择的是：'+val);
        },
        //搜索框值改变的回调
        searchVal(val) {
          console.log('搜索框的值：'+val)
        }
    },
    components: {
      selectHead,
      Search,
      Product
    }
  }
</script>

<style lang="scss">
  .banner {
    margin-bottom: 0.14rem;
    img {
      display: block;
      width: 100%;
    }
  }
</style>
