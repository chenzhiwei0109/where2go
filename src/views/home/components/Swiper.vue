<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="swiperItem in swiperList" :key="swiperItem.id">
        <img class="swiper-img" v-lazy="swiperItem.src" />
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
        },
        swiperList: [
          {
            id: 1,
            src:
              "https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"
          },
          {
            id: 2,
            src:
              "https://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg"
          },
          {
            id: 3,
            src:
              "https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg"
          }
        ]
      };
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