<template>
  <div class="header">
    <header>
      <h2 class="price">￥3800</h2>
      <span class="person">起/人</span>
      <div class="title">大连圣亚海洋世界(AAAA景区)</div>
      <div class="prud">
        <span>519疯游节·大促进行中！完成任务即可瓜分2亿旅行金</span>
      </div>
      <div class="tag-list">
        <span>现金红包</span>
        <span>专享红包</span>
      </div>
      <div class="producter">
        <img src="http://s.qunarzz.com/vacation_react/detail/d_sellingPoint_header.png" alt />
        <ul class="cont">
          <li class="item">
            <img src="http://s.qunarzz.com/vacation_react/detail/d_sellingPoint_1.png" alt /> 专车出行、独立专车、1单1车、不与陌生人拼车
          </li>
          <li class="item">
            <img src="http://s.qunarzz.com/vacation_react/detail/d_sellingPoint_2.png" alt /> 专车出行、独立专车、1单1车、不与陌生人拼车
          </li>
          <li class="item">
            <img src="http://s.qunarzz.com/vacation_react/detail/d_sellingPoint_3.png" alt /> 专车出行、独立专车、1单1车、不与陌生人拼车
          </li>
          <li class="item">
            <img src="http://s.qunarzz.com/vacation_react/detail/d_sellingPoint_4.png" alt /> 专车出行、独立专车、1单1车、不与陌生人拼车
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import "./../../../assets/styles/config.scss";

  .header {
    background: #fff;
    position: relative;
    transform: translateY(-0.9rem);
    z-index: 2;
    text-indent: 0.1rem;
    border-radius: 12px 12px 0 0;
    padding: 0.24rem 0 0 0;
    header {
      box-sizing: border-box;
      padding: 0.2rem;
      h2.price {
        display: inline;
        font-size: 0.4rem;
        padding-right: 0.05rem;
        color: #ff8300;
      }
      span.person {
        color: #9e9e9e;
        font-size: 0.24rem;
      }
      .title {
        padding-top: 0.1rem;
        font-size: 0.4rem;
      }
      .prud {
        padding-top: 0.2rem;
        color: #9e9e9e;
        @include ellipsis();
      }
      .tag-list {
        padding-top: 0.4rem;
        span {
          color: #ff8300;
          border: 1px solid;
          padding: 0.05rem;
          border-radius: 2px;
          margin-right: 0.1rem;
        }
      }
      .producter {
        margin-bottom: 10px;
        padding: 10px 12px 10px 16px;
        background-color: #fff;
        .cont {
          .item {
            img {
              height: 17px;
              margin-right: 4px;
              display: inline-block;
              font-size: 0;
              width: 30px;
            }
            padding-top: 13px;
            line-height: 17px;
            font-size: 12px;
            color: #616161;
          }
        }
        img {
          width: 183px;
          height: 33px;
          display: block;
          margin: 0 auto 5px;
        }
      }
    }
  }
</style>