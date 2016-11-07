// INIT STATE
const state = {
    authUser: null
};

//MUTATIONS PROCES
const mutations = {
    SET_AUTH_USER (state, userObj){
        state.authUser = userObj;
    }
};

//ACTIONS TO DISPATCH
const actions = {
    setUserObject: ({commit}, userObj) => {
        commit('SET_AUTH_USER', userObj);
    }
};

export default {
    state, mutations, actions
}
