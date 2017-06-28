<template>
    <header id='head_top' :style="{background: headback}">
        <span class="title_text" v-if="headTitle">{{headTitle}}</span>
        <slot name="new"></slot>
        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
            <i class="el-icon-pre"></i>
        </section>
        <router-link :to="userInfo? '/profile':'/login'" v-if='signinUp' class="head_login">
            <svg class="user_avatar" v-if="userInfo">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
            </svg>
            <span class="login_span" v-else>登录|注册</span>
        </router-link>
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
      headback: function () {
        if (this.protype === 'newtype') {
          return '#f25b60'
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    #head_top{
        background: #454D5D;
        font-weight: 300;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        @include wh(100%, 1.95rem);
        p{
          @include sc(0.5rem, #fff);
          @include cl;
        }
    }
    .head_goback{
        width: 2rem;
        line-height: 2rem;
        padding-left: 0.6rem;
        i{
            @include sc(0.7rem, #fff);
        }
    }
    .head_login{
        right: 0.55rem;
        @include sc(0.55rem, #fff);
        @include ct;
        .login_span{
            color: #fff;
        }
        .user_avatar{
            fill: #fff;
            @include wh(.8rem, .8rem);
        }
    }
    .title_text{
        @include sc(0.7rem, #fff);
        @include cl;
        font-weight: 300;
        line-height: 1.95rem;
        white-space: nowrap;
    }
</style>
