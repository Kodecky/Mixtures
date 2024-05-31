<template>
  <div class="colors-container" ref="colorWrap">
    <flask-item
      :key="index"
      v-for="(color, index) in colors"
      :color="color" 
      :buttons-visible="false"
      :btn-remove-visible="true"
      :amount="100"
      @click="removeColor(index)"/>
  </div>
</template>

<script>
import FlaskItem from '@/components/shared/FlaskItem'
import ButtonItem from './shared/ButtonItem'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'MyColorsList',
  components: {
    FlaskItem,
    ButtonItem
  },
  methods: {
    // useColor(color) {
    //   return `rgb(${color.red}, ${color.green}, ${color.blue})`
    // },
    outAnimation (index) {
      this.isOutAnimation = true
    },
    removeColor(index) {
        this.$store.commit('REMOVE_COLOR', index)
    }
  },
  computed: {
    ...mapGetters({ colors: 'RGBColors' })
  }
}
</script>


<style>
  .colors-container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
</style>
