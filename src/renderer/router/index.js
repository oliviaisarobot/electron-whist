import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-menu',
      component: require('@/components/MainMenu').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: 'game/setup',
      name: 'game-setup',
      component: require('@/components/game/Setup').default
    },
    {
      path: 'settings/highscores',
      name: 'high-scores',
      component: require('@/components/settings/HighScores').default
    },
    {
      path: 'settings/rules',
      name: 'rules',
      component: require('@/components/settings/Rules').default
    }
  ]
})
