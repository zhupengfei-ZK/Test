<template>
  <div>
    <div class="reveal-list">
      <div class="content-block">
        <div class="menu-avatar">
          <img src="https://xitouwang-upload.b0.upaiyun.com/avatar/noavatar_middle.gif">
          <p>点击登录</p>
        </div>
        <listIcon class="whiteFont" :data="home.listDate"></listIcon>
      </div>
    </div>
    <foot-guide class="t-line"></foot-guide>
    <transition name="move">
      <div id="home-admin" class="transition" :class="{ moveenter: show }">
        <span class="sitting"  @click="show = !show"><icon name="sitting" scale="2" style="color: #fff"></icon></span>
        <img :src="home.banner" alt="" width="100%">
        <div class="clearfix">
          <div class="home-list-icon-bline"></div>
          <home-list-icon v-for="item of home.message" :message='item':key="item.id" style="background:#fff"></home-list-icon>
        </div>
        <home-list-out style="background:#fff" message="newType"class="mt-10"></home-list-out>
        <home-list-out style="background:#fff" message="claim"class="mt-10"></home-list-out>
        <home-list-out v-for="item of home.newGetList" :newGetList='item' :key="item.id" style="background:#fff" message="newGetList"class="mt-10"></home-list-out>
      </div>
    </transition>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import footGuide from '../../components/footer/footGuide'
  import homeListIcon from '../../components/common/home/home-list-icon'
  import homeListOut from '../../components/common/home/home-list-out'
  import listIcon from '../../components/common/list-icon.vue'
  export default {
    data () {
      return {
        show: false,
        home: {},
        homeStatic: {},
        collectflag: false
      }
    },
    components: {
      footGuide,
      homeListIcon,
      homeListOut,
      listIcon
    },
    created () {
      this._init()
    },
    methods: {
      _init () {
        axios.get('static/data.json').then((res) => {
          this.home = res.data.home
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    #home-admin{
      width: 100%;
      background: #efeff4;
      position: absolute;
    .sitting{
        position: absolute;
        color: #fff;
        left: .5rem;
        top: .5rem;
        font-size: 1rem;
      }
    }
    .head_logo{
        left: 0.4rem;
        font-weight: 400;
        @include sc(0.7rem, #fff);
        @include wh(2.3rem, 0.7rem);
        @include ct;
    }
  .index-invest-item:lt(2){
      content: "";
      width: 100%;
      position: absolute;
      bottom: 0px;
      left: 0px;
      height: 1px;
      -webkit-transform: scale(1,0.5);
      background: #eaeaea;
  }
  .home-list-icon-bline{
    width: 100%;
    position: absolute;
    margin-top: 3.7rem;
    height: 1px;
    -webkit-transform: scale(1, 0.5);
    background: #eaeaea;
  }
  .reveal-list{
    display: block;
    background: linear-gradient(#141414,#262626);
    color: white;
    box-sizing: border-box;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    position: fixed;
    width: 12rem;
    top: 0;
    height: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition: -webkit-transform 400ms;
    transition: transform 400ms;
    .menu-avatar {
      text-align: center;
      img {
         width: 3.5rem;
         height: 3.5rem;
         border-radius: 50%;
         border: 3px solid #3e3e3e;
      }
      p{
        color: #237fd1;
      }
    }

    .content-block {
      margin: .7rem 0;
      padding: 0 0.75rem;
      color: #6d6d72;
    }
  }
  .moveenter{
    transform: translate3d(12rem,0,0)
  }
  .transition{
    transition: all 0.4s ease;
  }
</style>
