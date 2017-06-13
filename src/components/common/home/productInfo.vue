<template lang="html">
  <route>
    <head-top goBack="true" protype="newtype">
      <p slot="new" class="mt25 wh70 tc">新手专享【20170612-0005】&nbsp;手动<br>
          <span class="rem-6">加入中</span>
      </p>
    </head-top>
    <div class="content rem-6">
      <foot-guide :item="true" class="t-line">
        <el-button type="danger" slot="button" class="wh100 rem-85 m25">立即登录</el-button>
      </foot-guide>
      <div class="product-detail-content tc">
      <p class="Montserrat fw5"><span class="rem-18">13.80</span><span class="rem-10">%</span></p>
      <p class="pb10 fontred">预期年化收益率</p>
      <p class="tl pc75">
        <span>剩余金额&nbsp;&nbsp;39000元</span>
        <span class="fr">还款方式&nbsp;&nbsp;按月付息到期还本</span>
      </p>
      <el-row class="pu5 mt5">
        <el-col :span="12">
          <p><span class="rem-13 Montserrat">1</span><span class="rem-6">个月</span></p>
          <p class="fontred">项目期限</p>
        </el-col>
        <el-col :span="12">
          <p><span class="rem-13 Montserrat">50,000</span><span class="rem-6">元</span></p>
          <p class="fontred">项目金额</p>
        </el-col>
      </el-row>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="项目概况" name="first">
          <div class="b-line pc5">
            <div class="rem-7">
              <span class="icon borrow"></span>
              <span class="ml-5 lh15 pl5">借款描述</span>
            </div>
            <div class="user-gray p5">
              基本信息：借款人为广东珠海人，从事电力设备销售工作，信用情况较好。<br>
              资金用途：资金周转。<br>
              项目审核：借款人个人基本信息已审核；借款人个人信用报告已审核。 <br>
              保障措施：借款人一部传祺GA3，评估价为4.8万，已办理汽车抵押登记，在车上安装GPS。备用钥匙、 车辆登记证书、保险单由喜投金融收押。 <br>
              备注：借款人已按时结清之前在喜投网的借款，因新的资金需求，重新申请借款。借款人符合风控要求，经审核同意借款3.85万元整。								</div>
          </div>
          <div class="list-block no-mt b-line">
            <a class="item-content item-link no-padding" target="_blank" href="#page-invest-content-ident">
              <div class="item-inner">
                <div class="item-title">
                  <span class="icon item"></span>
                  <span class="ml-5 lh13">借款人信息详情</span>
                </div>
              </div>
            </a>
          </div>
          <div class="list-block no-mt b-line">
            <a class="item-content item-link no-padding" target="_blank" href="/protocol/main.html?borrow_id=16226">
              <div class="item-inner">
                <div class="item-title">
                  <span class="icon file"></span>
                  <span class="ml-5 lh13">借款协议</span>
                </div>
              </div>
            </a>
          </div>
        </el-tab-pane>
        <el-tab-pane label="投资记录" name="second">
              <div class="produce-invest-list">
                <div class="row b-line produce-invest-item">
                  <div class="col-20 order">
                    <span class="ml-15">1</span>
                  </div>
                  <div class="col-50 user">
                    <div>13***</div>
                    <div>2017-06-13 08:12:27</div>
                  </div>
                  <div class="col-25 order tr">500元</div>
                </div>
                <div class="row b-line produce-invest-item">
                  <div class="col-20 order">
                    <span class="ml-15">2</span>
                  </div>
                  <div class="col-50 user">
                    <div>13***</div>
                    <div>2017-06-13 10:29:39</div>
                  </div>
                  <div class="col-25 order tr">10000元</div>
                </div>
                <div class="row b-line produce-invest-item">
                  <div class="col-20 order">
                    <span class="ml-15">3</span>
                  </div>
                  <div class="col-50 user">
                    <div>13***</div>
                    <div>2017-06-13 10:31:32</div>
                  </div>
                  <div class="col-25 order tr">500元</div>
                </div>
              </div>
        </el-tab-pane>
        <el-tab-pane label="常见问题" name="third">
            <div class="b-line">
              <div class="produce-faq-answer">
                什么是新手专享？
              </div>
              <div class="produce-faq-qustion">
                新手专享是指面向从未投资过的注册用户推出的，投向喜投网推荐的实力机构担保或足额抵押的优质借款项目的理财计划，所加入资金匹配喜投网推荐的项目标，锁定期届满后投资人收回加入资金和收益的一项服务，旨在方便投资人投资，提升用户体验。
              </div>
            </div>
            <div class="b-line">
              <div class="produce-faq-answer">
                加入新手专享需要哪些条件？
              </div>
              <div class="produce-faq-qustion">
                新手专享仅限从未在喜投网成功投资的注册用户参与；且仅享有一次"新手专享"投资机会。
              </div>
            </div>
            <div class="b-line">
              <div class="produce-faq-answer">
                新手专享的期限及收益是多少？
              </div>
              <div class="produce-faq-qustion">
                新手专享的期限为1个月，预期收益率为13% + 0.8%，到期收回加入资金并获取收益。
              </div>
            </div>
            <div class="b-line">
              <div class="produce-faq-answer">
                新手专享发布时间？
              </div>
              <div class="produce-faq-qustion">
                新手专享发布时间为：工作日10：00开始；非工作日随机发布。
              </div>
            </div>
            <div class="b-line">
              <div class="produce-faq-answer">
                新手专享起投金额是多少？
              </div>
              <div class="produce-faq-qustion">
                新手专享起投金额是50元 ，且投资金额须是50的整数倍。
              </div>
            </div>
            <div class="b-line">
              <div class="produce-faq-answer">
                新手专享采用哪种投标方式？
              </div>
              <div class="produce-faq-qustion">
                "新手专享"限手动投标。
              </div>
            </div>
            <div class="b-line">
              <div class="produce-faq-answer">
                如何购买新手专享？
              </div>
              <div class="produce-faq-qustion">
                登陆"喜投网"账户，首先进行充值，在保证账户有可用余额的情况下，点击"首页"--"新手专享"--"立即投资"，输入"投资金额"和"支付密码"，点击"立即投资"即可投资成功。
              </div>
            </div>
            <div class="b-line">
              <div class="produce-faq-answer">
                加入新手专享后，什么时候开始计息？
              </div>
              <div class="produce-faq-qustion">
                新手专享开始计息时间为满额复审当日。
              </div>
            </div>
            <div class="b-line">
              <div class="produce-faq-answer">
                新手专享的保障？
              </div>
              <div class="produce-faq-qustion">
                新手专享所匹配的项目都是喜投网推荐的实力机构担保或足额抵押的优质借款项目标。
              </div>
            </div>
            <div class="b-line">
              <div class="produce-faq-answer">
                新手专享要收取什么费用？
              </div>
              <div class="produce-faq-qustion">
                加入新手专享不收取手续费。锁定期届满退出时，喜投网会收取新手专享所得收益的10%作为管理费用。
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
  import headTop from '../../header/head.vue'
  import footGuide from '../../footer/footGuide'
  export default {
    data () {
      return {
        headTitle: '喜利多【20170612-0001】',
        activeName: 'first'
      }
    },
    props: ['message'],
    components: {
      headTop,
      route,
      footGuide
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import 'src/style/font';
  .content {
    margin-bottom: 2.5rem;
  }
  .botton{
    @include borderRadius(1rem);
    @include background(#F37776);
  }
  .invest-xiliduo-box {
    width: 12rem;
    margin: .75rem auto;
  .user-gray{
      font-size: 0.85rem;
    }
  }
  .invest-xiliduo-icon {
    height: 2.6rem;
    width: 2.6rem;
    border-radius: 50%;
    line-height: 2.5rem;
    margin: 0 auto;
    border: 1px solid #000;
    font-size: 1.2rem;
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
    padding-top: 1.2rem;
  }
  .fontred{
    @include sc(0.6rem,#f9c9ca);
    line-height: 1.2rem;
  }
  .el-row{
    background: #ef494d;
  }
  .el-tabs{
    background: #fff;
  }
  .icon {
    display: block;
    float: left;
    width: 1rem;
    height: 1.4rem;
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
</style>
