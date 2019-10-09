<template>     
  <div class="list-item">
      <img :src="showImage" alt="goodsItem.title"  :key="showImage">
      <div>
        <p>{{ goodsItem.title }}</p>
        <span class="price">{{ goodsItem.price }}元</span>
        <span class="cfav"><i class="active"></i>{{ goodsItem.cfav }}</span>
      </div>
  </div>   
</template>

<script>

export default {
  name: 'goodsItems',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return []
      }      
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.show.img || 
             this.goodsItem.show.image || 
             this.goodsItem.show.images ||
             this.goodsItem.show.imgs 
    }
  },

}
</script>

<style lang='scss' scoped>
  .list-item {
    width: 47%;    
    margin: 1%;
    border-radius: 5px;
    background-color: #ffffff;

    img {
      display: block;
      width: 100%;
      margin-bottom: 5px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    > div {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      padding: 3% 5% 5%;

      p {
        width: 100%;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        margin-bottom: 5px;
        -webkit-box-orient: vertical;
        text-align: left;
      }

      span {
        display: inline-block;
        flex: 1;
        margin: 0 2%;
      }

      span.price {
        margin-top: 2px;
        color: var(--color-tint);
      }

      .cfav i{
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 3px;
        vertical-align: text-bottom;
        background: url(~@assets/img/detail/detail_bottom.png) no-repeat ;
        background-size: cover;
        background-position: 0px 1px;
      }
      .cfav i.active{
        background-position: 0px -24px;
      }

    }
  }
</style>