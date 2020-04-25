<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in iconList" :key="item.id">
        <div>
          <img :src="item.imgUrl" alt />
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
        },
        iconList: [
          {
            id: "0001",
            imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
            desc: "一日游"
          },
          {
            id: "0002",
            imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
            desc: "一日游"
          },
          {
            id: "0003",
            imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
            desc: "一日游"
          },
          {
            id: "0004",
            imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
            desc: "一日游"
          },
          {
            id: "0005",
            imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
            desc: "一日游"
          },
          {
            id: "0006",
            imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
            desc: "一日游"
          },
          {
            id: "0007",
            imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
            desc: "一日游"
          },
          {
            id: "0008",
            imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
            desc: "一日游"
          },
          {
            id: "0009",
            imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
            desc: "一日游"
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/config.scss";
  .icons {
    width: 100%;
    padding-bottom: 50%;
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