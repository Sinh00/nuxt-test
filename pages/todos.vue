<template>
  <div>
    <input type="text" @keyup.enter="addTodo" v-bind:value="inputData" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  data: () => {
    return {
      inputData: '初期値',
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos.list
    },
  },

  methods: {
    addTodo(event: Event) {
      this.$store.commit('todos/add', (event.target as HTMLInputElement).value)
      this.inputData = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle',
    }),
  },
})
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
