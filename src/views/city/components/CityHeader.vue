<template>
  <div>
    <div class="header">
      <div>
        <i class="iconfont iconback" @click="$router.push('/')"></i>
        <span>城市选择</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CityHeader"
  };
</script>

<style lang="scss" scoped>
  @import "./../../../assets/styles/config.scss";

  .header {
    overflow: hidden;
    height: 0.84rem;
    line-height: 0.84rem;
    color: #fff;
    background: $bgNewColor;
    background-image: linear-gradient(
      90deg,
      rgb(243, 171, 123),
      $bgColor,
      $bgNewColor,
      rgb(69, 95, 245)
    );
    position: relative;
    text-align: center;
    i {
      color: #fff;
      position: absolute;
      box-sizing: border-box;
      left: 0.1rem;
      font-size: 0.26rem;
    }
  }
</style>