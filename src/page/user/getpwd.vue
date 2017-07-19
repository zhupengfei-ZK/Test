 <template>
    <div>
      <head-top goBack='true' headTitle="找回密码">
      </head-top>
      <div class="content">
        <p class="user-gray">您可以通过在喜投网注册时验证的手机号码找回密码</p>
        <div class="box">
          <el-input class="b-line" placeholder="手机号码" v-model="zdgli">
            <el-button slot="prepend" icon="zdgli"></el-button>
          </el-input>
        </div>
        <div class="button">
          <el-button type="danger wh100">发送验证码</el-button>
        </div>
        <p class="user-gray"><i class="el-icon-kefu"></i>假如以上办法无法解决您的问题，请致电联系我们客服：<a class="red" href="tel:400-788-9566">400-788-9566</a></p>
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
        checked: true
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
    .content{
      position: absolute;
      .box{
        background: #fff;
        color: #666;
        .el-input, .el-button{
          font-size: 0.6rem;
        }
      }
      .button{
        margin: 0.75rem 0.5rem 0;
      }
    .user-gray{
      font-size: 0.6rem;
      padding: 1.3rem 0.5rem;
      line-height: 1rem;
    }
    }
</style>
