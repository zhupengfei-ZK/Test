 <template>
    <div class="bg">
      <head-top goBack='true' headTitle="注册喜投网">
        <router-link to="login" slot="right" class="login">登录</router-link>
      </head-top>
      <img src="../../../static/images/user/invite-reg.jpg" alt="" class="wh100 bk">
      <div class="box">
        <el-input placeholder="请输入手机号" v-model="zdgli">
          <el-button slot="prepend" icon="zdgli"></el-button>
          <el-button slot="append" icon="quxiao"></el-button>
        </el-input>
      </div>
      <div class="box">
        <el-input placeholder="请输入验证码" v-model="mima">
          <el-button slot="prepend" icon="message"></el-button>
          <el-button slot="append" type="primary">获取验证码</el-button>
        </el-input>
      </div>
      <div class="box">
        <el-input placeholder="8-24位字母数字组合" v-model="mima">
          <el-button slot="prepend" icon="mima"></el-button>
          <el-switch class="switch" slot="append" v-model="switc" on-text="" off-text=""on-color="#46b6ff" off-color="#c0c0c0"> </el-switch>
        </el-input>
      </div>
      <div class="button tc">
        <el-button>注册送万元体验金</el-button>
      </div>
    </div>
</template>

<script>
  import headTop from '../../components/header/head'
  export default {
    props: [],
    data () {
      return {
        zdgli: '',
        mima: '',
        checked: true,
        switc: true
      }
    },
    created () {

    },
    components: {
      headTop
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  .head_top{
    position: relative;
  }
  .bg{
    background: #f8605f;
    height:100%;
    .box{
      margin:0.5rem 1.5rem;
      padding: 0 0.5rem;
      background: #fff;
      color: #666;
      overflow: hidden;
      border-radius:1rem;
      .el-input-group__prepend{
        .el-button.el-button--default{
          color:#ff4b4a;
        }
      }
      .el-input, .el-button{
        font-size: 0.7rem;
      }
      .el-button--primary{
        background: #46b6ff;
        border-radius: 1rem;
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: .5rem;
        color:#fff;
        padding:0 8px;
      }
      .el-input-group__append{
        .el-button.el-button--default{
          font-size:.9rem;
          opacity: .4;
          margin-right: -10px;
        }
      }
      .switch{
        transform:scale(.75,.75);
      }
    }
    .raido{
      padding:0.75rem 1.15rem 1.3rem 1.25rem;
      display: block;
    }
    .button{
      margin: 1rem 1.25rem;
      .el-button{
        background: #fee318;
        color: #fe4557;
        height: 1.8rem;
        border-radius: 1rem;
        font-size: 0.85rem;
        font-weight: bolder;
        padding:0 1.5rem;
        border:none;
      }
    }
  }
  .login{
    line-height: 1.8rem;
    right: 0.55rem;
    @include sc(0.7rem, #fff);
    @include ct;
  }
</style>
