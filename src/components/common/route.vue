 <template>
     <transition name="move">
         <div class="detailWrapper">
             <slot></slot>
         </div>
     </transition>
</template>

<script>
  export default {

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
        top: 0;
        bottom: 0;
        width: 100%;
        background: #efeff4;
        z-index: 110;
        transition: all 0.4s ease;
        overflow: auto;
    }
    .bottom0{
        bottom: 48px;
    }
</style>
