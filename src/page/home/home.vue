<template>
  <div>
    <div class="reveal-list p75">
      <div class="imgtitle p5 tc">
        <img class="b-line"src='https://xitouwang-upload.b0.upaiyun.com/avatar/noavatar_middle.gif'>
        <p class="forhome m25">点击登录</p>
      </div>

      <el-menu default-active="1" class="el-menu-vertical-demo whiteFont pu5">
        <el-menu-item  v-for="(item, index) of listDate" :key="index" style="padding-left: 0px;" index="1+index">
          <i v-if="item.icon" :class="item.icon"></i>{{item.text}}
        </el-menu-item>
      </el-menu>
    </div>
    <transition name="move">
      <div id="home-admin" :class="{ moveenter: show }">
        <foot-guide class="t-line"></foot-guide>
        <div style="height:100%;overflow: auto;background: #efefef">
          <div class="relative">
            <span class="sitting"  @click="show = !show"><i class="el-icon-set"></i></span>
            <img  width="100%" style="display: block" src="../../../static/images/home/newcomer-2.jpg">
          </div>
          <div class="clearfix relative">
            <div class="icon-bline"></div>
            <router-link v-for="item of messages" :to="item.conUrl" :key="item.id" data-no-cache="true" class="itembox">
              <div class="iconfl" :class='item.imgUrl' :style="investIcon"></div>
              <div class="textr">
                <div>{{item.title}}</div>
                <div class="user-gray">{{item.content}}</div>
              </div>
            </router-link>
          </div>
          <div class="pc75 white">
            <home-list-out style="background:#fff" message="newType"class="mt5">
              <span slot="titleicon" :style="newicon" class="newicon"></span>
              <span slot="titleGray" class="user-gray">仅限新用户参加</span>
            </home-list-out>
          </div>
          <div class="pc75 white">
            <home-list-out style="background:#fff" message="claim"class="mt5">
              <img slot="titleicon" src="../../../static/images/home/index-transfer.png" class="transfericon"/>
              <span slot="titleGray" class="user-gray">更灵活的、更高的预期收益率</span>
            </home-list-out>
          </div>
            <div class="list-title b-line mt5">推荐理财项目</div>
          <div class="pc75 white">
            <home-list-out v-for="item of home.newGetList" :newGetList='item' :key="item.id" class="b-line" message="newGetList"></home-list-out>
          </div>
          <p class="occupied"></p>
        </div>
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
  import homeListOut from '../../components/common/home/home-list-out'
  export default {
    data () {
      return {
        show: false,
        home: {},
        homeStatic: {},
        collectflag: false,
        listDate: [
          {'icon': 'el-icon-kefu', 'text': '在线QQ客服'},
          {'icon': 'el-icon-dianhua', 'text': '客服热线'},
          {'icon': 'el-icon-diannao', 'text': '切换电脑版'},
          {'icon': 'el-icon-wenhao', 'text': '帮助中心'},
          {'icon': '', 'text': '关闭'}
        ],
        messages: [
          {'imgUrl': '', 'title': '喜利多', 'content': '长期限 理财省心收益多', 'conUrl': '/xiliduo'},
          {'imgUrl': 'xileduo', 'title': '喜乐多', 'content': '自由的短期理财', 'conUrl': '/xileduo'},
          {'imgUrl': 'dayinvest', 'title': '余额天利', 'content': '灵活理财随存随取', 'conUrl': '/tianli'},
          {'imgUrl': 'other', 'title': '推荐散标', 'content': '灵活期限 更多选择', 'conUrl': '/xileduo'}
        ],
        investIcon: {
          backgroundImage: 'url(' + require('../../../static/images/home/index-invest-2.png') + ')',
          backgroundSize: '2rem'
        },
        newicon: {
          backgroundImage: 'url(' + require('../../../static/images/home/index-newcome.png') + ')',
          backgroundSize: '2rem'
        }
      }
    },
    components: {
      footGuide,
      homeListOut
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
      position: absolute;
      height:100%;
      transition: all 0.4s ease;
      .sitting{
        position: absolute;
        color: #fff;
        left: .5rem;
        top: .5rem;
        font-size: 1rem;
      }
    }
    .moveenter{
      transform: translate3d(12rem,0,0);
    }
/*四项带icon的列表*/
  .itembox{
    width: 50%;
    float: left;
    padding: 0.4rem 0.1rem;
    @include sc(0.65rem,#141414);
    background: #fff;
  }
  .iconfl {
    width: 2rem;
    height: 2rem;
    float: left;
    background-repeat: no-repeat;
    margin: .20rem 0 0 .2rem;
  }
  .iconfl.xileduo {
    background-position: 0 -2.45rem;
  }
  .iconfl.dayinvest {
    background-position: 0 -4.8rem;
  }
  .iconfl.other {
    background-position: 0 -7.2rem;
  }
  .textr {
    margin-top: .4rem;
    height: 2rem;
    margin-left: 2.6rem;
  }
  .icon-bline{
    width: 100%;
    position: absolute;
    margin-top: 3rem;
    height: 1px;
    -webkit-transform: scale(1, 0.5);
    background: #eaeaea;
  }
 /*四项带icon的列表*/

/*项目列表*/
    .newicon {
      width: 1rem;
      height: 1rem;
      display: inline-block;
    }
    .transfericon {
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      background-size: 1.2rem auto;
      vertical-align: bottom;
      margin-left: -0.2rem;
    }
    .list-title {
      height: 2rem;
      line-height: 2rem;
      font-size: .65rem;
      text-align: center;
      background: #fff;
    }
/*项目列表*/

  .p5.b-line:after {
    background: #383838;
  }
  .reveal-list{
    background: linear-gradient(#141414,#262626);
    color: white;
    -webkit-overflow-scrolling: touch;
    position: fixed;
    width: 12rem;
    height: 100%;
    -webkit-transition: -webkit-transform 400ms;
  }
  .el-menu{
    background:none;
    .el-menu-item{
      height: 1.6rem;
      line-height: 1.6rem;
      color: #d5d5d5;
      font-size: .6rem;
      padding-left: 0px
    }
    .el-menu-item:hover {
      background-color: inherit;
    }
  }
  .imgtitle {
    img {
      @include wh(3.5rem,3.5rem);
      border-radius: 50%;
      border: 3px solid #333333;
    }
    .forhome{
      @include sc(0.75rem,#237fd1);
    }
  }
</style>
