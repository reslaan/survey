import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      data: {

      },
      token: sessionStorage.getItem("TOKEN")
    }
  },
  getters: {},
  actions: {
    register({commit}, user){
     return axios.post('api/register',user)
     .then(({data}) => {
        commit('setUser', data);
        return data;
      })
    },
    login({commit}, user){
     return axios.post('api/login',user)
     .then(({data}) => {
        commit('setUser', data);
        return data;
      })
    },
    logout({commit}){
      return axios.post('api/logout')
             .then(res => {
              commit('logout');
              return res;
             })
    }
  },
  mutations: {
    logout: state => {
      state.user.data = {};
      state.user.token = '';
      sessionStorage.setItem('TOKEN', '');

    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem('TOKEN', userData.token);

    }
  },
  modules: {},
});

export default store;
