<template>
  <div id="app">
    <transition>
      <keep-alive exclude="Detail">
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<style lang="scss">
  @import url(//at.alicdn.com/t/font_1779486_qciqa4gm9x.css);
  @import "./assets/styles/config.scss";
  @import "./assets/styles/reset.scss";
  @import "./assets/styles/border.scss";
  .v-enter-active,
  .v-leace-acitve {
    transition: all 1s ease;
  }
  .v-enter,
  .v-leave-to {
    transform: translate3d(0, 0, 100%);
    opacity: 0;
  }
</style>
