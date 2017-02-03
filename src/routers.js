import count from './components/Count.vue'
import countForNamespaced from './components/CountForNamespaced.vue'
import ajaxExample from './components/AjaxExample'

const routers = [{
    path: '/count',
    component: count
  },
  {
    path: '/countForNamespaced',
    component: countForNamespaced
  },
  {
    path: '/ajaxExample',
    component: ajaxExample
  },
  {
    path: '/*',
    redirect: '/count'
  }
]

export default routers
