<template>
    <section id='foot_guide'>
        <slot name="text"></slot>
        <slot name="button"></slot>
        <router-link v-if="!item" :to="li.url"  class="guide_item" v-for="li of list" :key="li.id">
          <i :class="li.class"></i>
          <span class="rem-55">{{li.text}}</span>
        </router-link>
    </section>
</template>

<script>
  export default {
    props: ['item'],
    data () {
      return {
        'list': [
          {
            'url': '/home',
            'class': 'el-icon-home',
            'text': '首页'
          }, {
            'url': '/find',
            'class': 'el-icon-find',
            'text': '发现'
          }, {
            'url': '/user',
            'class': 'el-icon-user',
            'text': '账户'
          }, {
            'url': '/bbs',
            'class': 'el-icon-xxi',
            'text': '社区'
          }
        ]
      }
    },
    created () {
    },
    mounted () {
    }
  }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    #foot_guide{
        background-color: #fff;
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        bottom: 0;
        @include wh(100%, 2.5rem);
        display: flex;
        box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    }
    .guide_item{
    	flex: 1;
    	display: flex;
    	text-align: center;
    	flex-direction: column;
    	align-items: center;
      margin-top:0.4rem;
      color: #929292;
      i{
        top: 0.05rem;
        height: 1.2rem;
        font-size: 1.1rem;
        line-height: 1.2rem;
        padding-top: 0;
        padding-bottom: 0;
      }
    }
    p{
        line-height: 2.5rem;
        @include sc(.8rem, #FF4B4A);
        margin: auto;
    }
    .router-link-exact-active{
      color: #FF4B4A;
    }
</style>
