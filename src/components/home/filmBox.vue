<template>
    <section>
      <film-item :type="info.type" :film="film" v-for="film in films" :key="film.id"></film-item>
      <div class="more-button">更多{{info.title}}电影</div>
    </section>
</template>

<script>
import filmItem from './filmItem'
import axios from 'axios'
import config from '../../modules'
export default {
  name: 'filmBox',
  props: ['info'],
  components: {filmItem},
  data () {
    return {
      films: []
    }
  },
  methods: {
    getFilms () {
      axios.get(config.host + 'mz/v4/api/film/' + this.info.url, {
        params: {
          __t: Date.now(),
          count: this.info.count,
          page: 1
        }
      }).then(res => {
        this.films = res.data.data.films
      })
    }
  },
  created () {
    this.getFilms()
  }
}
</script>

<style scoped lang="scss">

</style>
