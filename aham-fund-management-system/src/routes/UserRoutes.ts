import Home from '../views/UserView/Home.vue'
import Portfolio from '../views/UserView/Portfolio.vue'
import PerformanceHistory from '../views/UserView/PerformanceHistory.vue'

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
  },
  {
    path: 'performance-history/:fund_id',
    component: PerformanceHistory,
    name: 'performance-history'
  }
]
