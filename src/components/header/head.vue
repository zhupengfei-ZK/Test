<template>
  <header class='head_top' :style="headstyle">
    <!--头部显示内容-->
    <span class="title_text" v-if="headTitle">{{headTitle}}</span>

    <!--自定义中部-->
    <slot name="center"></slot>
    <!--自定义右侧-->
    <slot name="right"></slot>

    <!--返回箭头  goBack传入true则显示返回箭头-->
    <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
        <i class="el-icon-pre"></i>
    </section>
  </header>
</template>
<script>
  export default {
    props: ['signinUp', 'headTitle', 'goBack', 'protype'],
    data () {
      return {
      }
    },
    mounted () {
    },
    computed: {
      headstyle: function () {
        if (this.protype === 'newtype') {
          return {
            background: '#f25b60'
          }
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .head_top{
        background: #454D5D;
        font-weight: 300;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        @include wh(100%, 1.8rem);
    }
    .head_goback{
        width: 2rem;
        line-height: 1.8rem;
        padding-left: 0.6rem;
        i{
            @include sc(0.7rem, #fff);
        }
    }
    .title_text{
        @include sc(0.75rem, #fff);
        @include cl;
        font-weight: 300;
        line-height: 1.9rem;
        white-space: nowrap;
    }
</style>
