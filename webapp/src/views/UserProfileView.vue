<template>
    <div class="color" v-for="user in userFetch" :key="user">
      <img class="pics" src='https://i.postimg.cc/3rZ0H0D8/profile-Image.png' alt="picofyou">
        <h5>{{user.firstName}}</h5>
        <h5>{{user.lastName}}</h5>
        <h5>{{user.gender}}</h5>
        <h5>{{user.cellphoneNumber}}</h5>
        <h5>{{user.emailAdd}}</h5>
    </div>
  </template>
  <script>
  import {computed} from '@vue/runtime-core';
  import { useStore  } from 'vuex';
  export default {
    setup() {
        const store = useStore()
        store.dispatch("fetchUser")
        const userFetch = computed( ()=>store.state.user)
        return {
          userFetch
        }
      }
  }
  </script>
  <style>
   
  </style>
  