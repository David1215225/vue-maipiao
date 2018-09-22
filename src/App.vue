<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import appHeader from './components/Header/Header'
export default {
  name: 'App',
  components: {appHeader}
}
</script>

<style scoped lang="scss">
</style>
