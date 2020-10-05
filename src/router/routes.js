const project = 'Portfolio'

export default [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "Home" */ '@/views/HomeView.vue'),
    meta: {
      title: `${project} - Home`,
      showMenu: false,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "About" */ '@/views/AboutView.vue'),
    meta: {
      title: `${project} - About`,
      nameMenu: 'About',
      showMenu: true,
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(
        /* webpackChunkName: "Contact" */ '@/views/ContactView.vue'
      ),
    meta: {
      title: `${project} - Contact`,
      nameMenu: 'Contact',
      showMenu: true,
    },
  },
]
