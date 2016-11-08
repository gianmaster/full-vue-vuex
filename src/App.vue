<template>
  <div id="main-container">
    <template v-if="userStore.authUser != null">
      <div class="header" v-if="userStore.authUser.access_token">
        <top-nav-menu></top-nav-menu>
      </div>
    </template>
    
    <div class="section">
      <div class="section">
        <router-view></router-view>
      </div>
      <!--
      <div class="footer">
        <p class="subtitle">Derecheos reservados</p>
      </div>
      -->
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import TopNavMenu from './components/TopNavMenu';
export default {
  name: 'app',
  components: {
    TopNavMenu
  },
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  },
  created (){
    console.log('Se monta correctamente mi aplicacion');
    const userObj = JSON.parse(window.localStorage.getItem('authUser'));
    this.$store.dispatch('setUserObject', userObj);
  }
}
</script>

<style lang="sass">
  @import './assets/css/font-awesome-4.7.0/css/font-awesome.min.css';
  @import '../node_modules/bulma/css/bulma.css';
</style>