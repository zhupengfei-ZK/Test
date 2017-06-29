 <template>
   <div class="rem-6">
     <div class="title-tab">
       <div class="box">
         <el-tabs type="border-card" @tab-click="topics">
           <el-tab-pane>
             <span slot="label" class="tab">看帖</span>
           </el-tab-pane>
           <el-tab-pane>
             <span slot="label" class="tab">我</span>
           </el-tab-pane>
         </el-tabs>
         <div class="bg" :style="{left:Left}"></div>
       </div>
     </div>
     <div class="content">
       <el-tabs v-model="activeName" class="white">
         <el-tab-pane label="推荐" name="1">
           <div class="conbox">
             <div class="tc p5">
               <el-button type="warning"><i class="el-icon-star"></i> 请先设置论坛昵称</el-button>
             </div>
             <div class="list white">
               <p v-for="item of bbs.listDate" :key="item.id" class="lh18 b-line pc5">
                 <i>{{item.botton}}</i> &nbsp{{item.text}}
               </p>
             </div>
             <div class="item p5 white mt5">
               <p class="title"> &nbsp本周话题</p>
               <swiper :options="swiperOption" ref="mySwiper" class="mt5">
                 <swiper-slide>
                   <div class="box">
                     <img class="icon-swiper" src="https://xitouwang-upload.b0.upaiyun.com/avatar/middle_4c49f2fd27f84dee363349570c38bd51.jpg" alt="《关于论坛内一些纯灌水帖子的建议看法》" title="《关于论坛内一些纯灌水帖子的建议看法》">
                     <div><span>《关于论坛内一些纯灌水帖子的建议看法》</span></div>
                     <p class="user-gray">风轻云淡1579</p>
                     <el-button>查看</el-button>
                   </div>
                 </swiper-slide>
                 <swiper-slide>
                   <div class="box">
                     <img class="icon-swiper" src="https://xitouwang-upload.b0.upaiyun.com/avatar/middle_f22e3f73b2f2fbc7f00c3322d862d928.jpg" alt="孩子与父亲：宝贝，让我们永远在一起" title="孩子与父亲：宝贝，让我们永远在一起">
                     <div><span>孩子与父亲：宝贝，让我们永远在一起</span></div>
                     <p class="user-gray">恭喜发财</p>
                     <el-button>查看</el-button>
                   </div>
                 </swiper-slide>
                 <swiper-slide>
                   <div class="box">
                     <img class="icon-swiper" src="https://xitouwang-upload.b0.upaiyun.com/avatar/middle_b7d98f129f2129b8c20abc0cfaba723b.jpg" alt="孩子与父亲：感恩的心，思念的河！" title="孩子与父亲：感恩的心，思念的河！">
                     <div><span>孩子与父亲：感恩的心，思念的河！</span></div>
                     <p class="user-gray">lhw_89</p>
                     <el-button>查看</el-button>
                   </div>
                 </swiper-slide>
                 <swiper-slide>
                   <div class="box">
                     <img class="icon-swiper" src="https://xitouwang-upload.b0.upaiyun.com/avatar/middle_ae6ab105b9b874b579c1bf03ed6f2fe2.jpg" alt="孩子/父亲，让我们成为一家人" title="孩子/父亲，让我们成为一家人">
                     <div><span>孩子/父亲，让我们成为一家人</span></div>
                     <p class="user-gray">星语心愿</p>
                     <el-button>查看</el-button>
                   </div>
                 </swiper-slide>
               </swiper>
             </div>
             <div class="item p5 white mt5">
                <p class="title"> &nbsp本周话题</p>
                <div class="talk imgli">#大学时学的专业和未来的前途关系大吗？#</div>
             </div>
             <div class="item p5 white mt5">
                <p class="title"> &nbsp本周话题</p>
                <div class="red imgli"></div>
             </div>
           </div>
         </el-tab-pane>
         <el-tab-pane label="最新" name="2">

         </el-tab-pane>
         <el-tab-pane label="精华" name="3">

         </el-tab-pane>
         <el-tab-pane label="热门" name="4">

         </el-tab-pane>
       </el-tabs>
     </div>
     <div class="occupied"></div>
     <foot-guide ></foot-guide>
   </div>
</template>

<script>
  import axios from 'axios'
  import footGuide from '../../components/footer/footGuide'
  export default {
    data () {
      return {
        bbs: {},
        activeName: '1',
        tabData: ['推荐', '最新', '精华', '热门'],
        Left: '0',
        swiperOption: {
          slidesPerView: 'auto',
          paginationClickable: true
        }
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
      footGuide
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
        color: #fff;
        .tab{
          display: block;
          line-height: 1.2rem;
        }
      }
    }
    .content{
      margin-top:2.2rem;
      .conbox{
        background:#efefef;
        .list i{
          border: 1px solid #52b7ff;
          color: #52b7ff;
          font-size: 0.5rem;
          padding: 0 0.1rem;
          line-height: 0;
        }
        .item {
          .swiper-slide {
            width: initial;
          }
          .swiper-slide:last-child .box{
            margin-right: 0;
          }
          .title{
            border-left: 0.1rem solid #ef494d;
            height: 0.6rem;
            line-height: 0.7rem;
            margin-bottom: 0.5rem;
          }
          .box{
            width: 6rem;
            height: 8rem;
            padding: 0.6rem;
            text-align: center;
            border-radius: 0.25rem;
            display: block!important;
            box-shadow: 1px 1px 3px #ececec;
            margin: 0 0.5rem 0.2rem 0;
            border: solid 1px #ececec;
            img{
              width: 2.2rem;
              height: 2.2rem;
              border-radius: 1.5rem;
              display: block;
              margin: 0 auto;
            }
            div {
              padding: 0.4em 0;
              height: 1.9rem;
              overflow: hidden;
              span{
                font-size: 0.6rem;
                display: table-cell;
                vertical-align: middle;
                width: 5.1rem;
                height: 1.9rem;
              }
            }
            p{
              margin: 0.4em 0;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            button{
              color: #FF4B4A;
              height: 1rem;
              margin-top: 0.3rem;
              width: 100%;
              padding: 0;
              border-color: #FF4B4A;
            }
          }
          .talk {
            background-image: url(/static/images/bbs/bbs-week.png);
            background-size: 100%;
          }
          .imgli {
            margin-top: .3rem;
            width: 100%;
            height: 2.5rem;
            text-align: center;
            line-height: 2.5rem;
            color: #fff;
          }
          .red{
            background-image: url(/static/images/bbs/bbs-index-reds.png);
            background-size: 100%;
          }
        }
      }
    }
</style>
