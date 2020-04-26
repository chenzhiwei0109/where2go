<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in iconList" :key="item.id">
        <div>
          <img v-lazy="item.imgUrl" alt :key="item.id+20" />
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
  @import "./../../../assets/styles/config.scss";
  .icons {
    background: rgb(189, 62, 228);
    background-image: linear-gradient(
      80deg,
      rgb(243, 171, 123),
      rgb(69, 95, 245)
    );
    width: 100%;
    padding-top: .3rem;
    padding-bottom: 48%;
    height: 0;
    box-shadow: 0 .05rem .1rem .1rem rgb(129, 177, 240);
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