<template>
  <div id='countForNamespaced'>
    <label>this is root count:{{count}}</label>
    <button @click="addCount">+1 for root</button>
    <label>this is namespaced count:{{countForNamespaced}}</label>
    <button @click="addCountForNamespaced">+2 for namespaced</button>
  </div>
</template>
<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    name: 'countForNamespaced',
    methods: {
      ...mapActions([ //對應root.js的部份
        'addCount'
      ]),
      ...mapActions('countForNamespaced', { //對應了namespaced的部份
        'addCountForNamespaced': 'addCount' //自定義組件的method名稱:vuex對應的actions
      })
    },
    computed: {
      ...mapGetters([
        'count'
      ]),
      ...mapGetters('countForNamespaced', {
        'countForNamespaced': 'count'
      })
    }
  }

</script>
<style scoped>


</style>
