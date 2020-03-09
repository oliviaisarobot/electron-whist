<template lang="pug">
  div
    div.main-img.animated.swing
      img(src="../assets/images/whist.svg")
    ul.nav-list.animated.fadeIn
      li(v-for="item in navItems").nav-item
        router-link(v-if="!item.disabled" :to="{ name: item.component }").nav-link {{ item.name }}
        span(v-else).disabled {{ item.name }}
    div.version v0.7.2.
</template>

<script>
  export default {
    data () {
      return {
        navItems: [
          { name: 'New game', component: 'game-setup', disabled: false },
          { name: 'High scores', component: 'high-scores', disabled: true },
          { name: 'Rules', component: 'rules', disabled: true }
          // { name: 'Exit', component: 'rules' }
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
    padding-left: 0;
    transition: .3s ease;
  }

  .nav-link, .disabled {
    color: white;
    font-size: 26px;
    transition: .3s ease;
  }

  .disabled {
    color: #9c9c9c!important;
    opacity: .5;
  }

  .nav-link:hover {
    color: #ec008c;
  }

  .version {
    bottom: 50px;
    margin: 0 auto;
    position: absolute;
    text-align: center;
    width: 100vw;
  }
</style>
