<template>
  <div id='count'>
    <button @click="addCount">+1</button> 累積的值{{count}}
  </div>
</template>
<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    name: 'count',
    methods: {
      ...mapActions([
        'addCount' //對應template的click觸發的action
      ])
    },
    computed: {
      ...mapGetters([
        'count' //對應到畫面上的{{count}}
      ])
    }
  }

</script>
<style scoped>
</style>
