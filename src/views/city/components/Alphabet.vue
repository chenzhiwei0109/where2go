<template>
  <ul class="list">
    <li
      @click="charClick"
      @touchstart="startTouch"
      @touchmove="moveTouch"
      @touchend="endTouch"
      :ref="item"
      class="item"
      v-for="item in letters"
      :key="item"
    >{{item}}</li>
  </ul>
</template>

<script>
  export default {
    name: "Alphabet",
    data() {
      return {
        touchStatus: false,
        timer: null,
        startY: 0
      };
    },
    props: {
      cities: Object
    },
    computed: {
      letters() {
        const letters = [];
        for (let i in this.cities) {
          letters.push(i);
        }
        return letters;
      }
    },
    updated() {
      this.startY = this.$refs["A"][0].offsetTop;
    },
    methods: {
      charClick(e) {
        this.$bus.$emit("changeCode", e.target.innerHTML);
      },
      startTouch() {
        this.touchStatus = true;
      },
      endTouch() {
        this.touchStatus = false;
      },
      moveTouch(e) {
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer);
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79; //手指触摸当前位置距离视口顶部的距离减去滚动区域最上边和页面顶部之间的距离
            const index = Math.floor((touchY - this.startY) / 20); //手指滑动位置字母下下标
            if (index >= 0 && index < this.letters.length) {
              this.$bus.$emit("changeCode", this.letters[index]);
            }
          }, 16);
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .list {
    position: fixed;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: 0.4rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .item {
      line-height: 0.4rem;
      color: #333;
    }
  }
</style>