<template>
  <div id='ajaxExample'>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  import store from '../store'

  export default {
    name: 'ajaxExample',
    methods: {
      ...mapActions('ajaxExample', [
        'get'
      ])
    },
    computed: {
      ...mapGetters('ajaxExample', [
        'data'
      ])
    },
    // async created() {
    //   await this.$store.dispatch('ajaxExample/get') //因為要取得預設資料，所以先去呼叫一次action，可用this去呼叫store
    //   console.log(this.data) //這邊是getters去取得的data
    // }
    async beforeRouteEnter(to, from, next) {
      await store.dispatch('ajaxExample/get') //因為要取得預設資料，所以先去呼叫一次action
      next() //繼續執行
    }
  }

</script>
<style scoped>


</style>
