<template>
<!-- <Spinner class="spinner" v-if="isLoading" />
        <div v-else>
          <img :src=cart.sup_URL alt="picsofsuperstars" style="width: 15rem;">
          </div> -->

          <div class="card">
            <div class="row">
                <div class="col-md-8 cart">
                    <div class="title">
                        <div class="row">
                            <div class="col text-dark"><h4><b>Shopping Cart</b></h4></div>
                        </div>
                    </div>    
                    <div class="row border-top border-bottom">
                        <div class="row main align-items-center" v-for="cart in fetch">
                            <div class="col-2"><img :src=cart.sup_URL alt="picsofsuperstars" style="width: 5rem;"></div>
                            <div class="col">
                                <div class="row text-muted"><p>{{cart.sup_name}}</p></div>
                                <div class="row text-muted"><p>R{{cart.sup_price}}</p></div>
                            </div>
                            <div class="col">
                              <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                          </div>
                          <div class="col"><span class="close"> <button>Delete</button>
                            <button>Update</button></span></div>
                        </div>
                    </div>
                    <div class="back-to-shop"><router-link :to="{name: 'product-'}"><i class="bi bi-arrow-left"></i>Back To Shop</router-link></div>
                    
      
                </div>
                <div class="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr>
                    <form>
                        <p>SHIPPING</p>
                        <select>
                          <option class="text-muted">Standard-Delivery- R5.00</option>
                          <option class="text-muted">Standard-Delivery- R15.00</option>
                          <option class="text-muted">Standard-Delivery- R20.00</option>
                          <option class="text-muted">Standard-Delivery- R44.00</option>
                          <option class="text-muted">Standard-Delivery- R100.00</option>
                        </select>
                        <p>GIVE CODE</p>
                        <input id="code" placeholder="Enter your code">
                    </form>
                    <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
                        <div class="col">TOTAL PRICE:</div>
                        <div class="col text-right"><p>R{{totalPrice}}</p></div>
                    </div>
                    <button class="btn">CHECKOUT</button>
                </div>
            </div>
        </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore  } from 'vuex';
import Spinner from '@/components/SpinnerComp.vue'
export default {
  components:{
    Spinner
  },
  setup() {
      const store = useStore()
      store.dispatch("fetchItemsFromCart")
      const fetch = computed( ()=>store.state.cart)
      return {
        fetch
      }
    },
    data () {
      return {
        searching: '',
        isLoading: true
      }
    },
    computed: {
      totalPrice() {
      let itemPrice = 0
      let cartItems = this.$store.state.cart;
      cartItems.forEach((product) => {
        itemPrice += parseFloat(product.sup_price)
      })
      return itemPrice
    },
    },
    created(){
      setTimeout(()=>{
        this.isLoading = false
      },2000)
    },
}
</script>
<style scoped>
body{
  background: #ddd;
  vertical-align: middle;
  font-family: sans-serif;
  font-size: 0.8rem;
  font-weight: bold;
}
.title{
  margin-bottom: 5vh;
}
.card{
  margin: auto;
  max-width: 950px;
  width: 90%;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 1rem;
  border: transparent;
}
@media(max-width:767px){
  .card{
      margin: 3vh auto;
  }
}
.cart{
  background-color: #fff;
  padding: 4vh 5vh;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
}
@media(max-width:767px){
  .cart{
      padding: 4vh;
      border-bottom-left-radius: unset;
      border-top-right-radius: 1rem;
  }
}
.summary{
  background-color: #ddd;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 4vh;
  color: rgb(65, 65, 65);
}
@media(max-width:767px){
  .summary{
  border-top-right-radius: unset;
  border-bottom-left-radius: 1rem;
  }
}
.summary .col-2{
  padding: 0;
}
.summary .col-10
{
  padding: 0;
}.row{
  margin: 0;
}
.title b{
  font-size: 1.5rem;
}
.main{
  margin: 0;
  padding: 2vh 0;
  width: 100%;
}
.col-2, .col{
  padding: 0 1vh;
}
a{
  padding: 0 1vh;
}
.close{
  margin-left: auto;
  font-size: 0.7rem;
}
img{
  width: 3.5rem;
}
.back-to-shop{
  margin-top: 4.5rem;
}
h5{
  margin-top: 4vh;
}
hr{
  margin-top: 1.25rem;
}
form{
  padding: 2vh 0;
}
select{
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1.5vh 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
}
input{
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
}
input:focus::-webkit-input-placeholder
{
    color:transparent;
}
.btn{
  background-color: #000;
  border-color: #000;
  color: white;
  width: 100%;
  font-size: 0.7rem;
  margin-top: 4vh;
  padding: 1vh;
  border-radius: 0;
}
.btn:focus{
  box-shadow: none;
  outline: none;
  box-shadow: none;
  color: white;
  transition: none; 
}
.btn:hover{
  color: white;
}
a{
  color: black; 
}
a:hover{
  color: black;
  text-decoration: none;
}
#code{
  background-image: linear-gradient(to left, rgba(255, 255, 255, 0.253) , rgba(255, 255, 255, 0.185)), url("https://img.icons8.com/small/16/000000/long-arrow-right.png");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: center;
}
</style>