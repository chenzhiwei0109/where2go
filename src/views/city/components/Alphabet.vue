<template>
  <ul class="list">
    <li class="item" v-for="(item, index) in code" :key="index">{{item}}</li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        arr: []
      };
    },
    computed: {
      code() {
        let c = this.arr;
        for (var i = 0; i < 25; i++) {
          c.push(String.fromCharCode(65 + i));
        }
        return c;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .list {
    position: fixed;
    top: 1.28rem;
    right: 0;
    bottom: 0;
    width: 0.4rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .item{
      line-height: .36rem;
      color: #333;
    }
  }
</style>