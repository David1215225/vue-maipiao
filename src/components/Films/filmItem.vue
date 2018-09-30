<template>
  <section class="filmItem">
    <ul>
      <li>
        <img :src="film.poster.thumbnail" alt="">
        <section class="detail">
          <section class="detailName">
            <nav>{{film.name}}</nav>
            <section>{{film.grade}}</section>
          </section>
          <section class="detailInfo">{{film.intro}}</section>
          <section class="detailMany" v-if="type === 'now-playing'">
            <span>{{film.cinemaCount}}</span>家影院上映
            <span>{{film.watchCount}}</span>人购票
          </section>
          <section class="detailDay" v-else>
            <span>{{film.premiereAt | date(true)}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{film.premiereAt | day}}</span>
          </section>
        </section>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'filmItem',
  props: ['type', 'film']
}
</script>

<style scoped lang="scss">
  section.filmItem {
    border-bottom: dashed 1px #c9c9c9;
    ul {
      li {
        display: flex;
        font-size: .14rem;
        padding: .2rem 0;
        img {
          width: .6rem;
          height: .8rem;
        }
        .detail {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding-left: .2rem;
          font-size: .12rem;
          justify-content: space-between;
          .detailName {
            display: flex;
            justify-content: space-between;
            section {
              color: #fe6e00;
            }
          }
          .detailInfo, .detailMany {
            color: #8e8e8e;
            span {
              color: #8aa2bf;
            }
          }
          .detailDay {
            color: #ffb375;
          }
        }
      }
    }
  }
</style>
