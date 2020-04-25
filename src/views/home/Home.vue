<template>
  <div>
    <HomeHeader></HomeHeader>
    <Swiper></Swiper>
    <Icons></Icons>
    <Recommend></Recommend>
    <Weekend></Weekend>
  </div>
</template>

<script>
  import HomeHeader from "./components/HomeHeader";
  import Swiper from "./components/Swiper";
  import Icons from "./components/Icons";
  import Recommend from "./components/Recommend";
  import Weekend from "./components/Weekend";

  export default {
    name: "home",
    components: {
      HomeHeader,
      Swiper,
      Icons,
      Recommend,
      Weekend
    }
  };
</script>
<style lang="scss" scoped>
</style>