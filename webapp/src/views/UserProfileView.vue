<template>
  <div class="color">
    <img class="pics" src='https://i.postimg.cc/x1Vq0NGb/6dd9cf99b1c96f1bb4ebccb1de70030f.png' alt="picofyou">
    <h3>FullName: {{fetch.firstName}} {{fetch.lastName}}</h3>
    <p>Email: {{fetch.emailAdd}}</p>
    <div class="white">
      <p>Gender: {{fetch.gender}}</p>
      <p>Cell Number: {{fetch.cellphoneNumber}}</p>
    </div>
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
.color{
  background-color: #333;
  text-align: center;
  padding: 40px 90px;
  color: #fff;
  position: relative;
  border-radius: 20px;
  width: 40%;
  margin: auto;
  margin-top: 25px;
}
.color h3{
  padding: 15px;
  font-family: Fredoka One;
}
.color p{
  font-family: Fredoka One;
}
.pics{
  width: 150px;
  border-radius: 50%;
  background-color: #fff;
  padding: 6px;
}
.white{
  background-color: #fff;
  border: 2px solid #999;
  color: #555;
  padding: 60px 0;
  margin-right: -90px;
  margin-left: -90px;
  margin-bottom: -40px;
  border-radius: 20px;
}
</style>
