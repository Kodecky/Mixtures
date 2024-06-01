import { createStore } from 'vuex'

export default createStore({
  state: {
    colors: [
      { red: 10, green: 20, blue: 30 },
      { red: 20, green: 120, blue: 90 }
    ],
    mixtures: [
      { variant: 'red', amount: 60 },
      { variant: 'green', amount: 100 },
      { variant: 'blue', amount: 20 }
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
    },
    INCREMENT_MIXTURE(state, index) {
      if (state.mixtures[index].amount < 100) {
        state.mixtures[index].amount++;
      }
    },
    DECREMENT_MIXTURE(state, index) {
      if (state.mixtures[index].amount > 0) {
        state.mixtures[index].amount--;
      }
    },
    REFRESH_MIXTURES(state) {
      state.mixtures = state.mixtures.map(item => ({ ...item, amount: 50 }));
    }
  },
  actions: {
    addColor({ commit }, colors) {
      if(colors.length === 3) {
        const {red, green, blue} = colors.map(item => Math.floor(item.amount * 2.5))
        commit('ADD_COLOR', { red, green, blue})
      }
    }
  }
})
