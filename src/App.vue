<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <List />
    </q-page-container>
  </q-layout>
</template>

<script>
import List from './components/List.vue'

export default {
  name: 'LayoutDefault',

  components: {
    List
  },
}
</script>
