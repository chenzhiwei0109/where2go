<template>
  <div>
    <div class="search">
      <input class="search-input" placeholder="请输入你想去的城市" v-model="keyword" />
    </div>
    <transition name="fade" mode="in-out">
      <div class="search-content wrapper" ref="wrapper" v-show="isShow">
        <div>
          <div
            v-for="(item,index) in list"
            class="item border-bottom"
            @click.stop="handleCityClick(item.name)"
            :key="index"
          >{{item.name}}</div>
          <div class="item border-bottom" v-show="undefin">未匹配数据</div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import BScroll from "better-scroll";

  export default {
    name: "CitySearch",
    props: {
      cities: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        keyword: "",
        list: [],
        isShow: false
      };
    },
    watch: {
      keyword() {
        this.debouncedGetAnswer();
      }
    },
    computed: {
      undefin() {
        return !this.list.length;
      }
    },

    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        taps: true
      });

      this.debouncedGetAnswer = this._.debounce(this.getSearch, 100);
    },
    methods: {
      getSearch() {
        if (this.keyword) {
          const result = [];
          for (let i in this.cities) {
            this.cities[i].forEach(val => {
              if (
                val.spell.indexOf(this.keyword) > -1 ||
                val.name.indexOf(this.keyword) > -1
              ) {
                result.push(val);
              }
            });
          }
          this.list = result;
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      },
      handleCityClick(city) {
        this.$store.dispatch("changeCity", city);
        this.isShow = false;
        this.$router.push("/");
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "./../../../assets/styles/config.scss";
  @import "./../../../assets/styles/border.scss";
  .search {
    @include bgColor(50deg);
    height: 0.72rem;
    padding: 0 0.1rem;
    box-shadow: 0 0 4px 1px rgb(137, 158, 228);

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
  .search-content {
    overflow: hidden;
    position: fixed;
    background: #fff;
    z-index: 1;
    top: 1.58rem;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .item {
    position: relative;
    height: 44px;
    margin-right: 25px;
    margin-left: 16px;
    padding-left: 24px;
    line-height: 44px;
    font-size: 14px;
    color: #212121;
  }
</style>

