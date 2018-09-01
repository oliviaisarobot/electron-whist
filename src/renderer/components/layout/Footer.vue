<template lang="pug">
  footer.link-back
    div.animated.pulse.infinite
      router-link(to="main-menu").arrow-back
        img(src="../../assets/icons/arrow-back.svg")
</template>

<script>
  export default {}
</script>

<style>
  .link-back {
    bottom: 40px;
    left: 40px;
    position: absolute;
    z-index: 100;
  }

  .router-link {
    background: url('/assets/icons/arrow-back.svg');
    height: 50px;
    width: 50px;
  }
</style>
