<template>
    <div>
        <div class="buttons" v-if="!Session.user">
            <router-link class="navbar-item button is-light" tag="a" to="/signup">
                Sign Up    
            </router-link>
            <router-link class="navbar-item button is-light" tag="a" to="/login">
                Login     
            </router-link>
        </div>
        <div class="greeting" v-else>
            <h1 class="greeting-name"> Hello {{Session.user.firstName}}</h1>
            (<a class="greeting-logout" @click.prevent="logout">
                Log out
            </a>)
            
        </div>
    </div>        
</template>

<script>
    import Session, { Logout } from "../models/Session"

export default {
    data(){
        return {
            Session
        }
    },
    methods: {
        login(){
            this.$router.push('Login');
        },
        logout(){
            Logout();
        }
    },
}
</script>