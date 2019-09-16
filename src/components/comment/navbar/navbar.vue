<template>
 <!-- :style="bgStyle" -->
  <div class="nav-bar">
    <div class="right"><slot name="right"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="left"><slot name="left"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
    }
  },
  methods: {

  },
  // computed: {
  //   // bgStyle() {
  //   //   return this.bgColor !== '' ? {'background-color': this.bgColor} : '{}'
  //   // }
  // },
  // props: {
  //   // bgColor: {default: '#f6f6f6'}
  // }

}
</script>

<style scoped>
.nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  line-height: 44px;
  height: 44px;
  text-align: center;
  z-index: 99;
}

.right, .left {
  width: 60px;
}

.center {
  flex: 1;  
}

</style>