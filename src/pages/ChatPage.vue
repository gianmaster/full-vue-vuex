<template>

    <div class="columns">
        <div class="column is-3">
            <div class="container">
                <div class="panel is-success">
                    <div class="panel-heading">
                        <h4>Chat</h4>
                    </div>
                    <div class="panel-block">
                        <user-list></user-list>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content chat -->
        <div class="column is-6">
            <chat-widget></chat-widget>
        </div>
        <!-- Content aside info -->
        <div class="column">
            Aqui va otra cosa
        </div>
    </div>

</template>

<script>
import userList from '../components/chat/ChatUserList';
import ConversationWidget from '../components/chat/ChatConversationWidget';
import {mapState} from 'vuex';

export default {
    name: 'ChatPage',
    components: {
        userList: userList,
        chatWidget: ConversationWidget
    },
    created(){
        this.$store.dispatch('setUserList');
    },
    computed: {
        ...mapState({
            chatStore: state => state.chatStore
        })
    }
}
</script>
