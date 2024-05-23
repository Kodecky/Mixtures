<template>
  <div>

    <!-- text between -->
    <p
      v-text="'And the result...'" />

    <flask-item
      :buttons-visible="false"
      :size="15"
      :amount="100"
      :color="mixtureEffectFill"
      style="margin: 3rem auto; "/>

    <button-item
      @click="$emit('refresh')"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="sync" />


  </div>
</template>

<script>
// import BigMixtureItem from './BigMixtureItem'
import ButtonItem from './shared/ButtonItem'
import FlaskItem from './shared/FlaskItem'

export default {
  name: 'ResultsBox',
  props: {
    mixtures: {
      type: Array,
      required: true
    }
  },
  computed: {
    mixtureEffectFill () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    }
  },
  components: {
    // BigMixtureItem,
    ButtonItem,
    FlaskItem
  }
}
</script>
