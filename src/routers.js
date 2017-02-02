import count from './components/Count.vue'
import countForNamespaced from './components/CountForNamespaced.vue'

const routers = [{
    path: '/count',
    component:count
  },
  {
    path: '/countForNamespaced',
    component:countForNamespaced
  },
  {
    path: '/*',
    redirect: '/count'
  }
]

export default routers
