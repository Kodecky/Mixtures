<template>
  <Menubar 
    :model="items" >
    <template #item="{ item, props }">
      <router-link v-if="item.to" :to="item.to" custom v-slot="{ href, navigate }">
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
    </template>
  </Menubar>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import Menubar from 'primevue/menubar'

export default {
  name: 'AppMenu',
  components: {
    Menubar
  },
  data: () => ({
    items: [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        to: '/'
      },
      {
        label: 'Mixin',
        icon: 'pi pi-fw pi-filter',
        to: '/mixin'
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-info',
        to: '/about'
      }
    ]
  })
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
