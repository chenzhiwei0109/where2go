<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch :cities="cities"></CitySearch>
    <CityList :cities="cities" :hot="hotCities"></CityList>
    <!-- <Alphabet :cities="cities"></Alphabet> -->
  </div>
</template>

<script>
  import CityHeader from "./components/CityHeader";
  import CitySearch from "./components/CitySearch";
  import CityList from "./components/CityList";
  import axios from "axios";
  export default {
    name: "City",
    components: {
      CityHeader,
      CitySearch,
      CityList,
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
        axios.get("./mock/city.json").then(res => {
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