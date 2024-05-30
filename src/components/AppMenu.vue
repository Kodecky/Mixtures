<template>
  <Menubar 
    :model="items" >
    <template #item="{ item, props }">
      <router-link v-if="item.to" :to="item.to" custom v-slot="{ href, navigate }">
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
    </template>
  </Menubar>
</template>

<script>
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
      },
      {
        label: 'My colors',
        icon: 'pi pi-fw pi-palette',
        to: '/my-colors'
      }
    ]
  })
}
</script>

<style>
</style>
