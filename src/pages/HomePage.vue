<template>
  <div 
    class="page animate__animated animate__faster" 
    :class="{ 'animate__shakeY' : isShaked }" 
    ref="MessageWrap">
    <Message 
      severity="warn" 
      style="margin-top: 40px;">
        Warning! This app is still in development...
    </Message>  
  </div>
</template>

<script>
import Message from 'primevue/message'

export default {
  name: 'HomePage',
  components: {
    Message
  },
  data () {
    return {
      isShaked: false
    }
  },
  mounted () {
      setTimeout(() => {
        this.isShaked = true
      }, 2000);
  }
}
</script>
