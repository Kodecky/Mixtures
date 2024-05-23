<template>
  <Menubar 
    :model="items" />
</template>

<script>
import Menubar from 'primevue/menubar';

export default {
  name: 'AppMenu',
  components: {
    Menubar
  },
  data: () => ({
    items: [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home'
        // command: () => { this.navigateTo('home') }
      },
      {
        label: 'Mixin',
        icon: 'pi pi-fw pi-folder-open'
        // command: () => { this.navigateTo('mixin') }
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-id-card'
        // command: () => { this.navigateTo('about') }
      }
    ]
  })
  // methods: {
  //   navigateTo(route) {
  //     // Add your navigation logic here
  //     console.log('Navigating to:', route);
  //   }
  // }
}
</script>

<style>
  /* .p-menubar {
    display: flex;

    ul {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
    }
  } */
</style>
