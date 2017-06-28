<template lang="html">
  <router-link to="/product" data-no-cache="true" class="invest-item">
      <div class="title">
        <slot name="titleicon"></slot> {{title}} <slot name="titleGray"></slot>
        <button v-if="message == 'newGetList'&&time" class="item-botton">{{time}}</button>
      </div>
        <div class="flex-box">
          <div><div class="num Montserrat">{{apr}}<span v-if="aprAdd">+{{aprAdd}}</span></div></div>
          <div class="Montserrat">{{timelimit}}</div>
          <div class="Montserrat">{{other}}</div>
        </div>
        <div class="flex-box">
          <div class="user-gray">{{strApr}}</div>
          <div class="user-gray">{{strTimeLimit}}</div>
          <div class="user-gray">{{strOther}}
          <div v-if="message != 'claim'" class="invest-item-account">
            <div v-if="message == 'newType'" class="invest-newcome-btn" >
              立即加入
            </div>
            <div v-if="message == 'newType'" :style="newicon" class="invest-newcome-icon" ></div>
          </div>
          </p>
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
        apr: true,
        aprAdd: null,
        strApr: null,
        timelimit: null,
        strTimeLimit: null,
        other: null,
        strOther: null,
        account: null,
        time: null,
        strAccount: null,
        newicon: {
          backgroundImage: 'url(' + require('../../../../static/images/home/index-newcome.png') + ')',
          backgroundSize: '1.9rem'
        }
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
            this.apr = this.home.newStatic.aprVulue
            this.aprAdd = this.home.newStatic.aprAdd
            this.strApr = this.home.newStatic.apr
            this.timelimit = this.home.newStatic.timeLimitVulue
            this.strTimeLimit = this.home.newStatic.timeLimit
          } else if (this.message === 'claim') {
            this.title = this.home.claimStatic.titleValue
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
            this.time = this.newGetList.time
            this.strOther = this.home.newGetListStatic.other
            this.strAccount = this.home.newGetListStatic.account
          } else {
            console.log('参数类型错误')
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import 'src/style/mixin';
  .title {
    margin-top: .2rem;
    font-size: 0.58rem;
  }
  .item-botton {
    position: absolute;
    right: .5rem;
    font-size: .45rem;
    font-family: Montserrat,'Microsoft YaHei','Heiti SC',simhei,'Lucida Sans Unicode','Myriad Pro','Hiragino Sans GB',Verdana;
    border: 1px solid #fa5551;
    color: #fa5551;
    padding: 0rem .15rem;
    border-radius: .1rem;
    margin-top:0.06rem;
    background: #fff;
  }
  .invest-item{
    position: relative;
    display: block;
    padding: .5rem;
  }
  .invest-newcome-btn {
    border: 1px solid #fb4945;
    width: 3.3rem;
    height: 1.3rem;
    line-height: 1.3rem;
    border-radius: .7rem;
    font-size: .5rem;
    text-align: center;
    color: #fb4945;
    margin-top: -.9rem;
    position: relative;
    z-index: 2;
    background: #fff;
  }
  .invest-newcome-icon{
    position: absolute;
    top: 1.8rem;
    right: 1rem;
    background-position: 0 -1rem;
    width: 1.9rem;
    height: 1.3rem;
    z-index: 1;
  }
  .flex-box{
    display: flex;
    .num {
      font-weight: 300;
      font-size: 1.2rem;
      color: #ee494d;
      height: 1.2rem;
      line-height: 0.8rem;
      span {
        color: #ee494d;
        font-size: 0.8rem;
      }
    }
    .user-gray{
      font-size: 0.5rem;
      margin-top: 0;
      line-height: 0.9rem;
    }
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
    margin-top: 0.8rem;
    font-size: 0.8rem;
  }
</style>
