<template lang="html">
    <router-link :to="message.url" data-no-cache="true" class="index-invest-item">
      <div class="index-invest-icon" :class='message.imgUrl'></div>
      <div class="index-invest-text">
        <div>{{message.title}}</div>
        <div class="user-gray">{{message.content}}</div>
      </div>
    </router-link>
</template>
<script>
  export default {
    props: ['message'],
    methods: {
      gotoAddress (path) {
        this.$router.push(path)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import 'src/style/mixin';
  .index-invest-item{
    width: 50%;
    float: left;
    padding: 0.5rem 0.1rem;
    color: #141414;
  }
  .index-invest-icon {
    width: 2.2rem;
    height: 2.2rem;
    float: left;
    background-image: url(/static/images/home/index-invest-2.png);
    background-size: 2.2rem auto;
    background-repeat: no-repeat;
    margin: .20rem 0 0 .2rem;
  }
  .index-invest-text {
    margin-top: .4rem;
    height: 2.2rem;
    margin-left: 2.8rem;
  }
  .index-invest-icon.xileduo {
    background-position: 0 -2.7rem;
  }
  .index-invest-icon.dayinvest {
    background-position: 0 -5.2rem;
  }
  .index-invest-icon.other {
    background-position: 0 -8.0rem;
  }
</style>
