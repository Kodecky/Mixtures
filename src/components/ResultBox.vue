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

    <!-- rgb value -->
    <p 
      v-text="mixtureEffectFill" />

    <p 
      v-text="`There are ${amountColors} colors in your pocket!`"/>

    <button-item
      @click="$emit('refresh')"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="pi-sync"
      style="margin-right: 20px" />

    <button-item
      @click="showModal"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="pi-question"
      style="margin-right: 20px" />

    <router-link
      :to="colorLink" >
      <button-item
        :size="4"
        :movement="-0.5"
        :font-size="1.5"
        icon="pi-share-alt"
        style="margin-right: 20px;" />
    </router-link>

    <button-item 
      :size="4" 
      :movement="-0.5"
      :font-size="1.5"
      icon="pi-pencil" 
      @click="saveColor" />

    <!-- modal -->
    <fade-animation>

      <modal-item
        v-if="modalVisible"
        @cancel="modalVisible = false">

        <template v-slot:header>
          About the app
        </template>
        
        <template v-slot:body>
          Mix three colors to create the perfect one!
        </template>

        <template v-slot:footer>
          <button-item
          @click="hideModal"
          icon="pi-thumbs-up"
          style="margin: 10px" />
        </template>

      </modal-item>
    </fade-animation>

  </div>
</template>

<script>
import ButtonItem from './shared/ButtonItem'
import FlaskItem from './shared/FlaskItem'
import ModalItem from './shared/ModalItem'
import modalMixin from '../mixins/ModalMixin.js'
import FadeAnimation from './shared/FadeAnimation'
import { mapGetters, mapMutations } from 'vuex'

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
    },
    colorLink () {
      const [redCol, greenCol, blueCol] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      return `/color/${redCol}/${greenCol}/${blueCol}`
    },
    ...mapGetters([ 'amountColors' ])
  },
  components: {
    ButtonItem,
    FlaskItem,
    ModalItem,
    FadeAnimation
  },
  mixins: [modalMixin],
  data() {
    return {
      isSaving: false
    }
  },
  methods: {
    ...mapMutations({ addColor: 'ADD_COLOR' }),
    addColor (payload) {
      this.$store.commit('ADD_COLOR', payload)
    },
    saveColor () {
      if (this.isSaving) return
      this.isSaving = true

      const [red, green, blue] = this.mixtures.map(item => Math.floor(item.amount * 2.5))
      this.addColor({ red, green, blue })

      setTimeout(() => {
        this.isSaving = false
      }, 1000)
    }
  }
}
</script>

<style>
</style>
