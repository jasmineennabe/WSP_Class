<template>
  <div class="login-popup" id="loginForm" v-if="!Session.user">
        <form @submit='login' class="login-container">
            <button type="button" class="close" @click.prevent='close'>
                <i class="fas fa-times"></i>
            </button>

            <h1>Login</h1>
        
            <label for="handle">
                <b>Handle</b>
            </label>
            <input class="handleinput" type="text" placeholder="Enter Handle" name="handle" required v-model="handle">
            
            <br>
            
            <label class="pswlabel" for="psw">
                <b>Password</b>
            </label>
            <input class="pswinput" type="password" placeholder="Enter Password" name="psw" required v-model="password">
            
            <br>
            
            <button type="submit" class="loginbtn">
                Login
            </button>
            <br> 
        </form>
    </div>
</template>

<script>
    import { Login } from "../models/Session"

export default {
    data: ()=>({
        handle: null,
        password: null
    }),
    methods: {
        login(){
            Login(this.handle, this.password)
            
        },
        close(){
            window.history.back();
        },
    }
}
</script>