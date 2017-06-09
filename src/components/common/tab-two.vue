<template lang="html">
    <div class="bbs-top-box">
      <div class="bbs-top-tab">
        <div data-attr="bbs-topics-list" class="item top-list current"><span>看帖</span></div>
        <div data-attr="bbs-member" class="item user-member"><span>我</span></div>
        <div class="bg" style="left: 0px;"></div>
      </div>
    </div>
</template>
<script>
  export default {
    props: ['tabData']
  }
</script>
<style lang="scss" scoped>
  @import 'src/style/mixin';
  .bbs-top-box {
    top: 0;
    height: 2.5rem;
    background: #ef494d;
    position: fixed;
    width: 100%;
    z-index: 10;
  }
  .bbs-top-tab {
    width: 7rem;
    height: 1.4rem;
    line-height: 1.4rem;
    border: 1px solid #fff;
    border-radius: 1rem;
    margin: 0.55rem auto;
    position: relative;
    .item.top-list {
      left: 0;
    }
    .item.current {
      z-index: 2;
      span{
        color: #ef494d;
      }
    }
    .item, .bg {
      top: -.05rem;
      width: 4rem;
      height: 1.4rem;
      position: absolute;
      text-align: center;
      border-radius: 1rem;
      font-size: .7rem;
      z-index: 1;
      span{
        color: #fff;
      }
    }
    .bg {
      left: 0;
      background: #fff;
      transition: all .15s linear;
    }
    .item.user-member {
      left: 45%;
    }
  }
</style>
