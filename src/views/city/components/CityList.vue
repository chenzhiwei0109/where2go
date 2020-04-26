<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list clearfix">
          <div class="city">北京</div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list clearfix">
          <div class="city" v-for="item of hotCities" :key="item.id">{{item.name}}</div>
        </div>
      </div>

      <div class="area" v-for="(items,key) in cities" :key="key">
        <div class="title code">{{key}}</div>
        <ul class="item-list" v-for="item in items" :key="item.id">
          <li class="item">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
    name: "CityList",
    data() {
      return {
        city: ["北京", "北京", "北京", "瓦坎达", "北京", "北京", "北京", "北京"]
      };
    },
    props: {
      hot: {
        type: Array,
        default() {
          return [];
        }
      },
      cities: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper);
    },
    computed: {
      hotCities() {
        return this.hot;
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "~styles/config.scss";
  .border-topbottom {
    &::before {
      border-color: #ccc;
    }
  }
  .city-list {
    .title {
      margin-top: 0.05rem;
      line-height: 0.44rem;
      padding: 0.3rem 0;
      padding-left: 0.2rem;
      font-size: 0.3rem;
      font-weight: bold;
      .city {
        float: left;
        width: 25%;
      }
    }
    .button-list {
      text-align: center;
      padding: 0 0.3rem;
      .city {
        @include ellipsis();
        float: left;
        font-size: 0.24rem;
        line-height: 0.4rem;
        margin: 0.05rem;
        padding: 0.1rem;
        box-sizing: border-box;
        border-radius: 100px;
        background: #f7f7f7;
        box-shadow: 0 0 4px 1px #f7f7f7;
        width: 23%;
      }
    }
    .code {
      background: #f7f7f7;
      padding: 0.1rem 0.2rem;
      color: #8f8f8f;
      font-size: 0.24rem;
    }
    .item-list {
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
    }
  }
</style>
