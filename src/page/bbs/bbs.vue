 <template>
     <div>
       <div class="title-tab">
         <div class="box">
           <el-tabs type="border-card" v-model="activeName"  @tab-click="topics">
             <el-tab-pane name="first">
               <span slot="label" class="tab">看帖</span>
             </el-tab-pane>
             <el-tab-pane name="second">
               <span slot="label" class="tab">我</span>
             </el-tab-pane>
           </el-tabs>
           <div class="bg" :style="{left:Left}"></div>
         </div>
       </div>
         <!--<tabTwo></tabTwo>-->
         <el-tabs v-model="activeName2">
           <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
           <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
           <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
           <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
         </el-tabs>
         <foot-guide ></foot-guide>
     </div>
</template>

<script>
  import axios from 'axios'
  import footGuide from '../../components/footer/footGuide'
  import tabTwo from '../../components/common/tab-two'
  export default {
    data () {
      return {
        bbs: {},
        activeName: 'first',
        activeName2: 'first',
        tabData: ['推荐', '最新', '精华', '热门'],
        Left: '0'
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
      },
      topics (event) {
        if (this.Left === '0') {
          this.Left = '2.8rem'
        } else {
          this.Left = '0'
        }
      }
    },
    components: {
      footGuide,
      tabTwo
    }
  }
</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';
    .title-tab {
      top: 0;
      height: 2rem;
      background: #ef494d;
      position: fixed;
      width: 100%;
      z-index: 10;
      .bg {
        top: -.05rem;
        width: 3.65rem;
        height: 1.2rem;
        position: absolute;
        text-align: center;
        border-radius: 1rem;
        z-index: -1;
        background: #fff;
        transition:left .2s;
      }
      .box{
        width: 6.5rem;
        height: 1.2rem;
        line-height: 1.2rem;
        border: 1px solid #fff;
        border-radius: 1rem;
        margin: 0.45rem auto;
        position: relative;
        overflow: hidden;
        font-size: .6rem;;
        color: #fff;
        .tab{
          display: block;
          line-height: 1.2rem;
        }
      }
    }
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
