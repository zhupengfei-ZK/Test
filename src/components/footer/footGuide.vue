<template>
    <section id='foot_guide'>
        <section @click = "gotoAddress('/')" class="guide_item">
          <span class=""><icon name="home" scale="2" style="color: #929292"></icon></span>
          <span>首页</span>
        </section>
        <section @click = "gotoAddress('/find')" class="guide_item">
          <span class=""><icon name="light" scale="2.3" style="color: #929292;margin:-0.1rem auto -0.04rem auto"></icon></span>
          <span>发现</span>
        </section>
        <section @click = "gotoAddress('/user')" class="guide_item">
          <span class=""><icon name="account" scale="2" style="color: #929292" ></icon></span>
          <span>账户</span>
        </section>
        <section @click = "gotoAddress('/bbs')" class="guide_item">
          <span class=""><icon name="community" scale="2" style="color: #929292"></icon></span>
          <span>社区</span>
        </section>
    </section>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    created () {
    },
    mounted () {
    },
    methods: {
      gotoAddress (path) {
        this.$router.push(path)
      }
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

</style>
