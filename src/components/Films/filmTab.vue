<template>
  <ul class="columnName">
    <li @click="changeType('now-playing')" :class="{active : type === 'now-playing'}">正在热映</li>
    <li @click="changeType('coming-soon')" :class="{active : type === 'coming-soon'}">即将上映</li>
  </ul>
</template>

<script>
export default {
  name: 'filmTab',
  props: ['type', 'changeType']
}
</script>

<style scoped lang="scss">
  .columnName {
    height: .4rem;
    display: flex;
    justify-content: space-around;
    border-bottom: solid #fe6e00 1px;
    li {
      display: flex;
      align-items: center;
      width: 50%;
      justify-content: center;
      font-size: .16rem;
      color: #fe6e00;
    }
    li.active {
      border-bottom: solid #fe6e00 3px;
    }
  }
</style>
