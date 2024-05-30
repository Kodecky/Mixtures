<template>
  <div class="colors-container" ref="colorWrap">
    <flask-item
      :key="index"
      v-for="(color, index) in colors"
      :buttons-visible="false"
      :btn-remove-visible="true"
      :amount="100"
      :color="useColor(color)" 
      @click="removeColor(index)"/>
  </div>
</template>

<script>
import FlaskItem from '@/components/shared/FlaskItem'
import ButtonItem from './shared/ButtonItem'
import { mapState } from 'vuex'

export default {
  name: 'MyColorsList',
  components: {
    FlaskItem,
    ButtonItem
  },
  methods: {
    useColor(color) {
      return `rgb(${color.red}, ${color.green}, ${color.blue})`
    },
    outAnimation (index) {
      this.isOutAnimation = true
    },
    removeColor(index) {
        this.$store.commit('REMOVE_COLOR', index)
    }
  },
  computed: {
    ...mapState(['colors'])
  }
}
</script>


<style>
  .colors-container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
</style>
