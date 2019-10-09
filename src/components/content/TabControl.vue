<template>
  <div class="tab-control" >
    <div class="tab-control-item" 
        v-for="(item, index) in titles" :key='index'
        :class= "{ active: index === activeIndex }"
        @click="changeActive(index, item.type)">
        
        <span> {{ item.title }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabItems',
  data() {
    return {
      activeIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    changeActive(index, type) { // 改变当前tab下标并将值传给父组件
      this.activeIndex = index
      
      this.$emit('sendTabIndex', index, type)
    }
  },
}
</script>

<style lang='scss' scopes>
  .tab-control {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 25px;
    align-items: center;
    font-size: 15px;
    text-align: center;
    margin-bottom: 5px;
    background-color: #ffffff;

    .tab-control-item {
      flex: 1;

      > span {
        display: inline-block;
    
      }
    }

    .active {
      color: var(--color-high-text);

      > span {
        padding: 0 5px;
        border-bottom: 3px solid var(--color-tint);
      }
    }
  }
</style>