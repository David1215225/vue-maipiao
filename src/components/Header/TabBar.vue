<template>
  <div class="tabBar">
    <div class="tabBar-left">
      <div class="nav-btn" @click="toggleNav"><i class="fas fa-list"></i></div>
      <div class="nav-title">{{title}}</div>
    </div>
    <div class="tabBar-right">
      <div class="address"><span>{{addr}}</span><i class="fas fa-angle-down"></i></div>
      <div class="tabUser" @click="goToLogin()"><i class="fas fa-user"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  props: ['toggleNav'],
  data () {
    return {
      title: '卖座电影',
      addr: '北京'
    }
  },
  created () {
    if (localStorage.title) {
      this.title = localStorage.title
    }
    this.$router.beforeEach((to, from, next) => {
      switch (to.name) {
        case 'home':
          this.title = '卖座电影'
          break
        case 'films':
          this.title = '全部影片'
          break
        case 'detail':
          this.title = '影片详情'
          break
        case 'login':
          this.title = '登陆'
          break
        case 'mine':
          this.title = '我的'
          break
      }
      localStorage.setItem('title', this.title)
      next()
    })
  },
  methods: {
    goToLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="scss">
  .tabBar {
    width: 100%;
    font-size: .12rem;
    background: #282828;
    height: .5rem;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    z-index: 9;
    .tabBar-left {
      display: flex;
      justify-content: left;
      .nav-btn {
        height: 100%;
        width: .48rem;
        border-right: 1px solid #222222;
        display: flex;
        justify-content: center;
        color: #999999;
        align-items: center;
      }
      .nav-title {
        margin-left: .05rem;
        line-height: .5rem;
        font-size: .14rem;
        color: #ffffff;
      }
    }
    .tabBar-right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: .2rem;
      color: #999999;
      font-size: .14rem;
      .address {
        margin-right: .2rem;
        display: flex;
        align-items: center;
        span {
          margin-right: .02rem;
        }
      }
    }
  }
</style>
