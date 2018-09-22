<template>
  <div class="app-nav">
    <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
      <nav class="tabNav" v-show="isShow">
        <ul>
          <li v-for="column in columns" :key="column.id" @click="toggleNav"><a href="#">{{column.name}}<i class="fas fa-angle-right"></i></a>
          </li>
        </ul>
      </nav>
    </transition>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="mark" v-show="isShow" @click="toggleNav"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TabNav',
  props: ['isShow', 'toggleNav'],
  data () {
    return {
      columns: [
        {id: 1, name: '首页'},
        {id: 2, name: '影片'},
        {id: 3, name: '影院'},
        {id: 4, name: '商城'},
        {id: 5, name: '我的'},
        {id: 6, name: '卖座卡'}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .app-nav {
    .tabNav {
      position: absolute;
      top: .5rem;
      right: 1.1rem;
      left: 0;
      bottom: 0;
      background: #282828;
      width: 2.65rem;
      height: 100%;
      border-top: 1px solid #222222;
      animation-duration: 0.5s;
      z-index: 3;
      ul {
        display: flex;
        flex-direction: column;
        justify-content: left;
        li {
          height: .45rem;
          border-bottom: 1px solid #222222;
          line-height: .45rem;
          a {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #999999;
            padding: 0 .1rem;
            font-size: .16rem;
            font-weight: 400;
            svg {
              color: #666666;
              font-weight: normal;
            }
          }
        }
      }
    }
    .mark{
      position: absolute;
      top: 0;
      left: 0;
      z-index:2;
      width: 100%;
      background: rgba(0,0,0,0.5);
      animation-duration: 0.5s;
      height: 100%;
    }
  }
</style>
