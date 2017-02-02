import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routers from './routers'
import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routers
})

new Vue({
  el: '#app',
  router, //這是es6的語法檔，實際也可以寫成router:router
  store,
  render: h => h(App)
})
