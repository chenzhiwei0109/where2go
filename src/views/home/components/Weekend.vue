<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="(item, index) in recommendList" :key="index">
        <div class="wrapper">
          <img class="item-img" v-lazy="item.imgUrl" alt />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Weekend",
    data() {
      return {
        recommendList: [
          {
            imgUrl:
              "https://img1.qunarzz.com/sight/p0/1409/19/61e0055dc73a905ef762765f8d7372a6.jpg_256x160_33247f4f.jpg",
            title: "济南大明湖",
            desc: "被誉为“中华民族扬威不屈之地”"
          },
          {
            imgUrl:
              "https://img1.qunarzz.com/sight/p0/1409/19/61e0055dc73a905ef762765f8d7372a6.jpg_256x160_33247f4f.jpg",
            title: "济南大明湖",
            desc: "被誉为“中华民族扬威不屈之地”"
          },
          {
            imgUrl:
              "https://img1.qunarzz.com/sight/p0/1409/19/61e0055dc73a905ef762765f8d7372a6.jpg_256x160_33247f4f.jpg",
            title: "济南大明湖",
            desc: "被誉为“中华民族扬威不屈之地”"
          },
          {
            imgUrl:
              "https://img1.qunarzz.com/sight/p0/1409/19/61e0055dc73a905ef762765f8d7372a6.jpg_256x160_33247f4f.jpg",
            title: "济南大明湖",
            desc: "被誉为“中华民族扬威不屈之地”"
          },
          {
            imgUrl:
              "https://img1.qunarzz.com/sight/p0/1409/19/61e0055dc73a905ef762765f8d7372a6.jpg_256x160_33247f4f.jpg",
            title: "济南大明湖",
            desc: "被誉为“中华民族扬威不屈之地”"
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/config.scss";

  .title {
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
    .wrapper {
      height: 0;
      overflow: hidden;
      padding-bottom: 33.9%;
      text-align: center;
      img {
        width: 100%;
        border-radius: 5%;
      }
    }
    .item-info {
      padding: 0.1rem;
      .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
      }
      .item-desc {
        line-height: 0.4rem;
        color: #aaa;
        @include ellipsis();
      }
    }
  }
</style>