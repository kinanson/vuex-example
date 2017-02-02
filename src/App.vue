<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="count">go to count</router-link>
      </li>
      <li>
        <router-link to="countForNamespaced">go to countForNamespaced</router-link>
      </li>
    </ul>
    <router-view style="padding-top: 10px"></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app'
  }

</script>
<style scoped>


</style>
