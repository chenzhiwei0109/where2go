<template>
  <div>
    <HomeHeader :city="city"></HomeHeader>
    <Icons :iconList="iconList"></Icons>
    <Swiper :list="swiperList"></Swiper>
    <Recommend :recommendList="recommendList"></Recommend>
    <Weekend :weekendList="weekendList"></Weekend>
    <Footer></Footer>

  </div>
</template>

<script>
  import HomeHeader from "./components/HomeHeader";
  import Swiper from "./components/Swiper";
  import Icons from "./components/Icons";
  import Recommend from "./components/Recommend";
  import Weekend from "./components/Weekend";
  import Footer from "@/components/Footer";
  import axios from "axios";
  export default {
    name: "home",
    data() {
      return {
        city: "",
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      };
    },
    components: {
      HomeHeader,
      Swiper,
      Icons,
      Recommend,
      Weekend,
      Footer
    },
    mounted() {
      this.getHomeInfo();
    },
    methods: {
      getHomeInfo() {
        axios.get("./mock/index.json").then(res => {
          let datas = res.data;
          if (datas.ret && datas.data) {
            const data = datas.data;
            this.city = data.city;
            this.swiperList = data.swiperList;
            this.iconList = data.iconList;
            this.recommendList = data.recommendList;
            this.weekendList = data.weekendList;
          }
        });
      }
    }
  };
</script>
