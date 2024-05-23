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
      icon="fa-sync" 
      style="margin-right: 10px"/>

    <button-item
      @click="showModal"
      :size="4"
      :movement="-0.5"
      :font-size="1.5"
      icon="fa-question"
      style="margin-left: 10px"/>

    <!-- modal -->
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
        icon="fa-thumbs-up"
        style="margin: 10px" />
      </template>

    </modal-item>


  </div>
</template>

<script>
import ButtonItem from './shared/ButtonItem'
import FlaskItem from './shared/FlaskItem'
import ModalItem from './shared/ModalItem'
import modalMixin from '../mixins/ModalMixin.js'

export default {
  name: 'ResultsBox',
  // data: () => ({
  //   modalVisible: false
  // }),
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
  // methods: {
  //   showModal () {
  //     this.modalVisible = true
  //   }
  // },
  components: {
    ButtonItem,
    FlaskItem,
    ModalItem
  },
  mixins: [modalMixin]
}
</script>
