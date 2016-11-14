// INIT STATE
const state = {
    authUser: null,
    prueba: null
};

//MUTATIONS PROCES
const mutations = {
    SET_AUTH_USER (state, userObj){
        state.authUser = userObj;
    },
    CLEAR_AUTH_USER (state){
        state.authUser = null;
    }
};

//ACTIONS TO DISPATCH
const actions = {
    setUserObject: ({commit}, userObj) => {
        commit('SET_AUTH_USER', userObj);
    },
    clearAuthUser: ({commit}) => {
        commit('CLEAR_AUTH_USER');
    }
};

export default {
    state, mutations, actions
}
