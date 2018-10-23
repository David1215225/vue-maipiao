<template>
  <section class="swiper-container" v-if="isBanner">
    <div class="swiper-container app-home-banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="billboard in billboards" :key="billboard.id">
          <router-link to="#">
            <img :src="billboard.imageUrl" width="100%" alt="" :title="billboard.name">
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper'
import {mapState, mapActions} from 'vuex'
import {GET_BILLBOARDS} from '../../store/const'

export default {
  name: 'appBanner',
  methods: {
    ...mapActions([GET_BILLBOARDS])
  },
  computed: {
    ...mapState({
      'billboards': state => state.billboards,
      'isBanner': state => state.isBanner
    })
  },
  created () {
    this[GET_BILLBOARDS]()
  },
  updated () {
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: true
    })
  }
}
</script>

<style scoped lang="scss">
  .swiper-container{
    /*height: 2.4rem;*/
  }
</style>
