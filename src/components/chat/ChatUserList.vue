<style lang="scss">

ul{
    overflow: overlay;
    max-height: 300px;
    li {
        padding: .4em;
        height: 40px;
        cursor: pointer;
        &.__active_user {
            background-color: lightskyblue;
        }
        &:hover {
            background-color: lightgray;
        }
    }
}
</style>

<template>
    <ul>
        <template v-for="user in chatStore.userList" >
            <li v-if="user.email != userStore.authUser.email"
            :class="{__active_user: isActiveChatUser(user)}"
            @click="changeCurrentChatUser(user)">
                {{user.firstname}} {{user.lastname}}
            </li>
        </template>
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
        created (){
            console.log('render chat list');
        },
        methods: {
            isActiveChatUser (user){
                if(this.chatStore.currentChatUser === null){
                    return false;
                }
                return this.chatStore.currentChatUser.id === user.id;
            },
            changeCurrentChatUser (user){
                this.$store.dispatch('setCurrentChatUser', user);
            }
        }
    }
</script>