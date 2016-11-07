<template>
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <div class="panel" id="loginbox">
          <div class="panel-heading">
            <h2 class="subtitle">Login</h2>
          </div>
          <div class="panel-block">
            
            <form @submit.prevent="handleSubmitLogin">
              <p class="control has-icon">
                <input :class="inputClass" type="email" placeholder="Email" v-model="login.email">
                <i class="fa fa-envelope"></i>
              </p>
              <p class="control has-icon">
                <input :class="inputClass" type="password" placeholder="Password"  v-model="login.pass">
                <i class="fa fa-lock"></i>
              </p>
              <p class="control" v-if="badCredentials===true">
                <span class="help is-danger">Bad Credentials!</span>
              </p>
              <p class="control">
                <button :class="buttonClass" type="submit">
                  <span class="icon">
                    <i class="fa fa-sign-in"></i>
                  </span>
                  <span>Sign-in</span>
                </button>
              </p>
            </form>
            
          </div>
        </div>
      </div>
    </div>   
</template>

<script>
import {mapState} from 'vuex';
import {urlLogin, getHeader, urlUser} from '../config.js';
import {clientId, clientSecret} from '../env.js';

export default {
  name: 'loginPage',
  data (){
    return {
      login: {
        email: 'giancarloscercado@gmail.com',
        pass: 'password'
      },
      badCredentials: false,
      submiting: false
    }
  },
  computed: {
    inputClass (){
      return 'input ' + (this.badCredentials ? 'is-danger' : 'is-info'); 
    },
    buttonClass (){
        return 'button is-info is-outlined is-fullwidth ' + (this.submiting ? 'is-loading' : '');
    },
    ...mapState({
      userStore: state => state.userStore
    })
  },
  methods: {
    handleSubmitLogin(){
      this.submiting = true;

      const credentials = {
        grant_type: 'password',
        client_id: clientId,
        client_secret: clientSecret,
        username: this.login.email,
        password: this.login.pass,
        scope: ''
      };

      this.$http.post(urlLogin, credentials).then(resp => {

        if(resp.status == 200){
          const authUser = {};
          authUser.access_token = resp.body.access_token;
          authUser.refresh_token = resp.body.refresh_token;
          window.localStorage.setItem('authUser', JSON.stringify(authUser));
        
          this.$http.get(urlUser, { headers: getHeader() }).then(response => {
            
            this.badCredentials = false;
            authUser.email = response.body.email;
            authUser.firstname = response.body.firstname;
            authUser.lastname = response.body.lastname;
            window.localStorage.setItem('authUser', JSON.stringify(authUser));
            this.$store.dispatch('setUserObject', authUser);
            this.$router.push({name: 'dashboard'});

          }, err => {
            console.log(err, 'LOG TYPE: ERROR');
            this.submiting = false;
          });
        }

      }, err => {
        this.badCredentials = true;
        this.submiting = false;
        console.log(err, 'LOG TYPE: ERROR');
      });
    }
  }
}
</script>

<style lang="scss" scoped>
    #loginbox{
        margin-top: 50px;
    }
</style>
