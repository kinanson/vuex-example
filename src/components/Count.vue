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
        'addCount'
      ])
    },
    computed: {
      ...mapGetters([
        'count'
      ])
    }
  }

</script>
<style scoped>


</style>
