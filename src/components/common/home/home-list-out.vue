<template lang="html">
  <router-link to="/product" data-no-cache="true" :class="classObject">
      <div class="invest-item-title">
        <span class="transfer-icon"></span>
        {{title}}
        <span v-if="strTitle">{{strTitle}}</span>
        <button v-if="message == 'newGetList'" class="invest-item-status"></button>
      </div>
      <div class="flex-box">
        <div>
          <span class="num Montserrat">{{apr}}<span v-if="aprAdd">+{{aprAdd}}</span></span>
          <p class="user-gray">{{strApr}}</p>
        </div>
        <div>
          <span class="Montserrat">{{timelimit}}</span>
          <p class="user-gray">{{strTimeLimit}}</p>
        </div>
        <div v-if="message != 'claim'" class="invest-item-account">
          <span class="Montserrat">{{other}}</span>
          <p class="user-gray">{{strOther}}</p>
        </div>
      </div>
  </router-link>
</template>
<script>
  import axios from 'axios'
  export default {
    props: ['message', 'newGetList'],
    data () {
      return {
        isActive: false,
        home: null,
        title: null,
        strTitle: null,
        apr: true,
        aprAdd: null,
        strApr: null,
        timelimit: null,
        strTimeLimit: null,
        other: null,
        strOther: null,
        account: null,
        strAccount: null
      }
    },
    mounted () {
      this.initData()
    },
    methods: {
      async initData () {
        axios.get('static/data.json').then((res) => {
          this.home = res.data.home
          if (this.message === 'newType') {
            this.title = this.home.newdata.title
            this.strTitle = this.home.newStatic.title
            this.apr = this.home.newStatic.aprVulue
            this.aprAdd = this.home.newStatic.aprAdd
            this.strApr = this.home.newStatic.apr
            this.timelimit = this.home.newStatic.timeLimitVulue
            this.strTimeLimit = this.home.newStatic.timeLimit
            this.isActive = true
          } else if (this.message === 'claim') {
            this.title = this.home.claimStatic.titleValue
            this.strTitle = this.home.claimStatic.title
            this.apr = this.home.claimStatic.apr
            this.strApr = this.home.claimStatic.aprVulue
            this.timelimit = this.home.claimStatic.timeLimitVulue
            this.strTimeLimit = this.home.claimStatic.timeLimit
          } else if (this.message === 'newGetList') {
            this.title = this.newGetList.title
            this.apr = this.newGetList.apr
            this.strApr = this.home.newGetListStatic.apr
            this.timelimit = this.newGetList.timeLimit
            this.strTimeLimit = this.home.newGetListStatic.timeLimit
            this.account = this.newGetList.account
            this.other = this.newGetList.other
            this.strOther = this.home.newGetListStatic.other
            this.strAccount = this.home.newGetListStatic.account
          } else {
            console.log('参数类型错误')
          }
        })
      }
    },
    computed: {
      classObject: function () {
        return {
          'b-line': this.isActive,
          'invest-item': true
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import 'src/style/font';
  .invest-item-title {
    margin-top: .2rem;
    font-size: 0.65rem;
  }
  .invest-item-status {
    position: absolute;
    right: .5rem;
    font-size: .5rem;
    font-family: Montserrat,'Microsoft YaHei','Heiti SC',simhei,'Lucida Sans Unicode','Myriad Pro','Hiragino Sans GB',Verdana;
    border: 1px solid #fa5551;
    color: #fa5551;
    padding: 0rem .15rem;
    border-radius: .1rem;
    margin-top: 0.1rem;
    background: #fff;
  }
  .invest-item{
    position: relative;
    display: block;
    padding: .4rem .7rem .7rem .7rem;
  }
  .p5{
    padding: .5rem!important;
  }
  .b-line:after {
    content: "";
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 1px;
    -webkit-transform: scale(1,0.5);
    background: #eaeaea;
  }
  .flex-box{
    display: flex;
  }
  .flex-box>div{
    display: flex;
    -webkit-box-flex: 4;
    -ms-flex: 4;
    flex: 4;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 0.4rem;
    height: 3rem;
    font-size: 0.9rem;
    span{
      line-height: 1.92rem;
      font-size: 0.9rem;
    }
    .num {
         font-weight: 300;
         font-size: 1.3rem;
         color: #ee494d;
         height: 1.92rem;
         line-height: 1.62rem;
      span{
        color: #ee494d;
      }
    }
  }
</style>
