<template>
  <div class="back-top" @click="toTop">
    <img src="~@assets/img/common/top.png" alt="">
  </div>  
</template>

<script>

export default {
  name: "BackTop",
  methods: {
    toTop() {
      console.log('11111');
      
    }
  },
}
</script>

<style scoped>
  .back-top {
    position: fixed;
    bottom: 73px;
    right: 15px;
    z-index: 99;
  }
  .back-top img {
    width: 43px;
  }
</style>