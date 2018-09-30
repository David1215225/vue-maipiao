<template>
  <div v-infinite-scroll="loadMore"
       infinite-scroll-disabled="loading"
       infinite-scroll-distance="10">
    <film-item :type="type" v-for="(film,index) in films" :key="index" :film="film"></film-item>
  </div>
</template>

<script>
import filmItem from './filmItem'
import axios from 'axios'
import config from '../../modules/'
import { Indicator, Toast } from 'mint-ui'

export default {
  name: 'filmContent',
  components: {filmItem},
  props: ['type'],
  data () {
    return {
      films: [],
      isHasFilms: false,
      page: 1,
      count: 7,
      loading: false, // 无限加载开关
      hasMore: true //  是否还有数据开关
    }
  },
  methods: {
    loadMore () {
      this.getFilms()
    },
    getFilms () {
      if (!this.hasMore) {
        Toast({
          message: '没有更多数据了',
          position: 'bottom',
          duration: 1500
        })
        return
      }
      // 加载数据
      Indicator.open({
        spinnerType: 'snake'
      })
      axios.get(config.host + 'mz/v4/api/film/' + this.type, {
        params: {
          page: this.page,
          count: this.count
        }
      }).then(res => {
        Indicator.close()
        if (res.data.status === 0 && res.data.data.films.length > 0) {
          this.films = this.films.concat(res.data.data.films)
          this.hasMore = Boolean(!(res.data.data.page.current === res.data.data.page.total))
          this.page += this.hasMore ? 1 : 0
          this.loading = false
          this.isHasFilms = true
        } else {
          this.isHasFilms = false
        }
      })
    },
    getInitFilms (type) {
      this.page = 1
      this.hasMore = true
      this.type = type
      this.count = 7
      this.films = []
      this.getFilms()
    }
  },
  created () {
    this.getFilms()
  },
  watch: {
    type (newType) {
      this.getInitFilms(newType)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
