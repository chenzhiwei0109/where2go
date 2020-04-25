<template>
  <div>
    <Header></Header>
    <Swpier></Swpier>
    <div>test</div>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Swpier from "./components/Swpier";
  export default {
    name: "home",
    components: {
      Header,
      Swpier
    }
  };
</script>
<style lang="scss" scoped>
  
</style>