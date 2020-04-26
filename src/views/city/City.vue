<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList :cities="cities" :hot="hotCities"></CityList>
    <Alphabet></Alphabet>
  </div>
</template>

<script>
  import CityHeader from "./components/CityHeader";
  import CitySearch from "./components/CitySearch";
  import CityList from "./components/CityList";
  import Alphabet from "./components/Alphabet";
  import axios from "axios";
  export default {
    name: "City",
    components: {
      CityHeader,
      CitySearch,
      CityList,
      Alphabet
    },
    data() {
      return {
        cities: {},
        hotCities: []
      };
    },
    mounted() {
      this.gitCityInfo();
    },
    methods: {
      gitCityInfo() {
        axios.get("/api/city.json").then(res => {
          console.log(res);
          res = res.data;
          if (res.ret && res.data) {
            const data = res.data;
            this.cities = data.cities;
            this.hotCities = data.hotCities;
          }
        });
      }
    }
  };
</script>

<style scoped>
</style>