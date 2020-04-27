<template>
  <div>
    <DetailHeader></DetailHeader>
    <DetailBanner></DetailBanner>
    <div class="banner-info">
      <span>产品编号 1453427690</span>
    </div>
    <DetailContent></DetailContent>
    <div class="list">
      <DetailList :list="list"></DetailList>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import DetailBanner from "./components/DetailBanner";
  import DetailContent from "./components/DetailContent";
  import DetailHeader from "./components/DetailHeader";
  import DetailList from "./components/DetailList";
  import Footer from "@/components/Footer";
  import axios from "axios";
  export default {
    name: "Detail",
    components: {
      DetailBanner,
      DetailContent,
      DetailHeader,
      DetailList,
      Footer
    },
    data() {
      return {
        list: []
      };
    },
    mounted() {
      axios
        .get("./mock/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(res => {
          res = res.data;
          if (res.ret && res.data) {
            const data = res.data;

            this.list = data.categoryList;
            console.log(JSON.parse(JSON.stringify(this.list)));
          }
        });
    }
  };
</script>

<style scoped>
  .banner-info {
    position: relative;
    padding: 0.2rem;
    transform: translateY(-1rem);
    z-index: 1;
    color: aliceblue;
    display: flex;
    justify-content: space-between;
  }
  .list {
    margin-top: -0.8rem;
  }
</style>