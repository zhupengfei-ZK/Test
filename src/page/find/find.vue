 <template>
    <div>
      <div class="lh18 pl5 white rem-65" style="margin-top: 0">
          <i class="el-icon-message"></i>&nbsp&nbsp最新项目预告: 不断更新中
      </div>
      <swiper :options="swiperOption" ref="mySwiper" class="mt5">
        <swiper-slide v-for="item of find.swiperImg" :key="item.id">
          <img class="lazy-img" width="280" :src="item" />
        </swiper-slide>
      </swiper>
      <div class="find-midea-img block">
        <img src="../../../static/images/find/find-midea-2.png" width="100%">
        <div class="rem-7">喜投网董事长黄生做客CCTV2财经频道《市场分析室》</div>
      </div>
      <div class="list-block mt5 tc">
        <el-row class="lh18" v-for="item of listDate" :key="item.id">
          <el-col :span="3"><i :class="item.icon" class="red fw5"></i></el-col>
          <el-col :span="18" class="b-line"><div class="tl rem-6">{{item.text}}</div></el-col>
          <el-col :span="3" class="b-line"><i class="el-icon-last"></i></el-col>
        </el-row>
      </div>
      <div class="occupied"></div>
      <foot-guide style="margin-top:1rem"></foot-guide>
    </div>
</template>

<script>
import axios from 'axios'
import footGuide from '../../components/footer/footGuide'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      find: {},
      swiperOption: {
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 30
      },
      listDate: [
        {'icon': 'el-icon-collect', 'text': '了解喜投网'},
        {'icon': 'el-icon-liebiao', 'text': '黄生专栏'},
        {'icon': 'el-icon-kefu', 'text': '在线QQ客服'},
        {'icon': 'el-icon-dianhua', 'text': '客服热线'},
        {'icon': 'el-icon-wenhao', 'text': '帮助中心'}
      ]
    }
  },
  components: {
    footGuide,
    swiper,
    swiperSlide
  },
  created () {
    this._init()
  },
  methods: {
    _init () {
      axios.get('static/data.json').then((res) => {
        this.find = res.data.find
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';

.swiper-slide {
  width: initial;
}
.mt5 {
  margin-top: .5rem;
}
.list-block {
  margin: 0;
  margin-top: .5rem;
  background: #fff;
  font-size: 0.7rem;
}
  .block{
    padding: 0.5rem;
  }
</style>
