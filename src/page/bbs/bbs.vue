 <template>
     <!--<transition name="move">-->
     <!--<div class="detailWrapper">-->
     <div>
         <tabTwo></tabTwo>
         <tabButton :tabData="tabData" style="margin-top: 2.5rem"></tabButton>
         <listIcon :data="bbs.listDate"></listIcon>
         <foot-guide></foot-guide>
     </div>
     <!--</transition>-->
</template>

<script>
  import axios from 'axios'
  import footGuide from '../../components/footer/footGuide'
  import tabButton from '../../components/common/tab-button'
  import tabTwo from '../../components/common/tab-two'
  import listIcon from '../../components/common/list-icon.vue'

  export default {
    data () {
      return {
        bbs: {},
        tabData: ['推荐', '最新', '精华', '热门']
      }
    },
    created () {
      this._init()
    },
    methods: {
      _init () {
        axios.get('static/data.json').then((res) => {
          this.bbs = res.data.bbs
        })
      }
    },
    components: {
      footGuide,
      tabButton,
      tabTwo,
      listIcon
    }
  }
</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
    .move-enter-avtive,.move-leave-active{
       transform: translate3d(0,0,0)
    }
    .move-enter,.move-leave-active{
        transform: translate3d(100%,0,0)
    }
    .detailWrapper{
        position: fixed;
        left: 0;
        top: 0;
        bottom: 48px;
        width: 100%;
        background: white;
        transition: all 0.4s ease;
    }
</style>
