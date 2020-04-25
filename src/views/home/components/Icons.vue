<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in iconList" :key="item.id">
        <div>
          <img v-lazy="item.imgUrl" alt />
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeIcons",
    data() {
      return {
        swiperOptions: {
          slidesPerView: 4, //一行几个
          slidesPerColumn: 2,
          slidesPerColumnFill: "row"
        }
      };
    },
    props: ["iconList"]
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/config.scss";
  .icons {
    width: 100%;
    padding-bottom: 48%;
    height: 0;
    margin-bottom: .3rem;
    overflow: hidden;
    text-align: center;
    p {
      padding: 0.05rem;
      font-size: 0.23rem;
      @include ellipsis();
    }
    img {
      width: 70%;
      margin-top: 0.1rem;
    }
  }
</style>