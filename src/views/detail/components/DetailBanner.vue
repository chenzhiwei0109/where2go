<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img
          class="swiper-img"
          src="https://img1.qunarzz.com/vs_ceph_vs_tts/f7b3b434-45df-48d6-b3ed-e003fc2abee6.jpg_r_640x420x95_6e57c63d.jpg"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "DetailBanner",
    data() {
      return {
        swiperOptions: {
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
    }
  };
</script>
<style lang="scss" scoped>
  @import "./../../../assets/styles/config.scss";

  .wrapper {
    width: 100%;
    height: 0;
    overflow: hidden;

    padding-bottom: 31.25%; //高度相对宽度
    .swiper-img {
      width: 100%;
    }
  }
</style>