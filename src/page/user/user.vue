 <template>
    <div class="rating_page rem-65">
      <div class="head">
        <div class="imgtitle">
          <img src='https://xitouwang-upload.b0.upaiyun.com/avatar/noavatar_middle.gif'/>
          <p>18338443993</p>
          <p class="user-invest-lv lv-2"></p>
        </div>
        <span class="sitting">
          <a data-no-cache="true">
          <i class="el-icon-message"></i>&nbsp&nbsp
          </a>
          <i class="el-icon-set"></i>
        </span>
        <a class="tc" href="/index.php?user&amp;q=code/borrow/wap_invest">
          <p class="pu3">待收总额（元）</p>
          <div class="Montserrat rem-18 fw5">12138.00</div>
        </a>
      </div>
      <div class="tab2 b-line">
        <a data-no-cache="true" href="/index.php?user&amp;q=code/account/log">
          <div class="title">总金额（元）</div>
          <p class="Montserrat">12145.12</p>
        </a>
        <a data-no-cache="true" href="/index.php?user&amp;q=code/account/log">
          <div class="title">可用金额（元）</div>
          <p class="Montserrat">7.12</p>
        </a>
      </div>
      <div class="tab3  mb5">
          <a href="/index.php?user&amp;q=code/account/recharge_new"><i></i>充值</a>
          <a href="/index.php?user&amp;q=code/account/cash_new"><i class="cash"></i>提现</a>
          <a id="main-sign" onclick="bbsSign()"><i class="sign"></i>签到</a>
      </div>
<!--      <a href="/index.php?user&amp;q=code/user/create_report">
        <img src="/static/images/user/user-thrid-year.jpg" style="width: 100%;margin: 0.5rem 0">
      </a>-->
      <div class="contain-col white b-line" v-for="items of findListTitle">
          <a data-no-cache="true" href="#" class="icon-item" v-for="item of items" :key="item.id">
            <div class="icon" :class="item.class"></div>
            <div class="text">
              <h4>{{item.title}}</h4>
              <div class="user-gray">{{item.message}}</div>
            </div>
          </a>
      </div>
      <foot-guide ></foot-guide>
      <div class="occupied"></div>
    </div>
</template>

<script>
  import footGuide from '../../components/footer/footGuide'
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
      footGuide
    },
    props: [],
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
    .rating_page{
      background: #efeff4;
      color: #fff;
    .sitting{
        position: absolute;
        right: .8rem;
        top: 1rem;
        font-size: 1rem;
      }
      .head {
        background-image: url(/static/images/user/user-center-bg.jpg);
        background-size: 100% auto;
        background-position: 0 10%;
        padding: .8rem;
        .imgtitle{
          img {
            @include wh(2.2rem, 2.2rem);
            border: 0.15rem solid #f99296;
            border-radius: 50%;
            float:left;
          }
          p{
            margin-left: 2.5rem;
            line-height: 1.1rem;
          }
        }
      }
      .tab2 {
        height: 2.6rem;
        background: #fff;
        a{
          width: 50%;
          float: left;
          text-align: center;
          .title {
            height: 1.2rem;
            line-height: 1.8rem;
            color: #939393;
            font-size: .55rem;
            margin-top: .1rem;
          }
          p{
            @include sc(.7rem,#7a7a7a);
          }
        }
      }
      .tab3 {
        padding: .2rem 0 0 0;
        background: #fff;
        position: relative;
        display: flex;
        @include sc(.6rem,#333);
        a {
          flex: 1;
          text-align: center;
        }
        i {
          display: inline-block;
          width: 1.6rem;
          height: 1.6rem;
          background-image: url(/static/images/user/user-account-tab.png);
          background-size: 1.6rem;
          vertical-align: middle;
          margin-right: .1rem;
        }
      }
    }
    .contain-col{
      display: flex;
      padding: 0.5rem 0;
      .icon-item{
        display: block;
        flex:1;
        .icon {
          width: 1.6rem;
          height: 1.6rem;
          margin: 0 auto;
          background-size: 1.6rem;
          background-image: url(/static/images/user/user-center.png);
        }
        .text {
          text-align: center;
          margin-top: .2rem;
          font-size: .45rem;
          h4 {
            margin: 0;
            font-weight: 400;
            @include sc(0.6rem, #272727);
          }
        }
      }
    }
    .cash {
      background-position: 0 -1.65rem;
    }
    .sign {
      background-position: 0 -3.35rem;
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
    .user-invest-lv{
      background-image: url("/static/images/user/invest-lv.png");
      background-size: 4.6rem auto;
      height: 1rem;
    }
    .user-invest-lv.lv-1{
      background-position: 0 0;
      width: 4rem;
    }
    .user-invest-lv.lv-2{
      background-position: 0 -1rem;
      width: 4rem;
    }
    .user-invest-lv.lv-3{
      background-position: 0 -2rem;
      width: 4rem;
    }
    .user-invest-lv.lv-4{
      background-position: 0 -3rem;
      width: 4rem;

    }
    .user-invest-lv.lv-5{
      background-position: 0 -4rem;
      width: 4rem;
    }
    .user-invest-lv.lv-6{
      background-position: 0 -5rem;
      width: 4rem;
    }
    .user-invest-lv.lv-7{
      background-position: 0 -6rem;
      width: 4.4rem;
    }
    .user-invest-lv.lv-8{
      background-position: 0 -7rem;
      width: 4rem;
    }
    .user-invest-lv.lv-9{
      background-position: 0 -8rem;
      width: 4rem;
    }
    .user-invest-lv.lv-10{
      background-position: 0 -9rem;
      width: 4.4rem;
    }
    .user-invest-lv.lv-11{
      background-position: 0 -10rem;
      width: 6rem;
    }
</style>
