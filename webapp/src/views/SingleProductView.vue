<template>
  <div class="container">
    <div class="product">
      <div class="img">
        <img :src=items?.sup_URL alt="picOfSuperstar">
      </div>
      <div class="details">
        <h1>Name: {{items?.sup_name}}  </h1>
        <h2>Nickname: {{items?.sup_nickname}}</h2>
        <h2><i class="bi bi-music-note"></i>Song<i class="bi bi-music-note"></i> {{items?.sup_song}}</h2>
        <h3>Finisher: {{items?.sup_finisher}}</h3>
        <h3>Price: R{{items?.sup_price}}</h3>
        <h4>World Champion: {{items?.world_champ}}</h4>
        <h4>Mid Card Champion: {{items?.mid_card_champ}}</h4>
        <h4>Tag Team Champion: {{items?.tag_champ}}</h4>
        <div class="quantity-select">
          <h4>Quantity:</h4>
          <button @click.prevent="decrease"><i class="bi bi-dash"></i></button>
          <input type="text" placeholder="0" :value="counter" readonly>
          <button @click.prevent="increase"><i class="bi bi-plus-lg"></i></button>
        </div>
        <button class="button" v-on:click.prevent="addToCart(user, items)">Add to Cart  <i class="bi bi-cart4"></i></button>
        <router-link :to="{name: 'product-'}" class="p-5" style="text-decoration: none; color: #333;"><i class="bi bi-arrow-left"></i>Back To Shop</router-link>
      </div>
    </div>
  </div>

</template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore  } from 'vuex';
import Cookies from 'js-cookie'
import Spinner from '@/components/SpinnerComp.vue'
export default {
  name: 'single-product',
  components:{
    Spinner
  },
  setup() {
      const store = useStore()
      store.dispatch("fetchItemsFromCart")
      let user = Cookies.get('userInfo')
      const addToCart = (items)=> {
        store.dispatch("addItemToCart", {
          user_id: user,
          sup_id: items?.sup_id
        })
      }
      const userMsg = computed( ()=>store.state.message )
      const items = computed( ()=> store.state.product)
      return {
        items,
        addToCart,
        userMsg
      }
  },
  data(){
    return {
      details: this.$route.params
    }
  },
  computed: {
    counter(){
      return this.$store.state.counter
    }
  },
  methods: {
    increase() {
      this.$store.dispatch('increaseCounter')
    },
    decrease() {
      this.$store.dispatch('decreaseCounter')
    },
    addItemToCart(){
      this.$store.dispatch('addItemToCart')
    }
  },
  mounted() {
    this.$store.dispatch("fetchProduct", this.$route.params.id)
  }
  }
</script>
<style scoped>
  .container{
    width: 100%;
    height: 72vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product{
    display: flex;
  }
  .img{
    flex-basis: 47%;
    background-color: #241e20;
    transform: scale(1.08);
    box-shadow: -10px 5px 10px 10px rgba(0, 0, 0, 0.1);
  }
  .img img{
    width: 100%;
    padding-top: 115px;
  }
  .details{
    flex-basis: 53%;
    background-color: #fff;
    padding: 40px;
    padding-left: 60px;
    box-shadow: -10px 5px 10px 10px rgba(0, 0, 0, 0.1);
    font-size: 13px;
    font-weight: 500;
    color: #777;
  }
  .details h1{
    color: #333;
    font-size: 35px;
  }
  .details h2{
    color: #555;
    font-size: 30px;
    font-weight: 600; 
  } 
  .details h3{
    color: #555;
    font-size: 25px;
    font-weight: 600; 
  } 
  .details .button {
      font-family: monospace;
      font-size: 1rem;
      color: #FAFAFA;
      padding: 10px 20px;
      border-radius: 10px;
      border: 2px solid #FAFAFA;
      background: #666;
      cursor: pointer;
      margin: 5px 0;
      transition: 0.1s;
   }
  .details .button:hover {
      transform: scale(1.04);
   }
   
   .details .button:active {
      box-shadow: none;
      transform: scale(0.95);
   }
  .quantity-select button{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #fff;
    transition: 0.1s;
  }
  .quantity-select button:hover{
    transform: scale(0.93);
    color: #fff;
    background-color: #333;
  }
  .quantity-select button i{
    font-size: 25px;
  }
  .quantity-select input{
    text-align: center;
    border: none;
    outline: none;
    width: 15%;
    font-size: 30px;
  }
</style>