<template>
    <ul>
        <li 
            v-for="user in chatStore.userList"
            v-if="user.email != userStore.authUser.email"
            @click="changeCurrentChatUser(user)">
            {{user.firstname}} {{user.lastname}}
        </li>
    </ul>
</template>
<script>
import {mapState} from 'vuex';
    export default{
        name: 'CharUserList',
        computed: {
            ...mapState({
                chatStore: state => state.chatStore,
                userStore: state => state.userStore
            })
        },
        methods: {
            changeCurrentChatUser (user){
                this.$store.dispatch('setCurrentChatUser', user);
            }
        }
    }
</script>