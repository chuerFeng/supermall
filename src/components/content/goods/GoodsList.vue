<template>
  <div class="goods-list-wrap">
    <goods-list-item v-for="(item, index) in goodsList" :key="index" :goodsItem='item'/>    
  </div>
</template>

<script>
const GoodsListItem = () => import('./GoodsListItem')

export default {
  name: 'goods',
  data() {
    return {
    }
  },
  components: {
    GoodsListItem
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  updated() {
    // console.log(this.goodsList);    
  },
}
</script>

<style lang='scss' scoped>
  .goods-list-wrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #efefef;
    padding-top: 5px;
    padding-bottom: 3px;
  }

</style>