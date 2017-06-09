<template lang="html">
  <div>
    <a href="#" class="item-link"  v-for="item of data" :key="item.text">
      <div class="item-content">
        <div class="item-media">
          <icon class="svgColor" v-if="item.icon" :name="item.icon" scale="2"></icon>
        </div>
        <div class="item-inner" :class="{innerBorder: item.isBorder}">
          <span v-if="item.botton" class="bbs-top-type">{{item.botton}}</span>
          <p class="item-title">{{item.text}}</p>
          <icon v-if="item.rightIcon" name="right" scale="3" style="color:#929292"></icon>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
  export default {
    props: ['data']
  }
</script>
<style lang="scss" scoped>
  @import 'src/style/mixin';
  .item-content {
    box-sizing: border-box;
    padding-left: 0.5rem;
    min-height: 2.2rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .item-media {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    -webkit-box-lines: single;
    -moz-box-lines: single;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    box-sizing: border-box;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding-top: 0.35rem;
    padding-bottom: 0.4rem;
  }
  .item-media + .item-inner {
    margin-left: 0.25rem;
  }
  .item-inner {
    padding-right: 0.5rem;
    position: relative;
    width: 100%;
    padding-top: 0.4rem;
    padding-bottom: 0.35rem;
    overflow: hidden;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .innerBorder:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: auto;
    top: auto;
    height: 1px;
    width: 100%;
    background-color: #e7e7e7;
    display: block;
    z-index: 15;
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
  }
  .bbs-top-type {
    line-height: 1rem;
    font-size: 0.6rem;
    padding: 0 0.1rem;
    vertical-align: text-bottom;
    border: 1px solid #52b7ff;
    color: #52b7ff;
    margin-top: .1rem;
  }
  .svgColor{
    color: #ee494d;
  }
  .whiteFont div{
    min-height:1.5rem;
    .svgColor{
      color: #d5d5d5;
    }
    p{
    @include sc(0.6rem, #d5d5d5);
    }
  }
  .list-enter-active, .list-leave-active {
    transition: opacity .3s ease;
  }
  .list-enter, .list-leave-active {
    opacity: 0;
  }
</style>
