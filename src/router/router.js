import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import store from '../store'

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
// })

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior: () => ({ y: 0 }),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  store.commit('GlobalModule/SET_LOADER_FULL_PAGE', true)
  next()
})

router.afterEach(() => {
  const timeLoaderFullPage = store.state.GlobalModule.loader.startPage
    ? 2800
    : 800

  setTimeout(() => {
    store.commit('GlobalModule/SET_LOADER_FULL_PAGE', false)
  }, timeLoaderFullPage)
})

export default router
