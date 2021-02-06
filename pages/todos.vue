<template>
  <div>
    <input type="text" placeholder="タスクを追加" @keyup.enter="addTodo" />
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
  computed: {
    todos() {
      return this.$store.state.todos.list
    },
  },

  methods: {
    addTodo(event: Event) {
      this.$store.commit('todos/add', (event.target as HTMLInputElement).value)
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
