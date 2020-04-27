<template>
  <div class="headers">
    <transition name="fade">
      <div class="header-nocolor" v-if="!isColor">
        <div class="header" v-text="'<'" @click="goHome"></div>
      </div>
    </transition>

    <transition name="fade">
      <div class="header-color" v-if="isColor">
        <div class="header" v-text="'<'" @click="goHome"></div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isColor: false,
        opacityStyle: {
          opacity: 0
        }
      };
    },
    activated() {
      window.addEventListener("scroll", this.handleScroll);
    },
    deactivated() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      goHome() {
        this.$router.push("/");
      },
      handleScroll() {
        const top = document.documentElement.scrollTop;
        if (top > 69) {
          this.isColor = true;
        } else {
          this.isColor = false;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "./../../../assets/styles/config.scss";
  .fade-enter-active,
  .fade-leave-active {
    transition: all 1s ease;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .headers {
    width: 100%;
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
  }

  .header-nocolor {
    transition: all 1s ease;
    background: transparent;
    .header {
      box-sizing: border-box;
      margin: 0.2rem;
      width: 1rem;
      line-height: 1rem;
      background: #cccccc;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      color: rgb(255, 255, 255);
      text-align: center;
      font-size: 0.6rem;
    }
  }
  .header-color {
    width: 100%;
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      100deg,
      rgb(243, 171, 123),
      $bgColor,
      $bgNewColor,
      rgb(69, 95, 245)
    );
    overflow: hidden;
    .header {
      margin: 0.2rem;
      box-sizing: border-box;
      width: 1rem;
      line-height: 1rem;
      border-radius: 50%;
      color: rgb(255, 255, 255);
      text-align: center;
      font-size: 0.6rem;
    }
  }
</style>