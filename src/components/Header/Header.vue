<template>
    <header class="appHeader">
      <tab-bar :isShow="isShow" :toggleNav="toggleNav"></tab-bar>
      <tab-nav :isShow="isShow" :toggleNav="toggleNav"></tab-nav>
    </header>
</template>

<script>
import TabBar from './TabBar'
import TabNav from './TabNav'
export default {
  name: 'appHead',
  components: {TabBar, TabNav},
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    toggleNav () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped lang="scss">
</style>
