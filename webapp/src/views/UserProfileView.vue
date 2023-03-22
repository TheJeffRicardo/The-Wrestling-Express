<template>
    <div class="color">
      <img class="pics" src='https://i.postimg.cc/3rZ0H0D8/profile-Image.png' alt="picofyou">
      <h3>JeffRicardo</h3>
      <p>Web Developer and WordSmith</p>
      <div class="white">
        <p>Learn more about me</p>
      </div>
    </div>
  </template>
  <script>
  import {computed} from '@vue/runtime-core';
  import { useStore  } from 'vuex';
  export default {
    setup() {
        const store = useStore()
        store.dispatch("fetchUsers")
        const userFetch = computed( ()=>store.state.users)
        return {
          userFetch
        }
      }
  }
  </script>
  <style>
   
  </style>
  