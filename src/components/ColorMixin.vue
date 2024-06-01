<template>
  <div>

    <!-- mixtures list -->
    <mixtures-list
      :mixtures="mixtures"
      @increment="increment"
      @decrement="decrement" />

    <!-- result box -->
    <result-box
      @refresh="refresh"
      :mixtures="mixtures" />

  </div>
</template>

<script>
import MixturesList from './MixturesList'
import ResultBox from './ResultBox'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'ColorMixin',
  methods: {
    ...mapMutations(['INCREMENT_MIXTURE', 'DECREMENT_MIXTURE', 'REFRESH_MIXTURES']),
    
    increment(index) {
      this.INCREMENT_MIXTURE(index);
    },

    decrement(index) {
      this.DECREMENT_MIXTURE(index);
    },
    
    refresh() {
      this.REFRESH_MIXTURES();
    }
  },
  components: {
    MixturesList,
    ResultBox
  },
  computed: mapState(['mixtures'])
}
</script>
