<template lang="html">
  <route>
    <head-top goBack="true" protype="newtype">
      <p slot="center" class="mt25 wh70 tc new">{{title}}<br>
          <span>加入中</span>
      </p>
    </head-top>
    <div class="content rem-6">
      <foot-guide :item="true" class="p25">
        <el-button type="danger" slot="button" class="wh100" style="font-size: .8rem">立即登录</el-button>
      </foot-guide>
      <div class="product-detail-content pt10 tc">
      <p class="Montserrat fw5"><span class="rem-16">9.80</span><span class="rem-10">%</span></p>
      <p class="pb10 fontred">预期年化收益率</p>
      <p class="tl pc75">
        <span>剩余金额&nbsp;&nbsp;39000元</span>
        <span class="fr">还款方式&nbsp;&nbsp;按月付息到期还本</span>
      </p>
      <el-row class="pu3 mt5 backred">
        <el-col :span="12">
          <p><span class="rem-10 Montserrat">1</span><span>个月</span></p>
          <p class="fontred">项目期限</p>
        </el-col>
        <el-col :span="12">
          <p><span class="rem-10 Montserrat">50,000</span><span>元</span></p>
          <p class="fontred">项目金额</p>
        </el-col>
      </el-row>
      </div>
      <el-tabs v-model="activeName">
        <el-tab-pane label="项目概况" name="first">
          <div class="b-line p5">
            <div class="rem-65">
              <span class="icon borrow"></span>
              <span class="lh15 pl5">借款描述</span>
            </div>
            <div class="user-gray m25">
              基本信息：借款人为广东珠海人，从事电力设备销售工作，信用情况较好。<br>
              资金用途：资金周转。<br>
              项目审核：借款人个人基本信息已审核；借款人个人信用报告已审核。 <br>
              保障措施：借款人一部传祺GA3，评估价为4.8万，已办理汽车抵押登记，在车上安装GPS。备用钥匙、 车辆登记证书、保险单由喜投金融收押。 <br>
              备注：借款人已按时结清之前在喜投网的借款，因新的资金需求，重新申请借款。借款人符合风控要求，经审核同意借款3.85万元整。						</div>
          </div>
          <div class="b-line p5">
              <div class="rem-65">
                <span class="icon item"></span>
                <span class="lh15 pl5">借款人信息详情</span></div>
          </div>
          <div class="b-line p5"><div class="rem-65"><span class="icon file"></span><span class="lh15 pl5">借款协议</span></div></div>
        </el-tab-pane>
        <el-tab-pane label="投资记录" name="second" class="tc rem-55">
          <el-row class="list b-line">
            <el-col :span="4">1</el-col>
            <el-col :span="12">
              <p>13***</p>
              <p>2017-06-13 08:12:27</p>
            </el-col>
            <el-col :span="8">500元</el-col>
          </el-row>
          <el-row class="list b-line">
            <el-col :span="4">2</el-col>
            <el-col :span="12">
              <p>13***</p>
              <p>2017-06-13 08:12:27</p>
            </el-col>
            <el-col :span="8">500元</el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="常见问题" name="third">
            <div class="b-line p5">
              <span class="ml-5 lh13"><i class="b"></i>什么是新手专享？</span>
              <div class="user-gray pc5">
                新手专享是指面向从未投资过的注册用户推出的，投向喜投网推荐的实力机构担保或足额抵押的优质借款项目的理财计划，所加入资金匹配喜投网推荐的项目标，锁定期届满后投资人收回加入资金和收益的一项服务，旨在方便投资人投资，提升用户体验。
              </div>
            </div>
            <div class="b-line pc5 mt5">
              <div class="lh13"><i class="b"></i>加入新手专享需要哪些条件？</div>
              <div class="user-gray p5">
                新手专享仅限从未在喜投网成功投资的注册用户参与；且仅享有一次"新手专享"投资机会。
              </div>
            </div>
            <div class="b-line pc5 mt5">
              <div class="lh13"><i class="b"></i>新手专享的期限及收益是多少？</div>
              <div class="user-gray p5">
                新手专享的期限为1个月，预期收益率为13% + 0.8%，到期收回加入资金并获取收益。
              </div>
            </div>
            <div>
            </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </route>
</template>
<script>
  import route from '../route'
  import axios from 'axios'
  import headTop from '../../header/head.vue'
  import footGuide from '../../footer/footGuide'
  /*"is_auto":"0",//0手动自动标
   "p_type":"1",//类型
   "status":"0",//未开启1开启
   "publish_time":"04-11 16:00",//发标时间
   "account":"40000",//项目金额
   "account_yes":"40000",//投资金额
   "apr":"13",//预期年化收益率
   "other":"0",//剩余金额
   "full_time":"35",//满标用时
   "isday":"1",//还款方式：1，到期全额还款。0，按月分期，else按月付息到期还本
   "time_limit":"6"//项目期限
   */
  export default {
    props: ['message'],
    data () {
      return {
        product: {},
        headTitle: '喜利多【20170612-0001】',
        activeName: 'first'
      }
    },
    created () {
      this._init()
    },
    components: {
      headTop,
      route,
      footGuide
    },
    methods: {
      _init () {
        axios.get('static/data.json').then((res) => {
          this.product = res.data.product[0]
        })
      }
    },
    computed: {
      title: function () {
        if (this.product.is_auto == '0') {
          return this.product.name + '手动标'
        } else {
          return this.product.name + '自动标'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import 'src/style/mixin';
  .new{
    @include sc(0.5rem, #fff);
    @include cl;
  }
  .content {
    margin-bottom: 2.5rem;
  }
  .botton{
    @include borderRadius(1rem);
    @include background(#F37776);
  }
  .safe {
    @include borderColor(#fd544d);
  }
  .more {
    @include borderColor(#83c944);
  }
  .all {
    @include borderColor(#40a1e0);
  }
  .product-detail-content {
    background: #f25b60;
    color: #fff;
  }
  .fontred{
    @include sc(0.5rem,#f9c9ca);
    line-height: 1rem;
  }
  .backred{
    background: #ef494d;
  }
  .el-tabs{
    background: #fff;
  }
  .icon {
    display: block;
    float: left;
    width: 1rem;
    height: 1.2rem;
    border-radius: 0.6rem;
    margin-top: 0.2rem;
  }
  .borrow {
    background: url(/static/images/home/invest-borrow.png) no-repeat;
    background-size: 100%;
  }
  .item {
    background: url(/static/images/home/invest-item.png) no-repeat;
    background-size: 100%;
  }
  .file {
    background: url(/static/images/home/invest-file.png) no-repeat;
    background-size: 100%;
  }
  .user-gray{
    @include font(0.6rem, 1rem)
  }
  .list{
    line-height: 1.8rem;
    padding:0.3rem 0;
    height:2.4rem;
    p{
      line-height: 0.9rem;
    }
  }
</style>
