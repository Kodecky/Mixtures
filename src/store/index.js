import { createStore } from 'vuex'

export default createStore({
  state: {
    colors: [
      { red: 10, green: 20, blue: 30 },
      { red: 20, green: 120, blue: 90 }
    ]
  },
  getters: {
    RGBColors (state) {
      return state.colors.map(color => `rgb(${color.red}, ${color.green}, ${color.blue})`)
    },
    amountColors (state) {
      return state.colors.length
    }
  },
  mutations: {
    ADD_COLOR (state, color) {
      state.colors.push(color)
    },
    REMOVE_COLOR(state, index) {
      state.colors.splice(index, 1);
    }
  }
})
