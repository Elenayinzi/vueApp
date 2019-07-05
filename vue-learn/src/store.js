import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {  //放在了computed计算数据中
    count: 1
}

const mutations = {
    increment(state){
        state.count++;
    },
    decrement(state){
        state.count--;
    }
}

const actions = {
    increment:({commit}) => {
        commit('increment');
    },
    decrement:({commit}) => {
        commit('decrement');
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
