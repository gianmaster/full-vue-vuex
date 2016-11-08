import Vue from 'vue';
import {urlUserList, getHeader} from '../../config';

const store = {
    userList: {}
};

const mutations = {
    SET_USER_LIST(state, userList){
        state.userList = userList;
    }
}

const actions = {
    setUserList: ({commit}, userList) => {
        return Vue.http.get(urlUserList, {headers: getHeader()}).then(response => {
            if(response.status === 200){
                commit('SET_USER_LIST', response.body.data);
                return response.body.data;
            }
        })
    }
}

export default {
    store, mutations, actions
}
