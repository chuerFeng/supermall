<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot='center'>购物车</div>
    </nav-bar>
    <home-swiper :banner='banner'></home-swiper>
    <homeRecommend :recommends='recommend'></homeRecommend> 
    <population/>

    <tab-control class="tab-control" :titles="tabItems" @sendTabIndex="tabClick"></tab-control>
    <goods-list  ></goods-list>
  </div>
</template>

<script>
const NavBar = () => import('@components/comment/navbar/navbar')
const homeSwiper = () => import('@views/home/childComps/Swiper')
const homeRecommend = () => import('@views/home/childComps/Recommend')
const Population = () => import('@views/home/childComps/Population')
const TabControl = () => import('@components/content/TabControl')
const GoodsList = () => import('@components/content/goods/GoodsList')

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
  watch: {
    'tabClickData': function (newVal, oldVal) {
      
    }
  },
  methods: {

    /**
     * 事件监听相关方法
     */
    tabClick(index=0 , type='new') {
      console.log(this.goods[type].list)
      return this.goods[type].list
    },


    /**
     * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then( res => {
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },

    getHomeGoods(type) {
      var thisGoods = this.goods[type]
      var page = thisGoods.page + 1
      getHomeGoods(type , page).then(res => {
        var data = res.data
        thisGoods.list.push(...data.list)
        thisGoods.page += 1
      })
    }

  },
  
  components: {
    NavBar,
    homeSwiper,
    homeRecommend,
    Population,
    TabControl,
    GoodsList
  }

}
</script>

<style scoped>

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  line-height: 44px;
}

.tab-control {
  position: sticky;
  top: 44px;
}

</style>