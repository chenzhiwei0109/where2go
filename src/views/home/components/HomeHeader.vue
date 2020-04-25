<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont iconsearch2"></i>
      搜索景点门票
    </div>
    <div class="header-right">
      {{nowCity||'北京'}}
      <i class="iconfont iconsanjiaojiantoutriangular"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeHeader",
    props: {
      city: String
    },
    computed: {
      nowCity() {
        return this.city + "";
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/config.scss";

  .header {
    line-height: 0.86rem;
    background-color: red; /* 浏览器不支持的时候显示 */
    background-image: linear-gradient(
      100deg,
      rgb(243, 171, 123),
      $bgColor,
      $bgNewColor,
      rgb(69, 95, 245)
    );
    box-shadow: 0 4px 4px 1px $bgNewColor;
    display: flex;
    white-space: nowrap;
    &-left {
      flex: 1;
      height: 0.64rem;
      line-height: 0.64rem;
      margin-top: 0.12rem;
      margin-left: 0.2rem;
      padding-left: 0.2rem;
      background: #eee;
      border-radius: 0.1rem;
      color: $bgNewColor;
      font-size: 0.25rem;

      i {
        margin-right: 0.1rem;
        font-size: 0.23rem;
      }
    }

    &-right {
      min-width: 1.04rem;
      padding: 0 0.1rem;
      float: right;
      text-align: center;
      color: #fff;

      .iconsanjiaojiantoutriangular {
        margin-left: -0.04rem;
        font-size: 0.23rem;
      }
    }
  }
</style>