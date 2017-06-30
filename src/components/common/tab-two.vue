<template lang="html">
    <div class="box">
      <el-row class="tab tc" :click="greet">
        <el-col :span="12" class="current">看帖</el-col>
        <el-col :span="12">我</el-col>
        <div class="bg"></div>
      </el-row>
    </div>
</template>
<script>
  export default {
    props: ['tabData'],
    methods: {
      greet: function (event) {
        // `this` 在方法里指当前 Vue 实例
        alert('Hello ' + this.name + '!')
        // `event` 是原生 DOM 事件
        if (event) {
          alert(event.target.tagName)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import 'src/style/mixin';
  .box {
    top: 0;
    height: 2rem;
    background: #ef494d;
    position: fixed;
    width: 100%;
    z-index: 10;
    .tab {
      width: 6rem;
      height: 1.2rem;
      line-height: 1.2rem;
      border: 1px solid #fff;
      border-radius: 1rem;
      margin: 0.45rem auto;
      position: relative;
      overflow: hidden;
      font-size: .6rem;;
      color: #fff;
      .current{
        color:#ef494d;
      }
      .bg {
        top: -.05rem;
        width: 3.5rem;
        height: 1.2rem;
        position: absolute;
        text-align: center;
        border-radius: 1rem;
        z-index: -1;
        left: 0;
        background: #fff;
      }
    }
  }

</style>
