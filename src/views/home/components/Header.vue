<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont iconsearch2"></i>
      搜索景点门票
    </div>
    <div class="header-right">
      三亚
      <i class="iconfont iconsanjiaojiantoutriangular"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "header"
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/config.scss";

  .header {
    line-height: 0.86rem;
    background: #fff;
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
      color: #b0b0b0;
      i {
        margin-right: 0.1rem;
      }
    }

    &-right {
      min-width: 1.04rem;
      padding: 0 0.1rem;
      float: right;
      text-align: center;
      color: $bgColor;
      
      .iconsanjiaojiantoutriangular {
        margin-left: -0.04rem;
        font-size: 0.23rem;
      }
    }
  }
</style>