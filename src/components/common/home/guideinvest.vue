 <template>
   <route class="newbg">
      <head-top goBack='true' headTitle="新手有好礼">
      </head-top>
      <img src="../../../../static/images/home/guideinvest-bg.jpg" alt="" class="wh100 imgbg">
        <div class="content">
          <div>
            <div class="box tc">
              <span class="sign"></span>
              <p class="title b-line rem-75">注册即可获得10000元体验金</p>
              <p class="user-gray lh10 mt25">新手专享体验金</p>
              <p class="red rem-9">10,000 <span class="rem-6">元</span></p>
              <el-button class="wh100" type="danger">查看我的体验金</el-button>
            </div>
            <div class="box tc mt75">
            <span class="sign second"></span>
            <p class="title b-line rem-75">可投资一次新手专享理财</p>
              <el-row>
                <el-col :span="8">
                  <div class="user-gray lh10 mt25">预期收益率</div>
                  <div class="red rem-9 mt-5">13%<span class="apr">+0.8</span></div>
                </el-col>
                <el-col :span="8">
                  <div class="user-gray lh10 mt25 ml-10">投资期限</div>
                  <div class="red mt-5 rem-9 ml-10">1<span class="rem-7">个月</span></div>
                </el-col>
                <el-col :span="8">
                  <div class="user-gray lh10 mt25 ml-10">起投金额</div>
                  <div class="red mt-5 rem-9 ml-10">50<span class="rem-7">元</span></div>
                </el-col>
              </el-row>
            <el-button class="wh100" type="danger">立即投资</el-button>
          </div>
          </div>
        </div>
  </route>
</template>

<script>
  import route from '../route'
  import headTop from '../../header/head'
  export default {
    components: {
      headTop,
      route
    }
  }
</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
    .newbg{
      background: #ebedec;
      overflow:hidden;
      .imgbg{
        @include allcover;
        top:1.8rem;
        z-index:-1;
      }
      .content{
        margin-top: 7rem;
        padding: 1.3rem;
        overflow:auto;
      .box{
        position:relative;
        background:#fff;
        width:100%;
        .sign{
          position: absolute;
          width: 2.5rem;
          height: 2.5rem;
          left: -.5rem;
          top: -.45rem;
          background-size: 100%;
          background-image: url(../../../../static/images/home/guide-invest.png);
        }
        .sign.second {
          background-position: 0 -2.45rem;
        }
        .title{
          padding: 0.8rem 0 0.5rem;
          margin: 0.2rem 0.7rem;
        }
        .el-button{
          border-radius: inherit;
          margin-top: 1rem;
        }
        .apr {
          color: #fff;
          display: inline-block;
          background: #eb5150;
          border-radius: .2rem;
          line-height: .55rem;
          font-size: .6rem;
          padding: .15rem;
          margin-left: .15rem;
        }
      }
      }
    }
</style>
