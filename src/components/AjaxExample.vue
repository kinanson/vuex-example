<template>
  <div id='ajaxExample'>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

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
    async created() {
      await this.$store.dispatch('ajaxExample/get') //因為要取得預設資料，所以先去呼叫一次action，可用this去呼叫store
      console.log(this.data) //這邊是getters去取得的data
    }
  }

</script>
<style scoped>


</style>
