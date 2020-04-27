<template>
  <div class="wrapper">
    <transition>
      <Gallary v-if="isShow" @showGallary="isShow=$event"></Gallary>
    </transition>
    <div class="swiper" @click="showGallary">
      <swiper :options="swiperOptions">
        <swiper-slide>
          <img
            class="swiper-img"
            src="https://img1.qunarzz.com/p/tts3/1511/f7/0a7f5e19eeccbdf7.jpg_r_640x420x95_e3237665.jpg"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="swiper-img"
            src="https://img1.qunarzz.com/p/tts6/1511/6c/b391b030fa8720f7.jpg_r_640x420x95_b1524f6d.jpg"
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  import Gallary from "@/components/gallary/Gallary";
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
          pagination: {
            el: ".swiper-pagination",
            type: "fraction"
          }
        },
        isShow: false
      };
    },
    methods: {
      showGallary() {
        this.isShow = true;
      }
    },
    components: {
      Gallary
    }
  };
</script>
<style lang="scss" scoped>
  @import "./../../../assets/styles/config.scss";
  .swiper-pagination {
    color: #eee;
    bottom: .5rem;
  }

  .v-enter-active {
    transition: all 0.3s ease;
  }
  .v-enter {
    transform: scale(0.1);
    opacity: 0;
  }
  .wrapper {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 66.66%; //高度相对宽度
    position: relative;

    .swiper {
      .swiper-img {
        width: 100%;
      }
    }
  }
</style>