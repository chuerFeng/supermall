<template>
  <swiper> 
    <swiper-item v-for="item in banner" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@components/comment/swiper/index'
export default {
  name: 'homeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: [ 'banner' ]
}
</script>

<style>

</style>