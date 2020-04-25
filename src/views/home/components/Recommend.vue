<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(item, index) in recommendList" :key="index">
        <img class="item-img" v-lazy="item.imgUrl" alt />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-detail">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props:['recommendList']
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/config.scss";

  .recommend {
    margin-top: 0.3rem;
    .recommend-title {
      line-height: 0.8rem;
      text-indent: 0.2rem;
      color: #0a301e;
      border-radius: 5%;
      box-shadow: 0 0 3px 3px rgb(214, 218, 241);
      background: rgb(123, 239, 243);
      background-image: linear-gradient(
        -20deg,
        rgb(123, 243, 169),
        rgb(123, 179, 243),
        rgb(102, 116, 245)
      );
    }
    ul {
      .item {
        margin-top: 0.2rem;
        display: flex;
        img {
          height: 1.7rem;
          padding: 0.1rem;
        }
        .item-info {
          flex: 1;
          min-width: 0;
          .item-title {
            line-height: 0.54rem;
            font-size: 0.32rem;
          }
          .item-desc {
            line-height: 0.4rem;
            color: #aaa;
            @include ellipsis();
          }
          .item-detail {
            line-height: 0.44rem;
            color: #fff;
            background: #ff900f;
            margin-top: 0.3rem;
            margin-right: 0.1rem;
            padding: 0 0.2rem;
            border-radius: 0.06rem;
          }
        }
      }
    }
  }
</style>