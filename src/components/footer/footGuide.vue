<template>
    <section id='foot_guide'>
        <slot name="text"></slot>
        <slot name="button"></slot>
        <router-link v-if="!item" :to="li.url"  class="guide_item" v-for="li of list" :key="li.id">
            <icon :name="li.name" scale="2" style="color: #929292"></icon>
            <span>{{li.text}}</span>
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
            'url': '/',
            'name': 'home',
            'text': '首页'
          }, {
            'url': '/find',
            'name': 'light',
            'text': '发现'
          }, {
            'url': '/user',
            'name': 'account',
            'text': '账户'
          }, {
            'url': '/bbs',
            'name': 'community',
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
      span{
        @include sc(.55rem, #929292);
      }
    }
    p{
        line-height: 2.5rem;
        @include sc(.8rem, #FF4B4A);
        margin: auto;
    }

</style>
