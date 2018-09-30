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
      </div>
      <div class="date">{{film.premiereAt | date(true)}}</div>
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
  .filmItem {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    margin-bottom: .1rem;
    img {
      width: 100%;
    }
    .filmDetail {
      display: flex;
      justify-content: space-between;
      padding: .1rem;
      .filmTitle {
        display: flex;
        flex-direction: column;
        .name, .people {
          font-size: .14rem;
        }
        .people {
          color: #9a9a9a;
          font-size: .12rem;
        }
      }
      .num {
        font-size: .18rem;
        color: #f78360;
        line-height: .34rem;
      }
      .date {
        display: flex;
        font-size: .14rem;
        align-items: center;
        color: #f78360;
      }
    }
  }
</style>
