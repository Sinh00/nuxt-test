export const state = () => ({
  list: [],
})

interface todo {
  text: string
  done: boolean
}

export const mutations = {
  add(state: any, text: string) {
    state.list.push({
      text: text,
      done: false,
    })
  },

  toggle(state: any, todo: todo) {
    todo.done = !todo.done
  },
}
