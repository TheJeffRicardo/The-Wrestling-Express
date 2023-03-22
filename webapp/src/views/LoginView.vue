<template>
  <form action="">
    <h1>LOGIN</h1>
    <label>Email</label>
    <input type="text" v-model="payload.emailAdd" required>
    <label>Password</label>
    <input type="password" v-model="payload.userPass" required>
    <label class="form-control bg-gradient" v-show="userMsg">{{userMsg}}</label>
    <button @click.prevent="login">Login</button>
    <a href="/registration">
      <div class="register">
        <p>Wanna Sign Up?</p>
      </div>
    </a>
  </form>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore  } from 'vuex';
export default {
  setup() {
    const payload = {
        emailAdd: '',
        userPass: ''
      }
      const store = useStore()
      const login = ()=> {
        store.dispatch('login', payload)
      }
      store.dispatch("fetchUsers")
      const userMsg = computed( ()=>store.state.message )
      const userFetch = computed( ()=>store.state.users)
      return {
        payload,
        userFetch,
        userMsg,
        login
      }
    }
}
</script>
<style scoped>
form{
  margin: auto;
  width: 25rem;
  height: 28rem;
  display: flex;
  flex-direction: column;
  background-color: #c3c3c3;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 30px;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}
h1{
  font-size: 50px;
  color: #1B1B1B;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 3px;
  margin-bottom: 5%;
  opacity: 0.7;
  padding-bottom: 7%;
}
label{
  font-size: 20px;
  color: #1B1B1B;
  opacity: 0.8;
  text-shadow: 2px 2ox 4px rgba(0, 0, 0, 0.2);
}
input{
  width: 80%;
  margin: 5% auto;
  margin-bottom: 8%;
  border: none;
  outline: none;
  background: transparent;
  color: #1B1B1B;
  border-bottom:1px solid #1B1B1B;
  opacity: 0.8;
}
button{
  width: 40%;
  height: 10%;
  margin: 3% auto;
  color: #1B1B1B;
  font-size: 15px;
  background: rgba(255, 255, 255, 0.06);
  border: none;
  outline: none;
  border-radius: 20px;
  box-shadow: 3px 3px 5px rgba(31, 38, 135, 0.37);
  transition: 0.2s;
}
button:hover{
  color: rgba(255, 255, 255, 0.9);
  background-color: #1B1B1B;
}
a{
  font-size: 12px;
  color: #1B1B1B;
  text-decoration: none;
}
a:hover{
  font-weight: bold;
}
</style>
