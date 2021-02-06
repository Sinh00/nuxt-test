<template>
  <div>
    <button @click="getIp">IPアドレスを取得</button>
    <p>{{ ip }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: function () {
    return {
      ip: '0.0.0.0',
    }
  },
  methods: {
    async getIp() {
      this.ip = await this.$axios.$get('http://icanhazip.com')
    },
  },
})
</script>

<style>
div {
  text-align: center;
}
</style>
