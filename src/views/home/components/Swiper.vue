<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="swiperItem in list" :key="swiperItem.id">
        <img class="swiper-img" :src="swiperItem.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: ".swiper-pagination"
          },
          autoplay: {
            delay: 1500,
            //当用户滑动图片后继续自动轮播
            disableOnInteraction: false
          },
          loop: true,
          effect: "fade",
          fadeEffect: {
            crossFade: true
          }
        }
      };
    },
    props: {
      list: Array
    },
    computed:{
      showSwiper(){
        return this.list.length
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "@/assets/styles/config.scss";

  .wrapper {
    width: 100%;
    height: 0;
    overflow: hidden;

    padding-bottom: 31.25%; //高度相对宽度
    --swiper-pagination-color: #027aff;
    .swiper-img {
      width: 100%;
    }
  }
</style>