<template>
  <div class="page">
    <headline-item>
      About
    </headline-item>
    <p 
      style="margin-bottom: 60px;">
        This page was built with Vue.js
    </p>
    <img 
      class="animate__animated" 
      :class="{ 'animate__jackInTheBox' : isJacking  }" 
      @click="changeState"
      style="max-width: 500px; cursor: pointer;" 
      src="@/assets/vue-js.svg"
      @animationend="isJacking = false" >
  </div>
</template>

<script>
import HeadlineItem from '@/components/shared/HeadlineItem'

export default {
  name: 'AboutPage',
  components: {
    HeadlineItem
  },
  data () {
    return {
      isJacking: false
    }
  },
  methods: {
    changeState () {
      this.isJacking = true
    }
  },
  beforeMount () {
    this.isJacking = true
  }
}
</script>
