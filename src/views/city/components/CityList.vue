<template>
  <div class="city-list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list clearfix">
          <div class="city">济南</div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list clearfix">
          <div class="city" v-for="item of hot" :key="item.id">{{item.name}}</div>
        </div>
      </div>

      <div class="area" v-for="(items,key) in listcities" :key="key" :ref="key">
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
        letter: ""
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
    computed: {
      listcities() {
        return this.cities;
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: 3, //滚动检测,2是只检测触摸时
          click: true, //div也可以点击
          momentum: true
        });
        this.$bus.$on("changeCode", letter => {
          this.letter = letter;
        });
      });
    },
    watch: {
      letter() {
        if (this.letter) {
          let element = this.$refs[this.letter][0];
          this.scroll.scrollToElement(element,1000);
        }
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
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
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
