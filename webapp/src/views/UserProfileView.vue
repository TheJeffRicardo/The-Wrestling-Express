<template>
  <div class="color">
    <img class="pics" src='https://i.postimg.cc/3rZ0H0D8/profile-Image.png' alt="picofyou">
      <h5>{{fetch.firstName}}</h5>
      <h5>{{fetch.lastName}}</h5>
      <h5>{{fetch.gender}}</h5>
      <h5>{{fetch.cellphoneNumber}}</h5>
      <h5>{{fetch.emailAdd}}</h5>
  </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore  } from 'vuex';
export default({
  setup() {
    const store = useStore()
    const fetch = computed( ()=>store.state.user)
    return{
      fetch
    }
  }
})
</script>
<style>
  .color img{
  height: 50%;
  width: 50%;
  border-radius: 100%;
  }
</style>
