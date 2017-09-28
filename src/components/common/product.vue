<!--
props的参数
  productPic： 产品图片路径      （必填）
  title：      产品名称          （必填）
  nowPrice：   当前价格          （必填）
  pastPrice:   原价             （必填）
  index:       索引值           （必填）
-->
<template>
  <div class="product" @click="toDetail(index)">
    <div class="picture">
      <img src="productPic" alt="">
    </div>
    <div class="description">{{title}}</div>
    <div class="price">
      <div class="money">
        <div class="now">￥{{nowPrice}}</div>
        <div class="past">￥{{pastPrice}}</div>
      </div>
      <div class="buyPic">
        <img src="../../assets/image/goods/grab.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      productPic: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      nowPrice: {
        type: String,
        required: true
      },
      pastPrice: {
        type: String,
        required: true
      },
      index: {
        required: true
      }
    },
    methods: {
      goDetail() {
        this.$emit('goDetail',)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/global.sass";
  .product {
    width: 49%;
    background: #fff;
  }
  .picture {
    overflow: hidden;
    height: 3.77rem;
    img {
      display: block;
      width: 100%;
    }

  }
  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
    height: 0.66rem;
    padding: 0 0.3rem;
    margin: 0.15rem 0;
    line-height: 0.33rem;
    font-size: 0.26rem;
  }
  .price {
    @include flexCenter($hor:false);
    justify-content: space-between;
    height: .48rem;
    padding: 0 0.3rem;
    font-size: 0.3rem;
    line-height: .48rem;
    .money {
      flex: 1;
      display: flex;
    }
    .now {
      font-size: 0.32rem;
      color: #fe7800;
    }
    .past {
      margin-left: 0.11rem;
      color: #999;
      text-decoration: line-through;
    }
  }
  .buyPic {
    float: right;
    width: 0.9rem;
    margin-left: 0.22rem;
    img {
      @include img;
    }
  }
</style>
