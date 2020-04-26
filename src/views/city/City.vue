<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList></CityList>
    <Alphabet></Alphabet>
  </div>
</template>

<script>
  import CityHeader from "./components/CityHeader";
  import CitySearch from "./components/CitySearch";
  import CityList from "./components/CityList";
  import Alphabet from "./components/Alphabet";
  export default {
    name: "City",
    components: {
      CityHeader,
      CitySearch,
      CityList,
      Alphabet
    },
    created() {
      console.log(1);
    }
  };
</script>

<style scoped>
</style>