<template>
  <div id="app">
    <div class="container">

      <!-- header -->
      <app-header />

      <!-- menu -->
      <app-menu 
        class="menubar-style"/>

      <!-- router view -->
      <router-view />

      <!-- router view used instead of color mixin -->
      <!-- <color-mixin /> -->

    </div>
  </div>
</template>

<script>
import '@/styles/global.scss'
import AppHeader from '@/components/AppHeader'
// import ColorMixin from './components/ColorMixin'
import AppMenu from '@/components/AppMenu'

export default {
  name: 'App',
  components: {
    AppHeader,
    // ColorMixin,
    AppMenu
  }
}
</script>

<style lang="scss">
.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}

.menubar-style{
  border-radius: 1rem;
  box-shadow: 0 20px 40px 0 rgba(107,154,212,.3);
  overflow: hidden;
  display: flex;

  ul {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
    }
}
</style>
