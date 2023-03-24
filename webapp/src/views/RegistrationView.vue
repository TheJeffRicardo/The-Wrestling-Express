<template>
<form>
  <h1>Registration</h1>
    <div class="flex">
      <div class="input">
        <label>First Name</label>
        <input type="text" v-model="payload.firstName" required>
      </div>
      <div class="input">
        <label>Last Name</label>
        <input type="text" v-model="payload.lastName" required>
      </div>
    </div>
    <div class="flex">
      <div class="inputs label">
        <label>Gender</label>
        <div class="radio">
          <div class="form-check form-check-inline">
              <input class="form-check-input" v-model="payload.gender"  type="radio" name="inlineRadioOptions" id="femaleGender"
                value="Female" checked />
              <label class="form-check-label" for="femaleGender" style="color: #1B1B1B;">Female</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" v-model="payload.gender"  type="radio" name="inlineRadioOptions" id="maleGender"
                value="Male" />
              <label class="form-check-label" for="maleGender" style="color: #1B1B1B;">Male</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" v-model="payload.gender"  type="radio" name="inlineRadioOptions" id="otherGender"
                value="Other" />
              <label class="form-check-label" for="otherGender" style="color: #1B1B1B;">Other</label>
            </div>
          </div>
      </div>
        <div class="input">
          <label>Cellphone</label>
          <input type="text" v-model="payload.cellphoneNumber" maxlength="12" required>
        </div>
    </div>
    <div class="flex">
      <div class="input">
        <label>Email</label>
        <input type="email" v-model="payload.emailAdd" required>
      </div>
      <div class="input">
          <label>Password</label>
          <input type="password" v-model="payload.userPass" required>
      </div>
    </div>
    <div class="form-control-wrapper">
      <label class="form-control bg-gradient" v-show="userMsg">{{userMsg}}</label>
    </div>
    <a href="/login">
      <div class="login">
        <p>Already have an account?</p>
      </div>
    </a>
    <button type="submit" v-on:click.prevent="signUp(payload)" v-if="this.$store.state.userAuth === false">Register</button>
</form>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore  } from 'vuex';
export default {
  setup() {
    const payload = {
        firstName: '',
        lastName: '',
        gender: '',
        cellphoneNumber: '',
        emailAdd: '',
        userPass: ''
      }
    const store = useStore()
    
    const signUp = (payload)=> {
      console.log(payload);
        store.dispatch("register", payload),
        store.dispatch("fetchUsers");
    }
    const userMsg = 
    computed( ()=>store.state.message )
    return {
      payload,
      userMsg,
      signUp
    }
  }
}
</script>
<style scoped>
form{
  margin: auto;
  width: 45rem;
  height: 38rem;
  background-color: #c3c3c3;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 30px;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}
.flex{
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  padding: 15px 0px;
}
h1{
  font-size: 50px;
  color: #1B1B1B;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 3px;
  margin-bottom: 5%;
  opacity: 0.7;
}
.input label{
  font-size: 20px;
  color: #1B1B1B;
  opacity: 0.8;
  text-shadow: 2px 2ox 4px rgba(0, 0, 0, 0.2);
}
.inputs label{
  font-size: 20px;
  color: #1B1B1B;
  opacity: 0.8;
  text-shadow: 2px 2ox 4px rgba(0, 0, 0, 0.2);
}
.input input{
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
.radio{
  padding-top: 10px;
}
button{
  width: 40%;
  height: 10%;
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
button:active{
  transform: scale(0.95);
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
  