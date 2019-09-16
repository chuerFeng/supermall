<template>
   <tab-bar>
      <tab-bar-item path="/home" activeColor="#F078AF">
        <img slot="item-icon" src="@assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="@assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div> 
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#F078AF">
        <img slot="item-icon" src="@assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="@assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div> 
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#F078AF">
        <img slot="item-icon" src="@assets/img/tabbar/cart.svg" alt="">
        <img slot="item-icon-active" src="@assets/img/tabbar/cart_active.svg" alt="">
        <div slot="item-text">结算</div> 
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#F078AF">
        <img slot="item-icon" src="@assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="@assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div> 
      </tab-bar-item>
    </tab-bar>

</template>

<script>
// 引入 tabbar
import TabBar from '@components/comment/tabbar/TabBar'
import TabBarItem from '@components/comment/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  data() {
    return {
      path: String
    }
  },
  components: {
    TabBar,
    TabBarItem
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
  .tab-bar-item {
    img {
      width: 21px;
      height: 23px;
      margin-top: 5px;
      vertical-align: middle;
    }

    div {
      display: block;
      font-size: 14px;
    }
  }
</style>