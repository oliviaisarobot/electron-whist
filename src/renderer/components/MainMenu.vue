<template lang="pug">
  div
    div.main-img.animated.swing
      img(src="../assets/images/whist.svg")
    ul.nav-list
      li(v-for="item in navItems").nav-item
        router-link(:to="{ name: item.component }").nav-link {{ item.name }}
</template>

<script>
  export default {
    data () {
      return {
        navItems: [
          { name: 'New game', component: 'game-setup' },
          { name: 'High scores', component: 'high-scores' },
          { name: 'Rules', component: 'rules' }
        ]
      }
    }
  }
</script>

<style>
  .main-img {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }

  .nav-list {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    margin-top: 50px;
  }

  .nav-link {
    color: white;
    font-size: 18px;
  }
</style>
