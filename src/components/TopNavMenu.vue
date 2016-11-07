<template>
    <nav class="nav">
        <div class="nav-left">
            <a class="nav-item is-brand" href="#">
                <h1 class="title">AdminPanel</h1>
            </a>
        </div>

        <div class="nav-center">
            <a class="nav-item" href="#">
                <span class="icon">
        <i class="fa fa-github"></i>
      </span>
            </a>
            <a class="nav-item" href="#">
                <span class="icon">
        <i class="fa fa-twitter"></i>
      </span>
            </a>
        </div>

        <span class="nav-toggle">
    <span></span>
        <span></span>
        <span></span>
        </span>

        <div class="nav-right nav-menu">
            <a class="nav-item" href="#">Home</a>
            <a class="nav-item" href="#">Documentatio</a>
            <a class="nav-item" href="#">Blog</a>
            <span class="nav-item">
                <a class="button">
                    <span class="icon">
                        <i class="fa fa-twitter"></i>
                    </span>
                    <span>Tweet</span>
                </a>
                <a class="button is-primary" href="#">
                    <span class="icon">
                        <i class="fa fa-download"></i>
                    </span>
                    <span>Download</span>
                </a>
            </span>
        </div>
    </nav>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'TopNavMenu',
    computed: {
        ...mapState({
        userStore: state => state.userStore
        })
    },
    created (){
        const userObj = JSON.parse(window.localStorage.getItem('authUser'));
        this.$store.dispatch('setUserObject', userObj);
    }
}

</script>