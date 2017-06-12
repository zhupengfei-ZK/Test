 <template>
    <div class="rating_page">
      <div class="user-main-head">
        <div class="user-main-info">
          <a href="/bbs/main.html?q=member&amp;type=mydata" class="user-avatar">
            <img src="https://xitouwang-upload.b0.upaiyun.com/avatar/middle_08cba8b59afc91a32db989531e959004.jpg"></a>
          <div class="username">
            <div style="font-size:.8rem">
              18338443993
              <div class="user-invest-lv lv-2"></div>
            </div>
          </div>
        </div>
        <a class="collection-link" href="/index.php?user&amp;q=code/borrow/wap_invest">
          <div>待收总额（元）</div>
          <div class="Montserrat" style="font-size: 2rem;">12138.00</div>
        </a>
        <span class="sitting">
          <a data-no-cache="true">
          <icon name="message" scale="2" style="color: #fff"></icon>&nbsp&nbsp
          </a>
          <icon name="sitting" scale="2" style="color: #fff"></icon>
        </span>
      </div>
      <div class="user-account-tab b-line">
        <a data-no-cache="true" href="/index.php?user&amp;q=code/account/log">
          <div class="account-title">总金额（元）</div>
          <p class="Montserrat">12145.12</p>
        </a>
        <a data-no-cache="true" href="/index.php?user&amp;q=code/account/log">
          <div class="account-title">可用金额（元）</div>
          <p class="Montserrat">7.12</p>
        </a>
      </div>
      <div class="user-main-tab">
          <a href="/index.php?user&amp;q=code/account/recharge_new"><i></i>充值</a>
          <a href="/index.php?user&amp;q=code/account/cash_new"><i class="cash"></i>提现</a>
          <a id="main-sign" onclick="bbsSign()"><i class="sign"></i>签到</a>
      </div>
      <a href="/index.php?user&amp;q=code/user/create_report">
        <img src="/static/images/user/user-thrid-year.jpg" style="width: 100%;margin: 0.5rem 0">
      </a>
        <div class="contain-col b-line" v-for="items of findListTitle" style="background: #fff">
          <div class="son" v-for="item of items" :key="item.id">
              <findListTitle :message="item"></findListTitle>
          </div>
        </div>
      <foot-guide ></foot-guide>
    </div>
</template>

<script>
  import footGuide from '../../components/footer/footGuide'
  import findListTitle from '../../components/common/find/find-list-title'

  export default {
    data () {
      return {
        'findListTitle': [[
          {
            'class': 'account-log',
            'title': '资金记录',
            'message': '查看详情'
          },
          {
            'class': 'safe',
            'title': '安全等级',
            'message': '高'
          },
          {
            'class': 'day-invest',
            'title': '余额天利',
            'message': '查看每日收益'
          }
        ],
        [
          {
            'class': 'task',
            'title': '任务中心',
            'message': '轻松赚喜币'
          },
          {
            'class': 'invite',
            'title': '邀请好友',
            'message': '邀请奖励多多'
          },
          {
            'class': 'auto',
            'title': '自动投标',
            'message': '不开你就OUT了'
          }
        ],
        [
          {
            'class': 'coin',
            'title': '喜币',
            'message': '可兑换人民币'
          },
          {
            'class': 'tiyan',
            'title': '体验金',
            'message': '坐享投资体验'
          },
          {
            'class': 'transfer',
            'title': '债权转让',
            'message': '让投资更灵活'
          }
        ]
        ]
      }
    },
    created () {

    },
    components: {
      footGuide,
      findListTitle
    },
    props: [],
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
    @import 'src/style/font';
    .rating_page{
      background: #efeff4;
      .sitting{
        position: absolute;
        color: #fff;
        right: .8rem;
        top: 1rem;
        font-size: 1rem;
      }
      .user-main-head {
         background-image: url(/static/images/user/user-center-bg.jpg);
         background-size: 100% auto;
         background-position: 0 10%;
         padding: .8rem;
         div{
           color: #fff;
         }
      }
    }
    .collection-link {
      text-align: center;
      color: #fff;
    }
    .user-main-info {
      padding: .1rem;
      height: 3rem;
      width: 100%;
      overflow: hidden;
    }
    .fl {
      float: left;
    }
    .user-avatar {
      float: left;
      img {
        width: 2.9rem;
        height: 2.9rem;
        border-radius: 50%;
        border: .2rem solid #f99296;
        box-sizing: border-box;
      }
    }
    .username {
      margin-left: .5rem;
      margin-top: .2rem;
      float: left;
    }

    .user-account-tab {
      height: 3rem;
      background: #fff;
      font-size: .7rem;
      a{
         width: 50%;
         float: left;
         text-align: center;
       }
      p{
        color: #7a7a7a;
        font-size: 0.8rem;
      }
    }
    .user-account-tab .account-title {
      height: 1.2rem;
      line-height: 1.8rem;
      color: #939393;
      font-size: .6rem;
      margin-top: .1rem;
    }
    .user-main-tab {
      padding: .2rem 0 0 0;
      background: #fff;
      position: relative;
      display: flex;
      a{
        flex: 1;
        text-align: center;
      }
    }
    .contain-col{
      display: flex;
      padding: 0.5rem 0;
      .son{
        flex:1;
      }
    }
    .user-main-tab i {
      display: inline-block;
      width: 1.6rem;
      height: 1.6rem;
      background-image: url(/static/images/user/user-account-tab.png);
      background-size: 1.6rem;
      vertical-align: middle;
      margin-right: .1rem;
    }
    .cash {
      background-position: 0 -1.65rem;
    }
    .sign {
      background-position: 0 -3.35rem;
    }
    .user-invest-lv{
      background-image: url("/static/images/user/invest-lv.png");
      background-size: 6rem auto;
      height: 1.3rem;
    }
    .user-invest-lv.lv-1{
      background-position: 0 0;
      width: 5.2rem;
    }
    .user-invest-lv.lv-2{
      background-position: 0 -1.3rem;
      width: 5.2rem;
    }
    .user-invest-lv.lv-3{
      background-position: 0 -2.6rem;
      width: 5.2rem;
    }
    .user-invest-lv.lv-4{
      background-position: 0 -3.9rem;
      width: 5.2rem;

    }
    .user-invest-lv.lv-5{
      background-position: 0 -5.2rem;
      width: 5.2rem;
    }
    .user-invest-lv.lv-6{
      background-position: 0 -6.5rem;
      width: 5.2rem;
    }
    .user-invest-lv.lv-7{
      background-position: 0 -7.8rem;
      width: 5.7rem;
    }
    .user-invest-lv.lv-8{
      background-position: 0 -9.2rem;
      width: 5.2rem;
    }
    .user-invest-lv.lv-9{
      background-position: 0 -10.5rem;
      width: 5.2rem;
    }
    .user-invest-lv.lv-10{
      background-position: 0 -11.8rem;
      width: 5.7rem;
    }
    .user-invest-lv.lv-11{
      background-position: 0 -13.05rem;
      width: 6rem;
    }
</style>
