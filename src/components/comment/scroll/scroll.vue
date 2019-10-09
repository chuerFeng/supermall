<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>  
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scoll',
  data() {
    return {
      scroll: null ,
      scrollHeight: 0
    }
  },
  mounted() {
    this.scroll = new BScroll( this.$refs.wrapper, {
       probeType: 3
    })
    // this.getScrollHeight('-335')
  },
  methods: {
    // getScrollHeight(hei) {
    //   this.scroll.on('scroll', (pos) => {
    //     if (Math.floor(pos.y) <= hei) {

    //     }
    //   })
    // }
  },

}
</script>

<style>

</style>