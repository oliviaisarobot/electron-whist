<template lang="pug">
  div.counter-container.d-flex
    label(v-if="label" for="name") {{ label }}
    div.d-flex.align-center
      div(
        :class="{ 'faded': value === min }"
        @click="decrement"
        ).modify.minus
      div(
        :class="name"
        ).counter {{ value }}
      div(
        :class="{ 'faded': value === max }"
        @click="increment"
        ).modify.plus
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      label: String,
      max: {
        type: Number
      },
      min: {
        type: Number,
        default: 0
      },
      name: String
    },
    computed: {
      ...mapState({
        players: (state) => state.game.players
      })
    },
    data () {
      return {
        value: 0
      }
    },
    methods: {
      changed () {
        this.$emit('change', this.value)
      },
      decrement () {
        if (this.value !== this.min) {
          this.value--
          this.changed()
        }
      },
      increment () {
        if (this.value < this.max) {
          this.value++
          this.changed()
        }
      }
    },
    mounted () {
      if (this.players.length) this.value = this.players.length
    },
    watch: {
      players () {
        this.value = this.players.length
      }
    }
  }
</script>

<style>
  label {
    margin-right: 15px;
  }

  .counter-container {
    justify-content: space-between;
    width: 100%;
  }

  .counter, .modify {
    display: inline-block;
    height: 25px;
  }

  .counter {
    background: none;
    border: 2px solid #27aae1;
    border-radius: 10px;
    color: white;
    padding: 10px;
    text-align: center;
    width: 25px;
  }

  .faded {
    opacity: .3;
  }

  .modify {
    background-position: center!important;
    background-repeat: no-repeat!important;
    background-size: 20px!important;
    cursor: pointer;
    font-size: 18px;
    margin-left: 10px;
    margin-right: 10px;
    transition: .3s ease;
    width: 25px;
  }

  .modify:hover {
    color: #27aae1;
    transition: .3s ease;
  }

  .minus {
    background: url('../../assets/icons/minus.svg');
  }

  .plus {
    background: url('../../assets/icons/plus.svg');
  }
</style>
