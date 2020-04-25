<template>
  <div>
    <HomeHeader :city="city"></HomeHeader>
    <Swiper :list="swiperList"></Swiper>
    <Icons :iconList="iconList"></Icons>
    <Recommend :recommendList="recommendList"></Recommend>
    <Weekend :weekendList="weekendList"></Weekend>
    <footer>
      <span>违法和不良信息举报电话：010-69194277</span>
      <span>违法和不良信息举报邮箱：tousu@qunar.com</span>
    </footer>
  </div>
</template>

<script>
  import HomeHeader from "./components/HomeHeader";
  import Swiper from "./components/Swiper";
  import Icons from "./components/Icons";
  import Recommend from "./components/Recommend";
  import Weekend from "./components/Weekend";
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
      Weekend
    },
    mounted() {
      this.getHomeInfo();
    },
    methods: {
      getHomeInfo() {
        axios.get("/api/index.json").then(res => {
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
<style lang="scss" scoped>
  footer {
    line-height: 22px;
    padding: 7px;
    margin-top: .5rem;
    text-align: center;

    span {
      margin-right: 7px;
      text-align: center;
      padding: 2px 0;
      color: #999;
      font-size: 0.2rem;
      text-decoration: none;
    }
  }
</style>