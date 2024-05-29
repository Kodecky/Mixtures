<template>
  <div class="page">
    <headline-item>
      Color
    </headline-item>

    <Message
      v-if="errorMessage"
      severity="error" 
      style="margin-top: 40px">
        This color is invalid! It's not RGB format...
    </Message>
    
    <flask-item
      v-if="!errorMessage"
      :buttons-visible="false"
      :size="15"
      :amount="100"
      :color="`rgb(${this.$route.params.red}, ${this.$route.params.green}, ${this.$route.params.blue})`"
      style="margin: 3rem auto; " />

    <div 
      v-if="!errorMessage"
      class="link-container">
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
import InlineMessage from 'primevue/inlinemessage'
import Message from 'primevue/message'

export default {
  name: 'ColorPage',
  components: {
    FlaskItem,
    HeadlineItem,
    ButtonItem,
    InlineMessage,
    Message
  },
  data () {
    return {
      params: {
        red: Number(this.$route.params.red),
        green: Number(this.$route.params.green), 
        blue: Number(this.$route.params.blue) 
      },
      errorMessage: false
    }
  },
  computed: {
    fullURL() {
      return window.location.origin + this.$route.fullPath;
    }
  },
  created () {
    this.validateParams()
    if ( !this.$route.params.red || !this.$route.params.green || !this.$route.params.blue ) {
      this.$router.push('/')
    }
  },
  methods: {
    validateParams() {
      const { red, green, blue } = this.params;
      if (
        isNaN(red) || isNaN(green) || isNaN(blue) ||
        red < 0 || red > 255 ||
        green < 0 || green > 255 ||
        blue < 0 || blue > 255
      ) {
        this.errorMessage = true;
      }
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
