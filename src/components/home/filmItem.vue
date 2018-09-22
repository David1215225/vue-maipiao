<template>
  <div class="filmItem">
    <img :src="film.cover.origin" alt="">
    <section v-if="type === 'playing'" class="filmDetail" type="playing">
      <div class="filmTitle">
        <span class="name">{{film.name}}</span>
        <span class="people">{{film.cinemaCount}}家影院上映 {{film.watchCount}}人购票</span>
      </div>
      <div class="num">{{film.grade}}</div>
    </section>
    <section v-if="type === 'coming'" class="filmDetail" type="coming">
      <div class="filmTitle">
        <span class="name">{{film.name}}</span>
        <span class="people">{{film.cinemaCount}}家影院上映 {{film.watchCount}}人购票</span>
      </div>
      <div class="num">{{film.grade}}</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'filmItem',
  props: ['type', 'film']
}
</script>

<style scoped lang="scss">
  .filmItem{
    background: #ffffff;
    img{
      width: 100%;
    }

  }
</style>
