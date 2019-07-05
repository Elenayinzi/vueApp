const state = {
    count1: 10
}

const mutations = {
    add(state,param){
        state.count1+=param;
    },
    reduce(state){
        state.count1--
    }
}

const actions = {
    add:({commit},param) => {
        commit('add',param)
    },
    reduce:({commit}) => {
        commit('reduce');
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}