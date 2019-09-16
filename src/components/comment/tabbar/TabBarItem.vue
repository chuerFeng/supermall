<template>
  <div class="tab-bar-item" @click="click_href">    
    <div v-if= "!isActive"><slot name="item-icon"></slot></div> 
    <div v-else ><slot name="item-icon-active"></slot></div>    
    <div class="tab-item-text"  :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  data() {
    return {
    }
  },
  methods: {
    click_href () {
      if (!this.isActive) {
        this.$router.push(this.path)        
      }
    }
  },
  mounted() {
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {      
      return this.isActive ? {color: this.activeColor} : ''
    }
  },
  props: {
    path: String, 
    activeColor: {default: 'red'}
  }
}
</script>

<style lang="scss" scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;

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