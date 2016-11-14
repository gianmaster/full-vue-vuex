import Vue from 'vue';
import {urlUserList, urlUserConversation, getHeader} from '../../config';

const state = {
    userList: {},
    currentChatUser: null,
    conversation: null
};

const mutations = {
    SET_USER_LIST(state, userList){
        state.userList = userList;
    },
    SET_CURRENT_CHAT_USER(state, user){
        state.currentChatUser = user;
    },
    SET_CONVERSATION(state, conversation){
        state.conversation = conversation;
    }
}

const actions = {
    setUserList: ({commit}) => {
        return Vue.http.get(urlUserList, {headers: getHeader()}).then(response => {
            if(response.status === 200){
                commit('SET_USER_LIST', response.body.data);
                //return response.body.data;
            }
        })
    },
    setCurrentChatUser({commit}, user){
        commit('SET_CURRENT_CHAT_USER', user);
        const postData = {id: user.id};
        Vue.http.post(urlUserConversation, postData, {headers: getHeader()}).then(response => {
            commit('SET_CURRENT_CHAT_USER', user);
            commit('SET_CONVERSATION', response.body.data);
        })
    }
}

export default {
    state, mutations, actions    
}
