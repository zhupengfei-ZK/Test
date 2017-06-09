<template>
    <transition name="router-fade" mode="out-in">
      <div style="padding-bottom:1.25rem">
        <router-view ></router-view>
      </div>
    </transition>
</template>
<script>

  export default {

  }

</script>

<style lang="scss">
    @import './style/common';
    .router-fade-leave-active {
        transition: opacity 1s;
    }
    .router-fade-enter-active {
        transition: opacity 1s;
    }
    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }
</style>
