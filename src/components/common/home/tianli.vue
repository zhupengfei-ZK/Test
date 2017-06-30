<template lang="html">
  <route>
    <head-top :head-title="headTitle" goBack="true"></head-top>
    <div class="content">
      <img src="/static/images/home/index-invest-banner.jpg" style="width: 100%">
      <div class="index-dayinvest-box">
        <div class="p10 b-line" v-for="item of listData">
          <el-row>
            <el-col :span="9"><div class="index-dayinvest-icon mt25" :class="item.class"></div></el-col>
            <el-col :span="15">
              <div class="rem-9">
                {{item.title}}
              </div>
              <div class="rem-6 mt25 user-gray"  v-for="i of item.data">
                <p><span class="b"></span>{{i}}</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="block pl5 pu5">
        <div class="rem-7">七日平均预期年化收益：<span class="red rem-10">4.65</span></div>
      </div>
      <foot-guide :item="true" class="t-line">
          <p slot="text">立即开通</p>
      </foot-guide>
    </div>
    <div class="occupied"></div>
  </route>
</template>
<script>
  import route from '../route'
  import homeListOut from './home-list-out'
  import headTop from '../../header/head.vue'
  import footGuide from '../../footer/footGuide.vue'

  export default {
    data () {
      return {
        'headTitle': '余额天利',
        'listData': [
          {
            'title': '存取随心',
            'data': [
              '投资门槛低，1元起投',
              '期限灵活，随时可用于投资提现'
            ]
          }, {
            'title': '超高收益',
            'class': 'step-2',
            'data': [
              '收益率可达XX宝的约1.8倍',
              '每日结息，收益自动复投'
            ]
          }, {
            'title': '安全无忧',
            'class': 'step-3',
            'data': [
              '投资于真实借款项目及货币基金',
              '借款项目严格审核，安全有保障',
              '投资分散投资，风险更低'
            ]
          }
        ]
      }
    },
    components: {
      route,
      homeListOut,
      headTop,
      footGuide
    }
  }
</script>
<style lang="scss" scoped>
  @import 'src/style/mixin';
  .index-dayinvest-box {
    background: #fff;
    margin-top: -.15rem;
  }
  .index-dayinvest-icon {
    width: 4rem;
    height: 4rem;
    background-image: url(/static/images/home/day-invest-icon.png);
    background-size: 4rem auto;
    float: left;
  }
  .step-2 {
    background-position: 0 -4rem;
  }
  .step-3 {
    background-position: 0 -8rem;
  }
</style>
