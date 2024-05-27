<template>
  <div class="page">
    <headline-item>
      Color
    </headline-item>
    
    <flask-item
      :buttons-visible="false"
      :size="15"
      :amount="100"
      :color="`rgb(${this.$route.params.red}, ${this.$route.params.green}, ${this.$route.params.blue})`"
      style="margin: 3rem auto; " />
    <div class="link-container">
      <button-item 
        :movement="0"
        icon="pi-share-alt"
        class="custom-button-style" />
      <InputText 
        v-model="value"
        :placeholder="fullURL"
        class="input-link" />
    </div>

  </div>
</template>

<script>
import FlaskItem from '@/components/shared/FlaskItem'
import HeadlineItem from '@/components/shared/HeadlineItem'
import InputText from 'primevue/inputtext'
import ButtonItem from '@/components/shared/ButtonItem'

export default {
  name: 'ColorPage',
  components: {
    FlaskItem,
    HeadlineItem,
    InputText,
    ButtonItem
  },
  computed: {
    fullURL() {
      return window.location.origin + this.$route.fullPath;
    }
  },
  created () {
    if ( !this.$route.params.red || !this.$route.params.green || !this.$route.params.blue ) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
  .input-link {
    width: 100%;
    max-width: 330px;
    text-align: center;
  }
  .custom-button-style {
    background-image: none;
    background-color: transparent;
    margin-right: 10px;
    transform: scale(1.5);
  }
</style>
