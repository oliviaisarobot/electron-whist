<template lang="pug">
  header
    div.h5 {{ pageName }}
</template>

<script>
  export default {
    computed: {
      pageName () {
        let name = this.$route.name.replace('-', ' ')
        name = name.charAt(0).toUpperCase() + name.slice(1)
        return this.$route.name ? name : ''
      }
    }
  }
</script>

<style>
  header {
    align-items: center;
    display: flex;
    height: 100px;
    justify-content: center;
  }
</style>
