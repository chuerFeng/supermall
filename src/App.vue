<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar id="tab-bar"></tab-bar>
  </div>
</template>

<script>

const TabBar = () => import('@components/content/MainTabBar')


export default {
  name: 'App',
  components: {
    TabBar,
  }
}
</script>

<style lang="scss" scope>
  @import './assets/css/base.css';

  #app {
    padding: 44px 0 49px;
  }

  
</style>
