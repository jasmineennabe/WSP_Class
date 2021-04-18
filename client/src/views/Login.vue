

<template>
  <div class="login-popup" id="loginForm" v-if="!Session.user">
        <form @submit='login' class="login-container">
            <button type="button" class="close" @click.prevent='close'>
                <i class="fas fa-times"></i>
            </button>

            <h1>Login</h1>
        
            <label for="email">
                <b>Email</b>
            </label>
            <input class="emailinput" type="text" placeholder="Enter Email" name="email" required>
            <br>
            <label class="pswlabel" for="psw">
                <b>Password</b>
            </label>
            <input class="pswinput" type="password" placeholder="Enter Password" name="psw" required>
            <br>
            <button type="submit" class="loginbtn">
                Login
            </button>
            <br> 
        </form>
    </div>
</template>

<script>
    import Session, { Login } from "../models/Session"
export default {
    data(){
        return {
            Session
        }
    },
    methods: {
        login(){
            Login()
            
        },
        close(){
            window.history.back();
        },
    }
}
</script>