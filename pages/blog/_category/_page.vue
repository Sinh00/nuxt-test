<template>
  <div>
    <p>
      これは、{{ $route.params.category }}の、{{
        $route.params.page
      }}ページ目です。
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  validate({ params }) {
    console.log('parameter is: ', params)
    return /^\d+$/.test(params.page)
  },
})
</script>
