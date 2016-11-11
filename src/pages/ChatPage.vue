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
        <div class="column">
            <div class="container">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Voluptatem dolorem dolores distinctio perspiciatis debitis deserunt fugit reprehenderit reiciendis, ipsa in sequi quae voluptatum, eaque molestiae architecto quos dolore! 
                    Fugiat, obcaecati.</p>
            </div>
        </div>
    </div>

</template>

<script>
import userList from '../components/chat/ChatUserList';
import {mapState} from 'vuex';

export default {
    name: 'ChatPage',
    components: {
        userList: userList
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
