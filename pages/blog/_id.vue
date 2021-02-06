<template>
  <div>
    <p>Blog-detail</p>
    <p>これは、{{ $route.params.id }}のエントリー画面です。</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  validate({ params }) {
    console.log('parameter is: ', params)
    return /^\d+$/.test(params.id)
  },
})
</script>
