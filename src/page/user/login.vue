 <template>
    <div>
      <head-top goBack='true' headTitle="登录">
        <router-link to="reg" slot="right" class="reg">注册</router-link>
      </head-top>
      <div class="content">
        <div class="box">
          <el-input class="b-line" placeholder="用户名/手机号码" v-model="zdgli">
            <el-button slot="prepend" icon="zdgli"></el-button>
          </el-input>
          <el-input placeholder="请输入密码" v-model="mima">
            <el-button slot="prepend" icon="mima"></el-button>
          </el-input>
        </div>
        <el-checkbox class="raido" v-model="checked">一周内记住登录
          <router-link to="getpwd" class="fr">忘记密码？</router-link>
        </el-checkbox>
        <div class="button">
          <el-button type="danger wh100" :click="getLogin">立即登录</el-button>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import headTop from '../../components/header/head'
  export default {
    props: [],
    data () {
      return {
        zdgli: '',
        mima: '',
        checked: true
      }
    },
    created () {

    },
    components: {
      headTop
    },
    methods: {
      getLogin () {
        axios.get('/index.php?user&q=action/login')
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
    .content{
      position: absolute;
      margin-top: 3.75rem;
      .box{
        padding: 0 0.5rem;
        background: #fff;
        color: #666;
        .el-input, .el-button{
          font-size: 0.7rem;
        }
      }
      .raido{
        padding:0.75rem 1.15rem 1.3rem 1.25rem;
        display: block;
      }
      .button{
        margin: 0 1.25rem;
      }
    }
    .reg{
      line-height: 1.8rem;
      right: 0.55rem;
      @include sc(0.7rem, #fff);
      @include ct;
    }
</style>
