<template lang="html">
    <a data-no-cache="true" href="#" class="icon-item b-line">
        <div class="icon-item-i" :class="message.class"></div>
        <div class="icon-item-text">
            <h4>{{message.title}}</h4>
            <div class="user-gray">{{message.message}}</div>
        </div>
    </a>
</template>
<script>
  export default {
    props: ['message']
  }
</script>
<style lang="scss" scoped>
  @import 'src/style/mixin';
  .icon-item-i {
      width: 1.6rem;
      height: 1.6rem;
      margin: 0 auto;
      background-size: 1.6rem;
      background-image: url(/static/images/user/user-center.png);
  }
  .icon-item-text {
      text-align: center;
      margin-top: .2rem;
      font-size: .50rem;
      h4 {
          margin: 0;
          font-weight: 400;
          @include sc(0.6rem, #272727);
      }
  }
  .safe{
      background-position: 0 -1.6rem;
  }
  .account-log{
      background-position: 0 -3.2rem;
  }
  .tiyan{
      background-position: 0 -4.8rem;
  }
  .task{
      background-position: 0 -6.4rem;
  }
  .invite{
      background-position: 0 -8rem;
  }
  .transfer{
      background-position: 0 -9.6rem;
  }
  .coin{
      background-position: 0 -11.2rem;
  }
  .auto{
      background-position: 0 -12.8rem;
  }
  .user-gray {
    @include sc(0.55rem, #808080);
  }
</style>
