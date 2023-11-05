import Home from '../views/UserView/Home.vue'
import Portfolio from '../views/UserView/Portfolio.vue'

export default [
  {
    path: '',
    component: Home,
    name: 'home'
  },
  {
    path: 'portfolio',
    component: Portfolio,
    name: 'portfolio'
  }
]
