<template>
  <div class="container" @click="hideGallary">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for=" (item,index) in imgs" :key="index">
          <img class="swiper-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Gallary",
    data() {
      return {
        swiperOptions: {
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          }
        },
        imgs: [
          "https://img1.qunarzz.com/p/tts3/1511/f7/0a7f5e19eeccbdf7.jpg_r_640x420x95_e3237665.jpg",
          "https://img1.qunarzz.com/vs_ceph_vs_tts/63639140-e665-4b9e-bf72-56fd9eb6cdd6.jpg_r_1280x840x95_8f116bbf.jpg"
        ]
      };
    },
    methods: {
      hideGallary() {
        this.$emit("showGallary", false);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .container {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .wrapper {
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      img {
        width: 100%;
      }
    }
  }
</style>