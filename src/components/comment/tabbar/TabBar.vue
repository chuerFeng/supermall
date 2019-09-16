<template>
  <div id="tab-bar">
    <slot></slot>  
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style lang="scss" scoped>
  #tab-bar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction:row;
    justify-content : space-between;
    // align-items: center;
    background-color: #f6f6f6;    
    box-shadow: 0px -2px 10px rgba(195, 195, 195, 0.8);    
  }
</style>