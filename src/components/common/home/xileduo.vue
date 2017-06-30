<template lang="html">
  <route>
    <head-top :head-title="headTitle" goBack="true"></head-top>
    <div class="content pc5 white">
      <home-list-out v-for="item of newGetList" :newGetList='item' class="b-line" :key="item.id" message="newGetList"></home-list-out>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </route>
</template>
<script>
  import route from '../route'
  import homeListOut from './home-list-out'
  import headTop from '../../header/head.vue'

  export default {
    data () {
      return {
        'headTitle': '喜乐多',
        'newGetList': [
          {
            'type': 'newGetList',
            'title': '喜乐多【20170610-0001】',
            'apr': '9.8',
            'timeLimit': '1',
            'account': '9.8',
            'time': '01-25 11:00 开启手动',
            'other': '50000'
          }, {
            'type': 'newGetList',
            'title': '喜乐多【20170610-0001】',
            'apr': '9.8',
            'timeLimit': '1',
            'account': '9.8',
            'time': '01-25 11:00 开启手动',
            'other': '50000'
          }, {
            'type': 'newGetList',
            'title': '喜乐多【20170610-0001】',
            'apr': '9.8',
            'timeLimit': '1',
            'account': '9.8',
            'time': '01-25 11:00 开启手动',
            'other': '50000'
          }, {
            'type': 'newGetList',
            'title': '喜乐多【20170610-0001】',
            'apr': '9.8',
            'timeLimit': '1',
            'account': '9.8',
            'time': '01-25 11:00 开启手动',
            'other': '50000'
          }, {
            'type': 'newGetList',
            'title': '喜乐多【20170610-0001】',
            'apr': '9.8',
            'timeLimit': '1',
            'account': '9.8',
            'time': '01-25 11:00 开启手动',
            'other': '50000'
          }, {
            'type': 'newGetList',
            'title': '喜乐多【20170610-0001】',
            'apr': '9.8',
            'timeLimit': '1',
            'account': '9.8',
            'time': '01-25 11:00 开启手动',
            'other': '50000'
          }, {
            'type': 'newGetList',
            'title': '喜乐多【20170610-0001】',
            'apr': '9.8',
            'timeLimit': '1',
            'account': '9.8',
            'time': '01-25 11:00 开启手动',
            'other': '50000'
          }, {
            'type': 'newGetList',
            'title': '喜乐多【20170610-0001】',
            'apr': '9.8',
            'timeLimit': '1',
            'account': '9.8',
            'time': '01-25 11:00 开启手动',
            'other': '50000'
          }
        ]
      }
    },
    components: {
      route,
      homeListOut,
      headTop
    }
  }
</script>
