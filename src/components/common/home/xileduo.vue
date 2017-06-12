<template lang="html">
  <route>
    <head-top :head-title="headTitle" goBack="true"></head-top>
    <div class="content">
      <home-list-out v-for="item of newGetList" :newGetList='item' :key="item.id" style="background:#fff" message="newGetList"></home-list-out>
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
            'apr': '13',
            'timeLimit': '1',
            'account': '13',
            'other': '50000'
          }, {
            'type': 'newGetList',
            'title': '喜乐多【20170610-0001】',
            'apr': '13',
            'timeLimit': '1',
            'account': '13',
            'other': '50000'
          }, {
            'type': 'newGetList',
            'title': '喜乐多【20170610-0001】',
            'apr': '13',
            'timeLimit': '1',
            'account': '13',
            'other': '50000'
          }, {
            'type': 'newGetList',
            'title': '喜乐多【20170610-0001】',
            'apr': '13',
            'timeLimit': '1',
            'account': '13',
            'other': '50000'
          }, {
            'type': 'newGetList',
            'title': '喜乐多【20170610-0001】',
            'apr': '13',
            'timeLimit': '1',
            'account': '13',
            'other': '50000'
          }, {
            'type': 'newGetList',
            'title': '喜乐多【20170610-0001】',
            'apr': '13',
            'timeLimit': '1',
            'account': '13',
            'other': '50000'
          }, {
            'type': 'newGetList',
            'title': '喜乐多【20170610-0001】',
            'apr': '13',
            'timeLimit': '1',
            'account': '13',
            'other': '50000'
          }, {
            'type': 'newGetList',
            'title': '喜乐多【20170610-0001】',
            'apr': '13',
            'timeLimit': '1',
            'account': '13',
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
<style lang="scss" scoped>
  @import 'src/style/mixin';
</style>
