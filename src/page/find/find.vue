 <template>
    <div>
      <div class="block">
        <a href="#">
          <icon name="message" scale="1.6" style="vertical-align: text-bottom"></icon>&nbsp&nbsp最新项目预告: 不断更新中
        </a>
      </div>
      <swiper :options="swiperOption" ref="mySwiper" class="mt5">
        <swiper-slide v-for="item of find.swiperImg" :key="item.id">
          <a href="#"><img class="lazy-img" width="280" :src="item" /></a>
        </swiper-slide>
      </swiper>
      <a href="#" class="block mt5">
        <div class="find-midea-img">
          <img  :src="find.mesImg" width="100%">
        </div>
        <div style="font-size: .8rem">喜投网董事长黄生做客CCTV2财经频道《市场分析室》</div>
      </a>
      <div class="list-block mt5">
        <listIcon :data="find.listDate"></listIcon>
      </div>
      <foot-guide style="margin-top:1rem"></foot-guide>
    </div>
</template>

<script>
import axios from 'axios'
import footGuide from '../../components/footer/footGuide'
import listIcon from '../../components/common/list-icon.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      find: {},
      swiperOption: {
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 30
      }
    }
  },
  components: {
    footGuide,
    listIcon,
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
  @import 'src/style/font';

  .block {
  padding: 0.5rem;
  background: #fff;
  display: block;
}
.swiper-slide {
  width: initial;
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
.mt5 {
  margin-top: .5rem;
}
.list-block {
  margin: 0;
  margin-top: .5rem;
  background: #fff;
  font-size: 0.7rem;
}
  .user-invest-lv{
    background-image: url("/static/m/images/icon/invest-lv.png");
    background-size: 6rem auto;
    height: 1.3rem;
  }
</style>
