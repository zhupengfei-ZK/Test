<template lang="html">
  <route>
    <head-top :head-title="headTitle" goBack="true"></head-top>
    <div class="content">
      <div class="block pb10">
        <el-button type="primary" class="botton">长期理财收益更高，工作日发布</el-button>
        <div class="invest-xiliduo-box">
          <div class="user-gray mt-15">预期年化收益率(%)</div>
          <div class="red rem-30">11.00<span class="rem-15">+2.0%</span></div>
        </div>
        <el-row class="tc">
          <el-col :span="12" class="user-gray rem-7">起投金额<span class="red"> 1,000元</span></el-col>
          <el-col :span="12" class="user-gray rem-7">项目期限<span class="red"> 24个月</span></el-col>
        </el-row>
      </div>
      <div class="block pb10 tc">
        <el-row>
          <el-col :span="8" class="pb10">
            <div class="invest-xiliduo-icon safe">
              <i class="el-icon-edit"></i>
            </div>
            <p class="mt25">安全稳健</p>
          </el-col>
          <el-col :span="8">
            <div class="invest-xiliduo-icon more">
              <i class="el-icon-edit"></i>
            </div>
            <p class="mt25">更高收益</p>
          </el-col>
          <el-col :span="8">
            <div class="invest-xiliduo-icon all">
              <i class="el-icon-edit"></i>
            </div>
            <p class="mt25">全民理财</p>
          </el-col>
        </el-row>
        <p class="rem-8 mu5">项目金额 <span class="red">500,000 元</span></p>
        <el-button type="danger" class="wh100 mu5">正在还款中</el-button>
        <router-link to="#"class="red rem-6">
          喜利多理财计划服务协议书（范本）
        </router-link>
      </div>
    </div>
  </route>
</template>
<script>
  import route from '../route'
  import headTop from '../../header/head.vue'
  export default {
    data () {
      return {
        headTitle: '喜利多【20170612-0001】'
      }
    },
    props: ['message'],
    components: {
      headTop,
      route
    }
  }
</script>
<style lang="scss" scoped>
  @import 'src/style/mixin';
  .content{
    margin-top: 2.45rem;
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
</style>
