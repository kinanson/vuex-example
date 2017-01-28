import count from './components/Count.vue'

const routers = [{
    path: '/count',
    component:count
  },
  {
    path: '/*',
    redirect: '/count'
  }
]

export default routers
