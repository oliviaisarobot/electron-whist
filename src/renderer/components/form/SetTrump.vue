<template lang="pug">
  div
    div.heading Select the trump card:
    div(v-for="suit in suits", :key="suit.name").trump-block
      span(@click="setTrump(suit.name)").secondary-button {{ suit.name }}
      //- TODO: visual representation of each card suit
</template>

<script>
  export default {
    data () {
      return {
        suits: [
          { name: 'hearts' },
          { name: 'clubs' },
          { name: 'spades' },
          { name: 'diamonds' }
        ]
      }
    },
    methods: {
      setTrump (e) {
        this.$emit('set', e)
      }
    }
  }
</script>

<style>
  .heading {
    display: block;
    margin-bottom: 20px;
  }

  .secondary-button {
    cursor: pointer;
    padding-left: 20px;
    padding-right: 20px;
    transition: .3s ease;
  }

  .secondary-button:hover {
    color: #ec008c;
    transition: .3s ease;
  }

  .trump-block {
    display: inline-block;
    text-align: center;
    width: 100px;
  }

  .trump-text {
    cursor: pointer;
  }
</style>
