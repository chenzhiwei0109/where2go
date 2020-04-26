<template>
  <div class="search">
    <input class="search-input" placeholder="请输入你想去的城市" />
  </div>
</template>

<script>
  export default {
    name: "CitySearch"
  };
</script>
<style lang="scss" scoped>
  @import "~styles/config.scss";
  .search {
    @include bgColor(50deg);
    height: 0.72rem;
    padding: 0 0.1rem;
    &-input {
      box-sizing: border-box;
      padding: 0 0.1rem;
      width: 100%;
      height: 0.62rem;
      line-height: 0.62rem;
      text-align: center;
      border-radius: 6px;
      color: #616161;
    }
  }
</style>

