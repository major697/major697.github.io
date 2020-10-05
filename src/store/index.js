import { createStore } from 'vuex'
import GlobalModule from './modules/global'

export default createStore({
  modules: {
    GlobalModule,
  },
})
