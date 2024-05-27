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
      <i
        class="pi pi-share-alt icon-style" />

      <InlineMessage 
        class="message-style" severity="secondary">
        {{fullURL}}
      </InlineMessage>

    </div>

  </div>
</template>

<script>
import FlaskItem from '@/components/shared/FlaskItem'
import HeadlineItem from '@/components/shared/HeadlineItem'
import ButtonItem from '@/components/shared/ButtonItem'
import InlineMessage from 'primevue/inlinemessage';

export default {
  name: 'ColorPage',
  components: {
    FlaskItem,
    HeadlineItem,
    ButtonItem,
    InlineMessage
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
  .message-style {
    width: 100%;
    max-width: 330px;
    text-align: center;
    border: 1px solid grey;
    border-radius: 4px;
    color: grey;
    padding: 10px;
  }
  .icon-style {
    margin-right: 20px;
    padding: 6px;
    font-size: 1.7rem;
    color: grey;
  }
</style>
