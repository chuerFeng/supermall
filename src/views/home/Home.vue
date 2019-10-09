<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot='center'>购物车</div>
    </nav-bar>
    <scroll class="content">      
      <home-swiper :banner='banner'></home-swiper>
      <homeRecommend :recommends='recommend'></homeRecommend> 
      <population/>
      <tab-control class="tab-control" :titles="tabItems" @sendTabIndex="tabClick"></tab-control>
      <goods-list :goodsList="showGoodsList" ></goods-list>
    </scroll>

    <back-top v-show="showBack" />
   
  </div>
</template>

<script>
const NavBar = () => import('@components/comment/navbar/navbar')
const homeSwiper = () => import('@views/home/childComps/Swiper')
const homeRecommend = () => import('@views/home/childComps/Recommend')
const Population = () => import('@views/home/childComps/Population')
const TabControl = () => import('@components/content/TabControl')
const GoodsList = () => import('@components/content/goods/GoodsList')
const Scroll = () => import('@components/comment/scroll/scroll')
const BackTop = () => import('@components/content/BackTop.vue')

import { getHomeMultidata, getHomeGoods } from '@network/home'

export default {
  name: 'Home',
  data() {
    return {
      banner: [],
      recommend: [],
      tabItems: [{'type':'new','title': '流行'}, {'type': 'pop','title':'新款'},  {'type': 'sell','title': '精选'}],
      goods: {
        'new': {page: 0, list: []},
        'pop':  {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop'
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('new')
    this.getHomeGoods('pop')
    this.getHomeGoods('sell')
    this.tabClick()
  }, 
  computed: {
    showGoodsList() {
      return this.goods[this.currentType].list
    },

    showBack() {
      return 0
    }
  },
  methods: {

    /**
     * 事件监听相关方法
     */
    tabClick( index, type='new') {
      this.currentType = type
    },


    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata()
        .then( res => {
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
        })
        .catch( () => {
          this.banner = {}
          this.recommend = {}
        })
    },

    getHomeGoods(type) {
      var thisGoods = this.goods[type]
      var page = thisGoods.page + 1
      getHomeGoods(type , page)
        .then(res => {
          thisGoods.list.push(...res.data.list)
          thisGoods.page += 1
        })
        .catch( () => {
          thisGoods.list.push([])
        })
    }

  },
  
  components: {
    NavBar,
    homeSwiper,
    homeRecommend,
    Population,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  }

}
</script>

<style scoped>
#home {
  height: 100vh;
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  line-height: 44px;
}

.tab-control {
  top: 44px;
}

.content {
  height: calc(100% - 49px);
  overflow: hidden;
}

</style>