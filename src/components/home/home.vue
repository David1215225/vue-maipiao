<template>
  <div class="container">
    <app-banner></app-banner>
    <div class="film-list">
      <film-box :info="filmBox.info" v-for="filmBox in filmBoxs" :key="filmBox.id"></film-box>
    </div>
  </div>
</template>

<script>
import appBanner from './appBanner'
import filmBox from './filmBox'

export default {
  name: 'home',
  components: {appBanner, filmBox},
  data () {
    return {
      filmBoxs: [
        {id: 1, info: {url: 'now-playing', type: 'playing', count: 5, title: '正在热映'}},
        {id: 2, info: {url: 'coming-soon', type: 'coming', count: 3, title: '即将上映'}}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    padding-top: .5rem;
    .film-list {
      margin-top: .2rem;
      padding: 0 .2rem;
    }
  }
</style>
