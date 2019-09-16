<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.sort" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommends: {
      type: Array,
      default: ''
    }
  }
}
</script>


<style lang="scss" scoped>
.recommend{
  // display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 5px 15px;
  font-size: 15px;
  // box-shadow: 0px 6px 6px rgba(100, 100, 100, 0.1);
  border-bottom: 10px solid #efefef;

  .recommend-item {  
    display: inline-block;
    width: 25%;    

    a {
      text-align: center;
      margin: 0 auto;

      img {
        width: 90%;
        margin-bottom: 10px;
      }
    }
  }
}

</style>