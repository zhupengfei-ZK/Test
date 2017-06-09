<template lang="html">
    <div class="buttons-tab">
      <a href="#" v-for="item, index of tabData" :dataValue="index" class="tab-link button" :key="index">{{item}}</a>
      <div class="border" style="left: 10px; width: 60px;"></div>
    </div>
</template>
<script>
  export default {
    props: ['tabData']
  }
</script>
<style lang="scss" scoped>
  @import 'src/style/mixin';
  .buttons-tab {
    height: 2rem;
    background: white;
    -webkit-align-self: center;
    align-self: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-lines: single;
    -moz-box-lines: single;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    .button.active {
      color: #FF4B4A;
      border: none;
      z-index: 100;
    }
    .button {
      color: #5f646e;
      font-size: 0.7rem;
      text-align: center;
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      border: 0;
      border-bottom: 2px solid transparent;
      border-radius: 0;
    }
    .border {
      width: auto;
      position: absolute;
      height: 2px;
      background: #f96268;
      bottom: 0px;
      content: "";
      -webkit-transition: 0.3s ease;
      transition: 0.3s ease;
    }
  }
</style>
