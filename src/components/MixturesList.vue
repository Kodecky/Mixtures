<template>
  <!-- mixtures -->
  <ul class="mixtures">
    <!-- <mixture-item
      :key="index"
      v-for="(mixture, index) in mixtures"
      :mixture="mixture"
      @increment="$emit('increment', index)"
      @decrement="$emit('decrement', index)" /> -->
    <flask-item
      :key="index"
      v-for="(mixture, index) in mixtures"
      :variant="mixture.variant"
      :amount="mixture.amount"
      @increment="$emit('increment', index)"
      @decrement="$emit('decrement', index)" />
  </ul>
</template>

<script>
// import MixtureItem from './MixtureItem'
import FlaskItem from './shared/FlaskItem'

export default {
  name: 'Mixtures',
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  components: { 
    // MixtureItem 
    FlaskItem
  }
}
</script>

<style scoped lang="scss">
.mixtures {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}
</style>
