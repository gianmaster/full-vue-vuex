<script>
    import {mapState} from 'vuex';
    export default{
        name: 'conversationWidget',
        computed: {
            ...mapState({
                chatStore: state => state.chatStore
            })
        }
    }
</script>
<template>
    <div class="__message_container">
        <div class="__content_item" v-for="msg in chatStore.conversation">
            <div class="__user_avatar">{{msg.receiver.firstname}}</div>
            <div class="__user_message">
                <span>{{msg.chat}}</span>
                <small>{{msg.created_at}}</small>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.__message_container {
    max-height: 400px;
    background-color: ghostwhite;
    color: gray;
    &.__content_item {
        display: flex;
        flex-grow: 1;
        margin: .5em;
        &.__user_avatar {
            width: 64px;
            height: 64px;
        }
        &.__user_message {
            margin: .2em
        }
    }
}
</style>