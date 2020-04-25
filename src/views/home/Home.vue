<template>
  <div>
    <HomeHeader></HomeHeader>
    <Swiper></Swiper>
    <Icons></Icons>
  </div>
</template>

<script>
  import HomeHeader from "./components/HomeHeader";
  import Swiper from "./components/Swiper";
  import Icons from "./components/Icons";

  export default {
    name: "home",
    components: {
      HomeHeader,
      Swiper,
      Icons
    }
  };
</script>
<style lang="scss" scoped>
</style>