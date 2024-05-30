<template>
  <div class="page">
    <headline-item>
      My colors
    </headline-item>
    <my-colors-list />
  </div>
</template>

<script>
import HeadlineItem from '@/components/shared/HeadlineItem'
import MyColorsList from '@/components/MyColorsList'

export default {
  name: 'MyColorsPage',
  components: {
    HeadlineItem,
    MyColorsList
  }
}
</script>
