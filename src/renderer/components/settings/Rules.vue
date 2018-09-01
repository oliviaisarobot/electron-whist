<template lang="pug">
  div
    header-component
    div.content
      div Rules
    footer-component
</template>

<script>
  import FooterComponent from '@/components/layout/Footer'
  import HeaderComponent from '@/components/layout/Header'

  export default {
    components: {
      FooterComponent,
      HeaderComponent
    }
  }
</script>
