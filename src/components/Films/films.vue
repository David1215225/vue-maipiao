<template>
  <main>
    <film-tab :type="type" :changeType="changeType"></film-tab>
    <film-content :type="type"></film-content>
  </main>
</template>

<script>
import filmTab from './filmTab'
import filmContent from './filmContent'
export default {
  name: 'films',
  data () {
    return {
      type: 'now-playing'
    }
  },
  components: {filmTab, filmContent},
  methods: {
    changeType (type) {
      this.type = type
    }
  }
}
</script>

<style scoped lang="scss">
  main {
    padding: 0 .1rem;
    background: #ffffff;
  }
</style>
