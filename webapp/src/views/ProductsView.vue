<template>
<div class="container">
  <div class="d-flex justify-content-evenly">
    <div class="search d-flex">
      <input type="text" class="" placeholder="Search Name" v-model="searching">
      <i class="bi bi-search"></i>
    </div>
    <button class="sort" @click.prevent="sortPrice">Sort by Price</button>
  </div>
  <Spinner class="spinner" v-if="isLoading" />
  <div v-else>
    
    <div class="row" v-if="filtering.length">
      <div class="card g-4" v-for="items in filtering" :key="items" style="width: 18rem;">
        <img :src=items.sup_URL alt="pictures of desserts">
        <div>
          <h2>({{items.sup_nickname}}) <br> {{items.sup_name}}</h2>
          <p>World Champions Won: {{items.world_champ}}</p>
          <p>Mid Card Champions Won: {{items.mid_card_champ}}</p>
          <p>Tag Team Champions Won: {{items.tag_champ}}</p>
        </div>    
       <router-link :to="{name: 'single-product', params: {id: items.sup_id}}"><button v-if="this.$store.state.userAuth">View More</button></router-link>
      </div>
    </div>
    <div v-else class="display-6"><img src="https://i.postimg.cc/Gtgp9gLY/unnamed.gif" alt="stone cold steve austin"><pre style="font-weight: 600;">Can't find the Name 
because stone cold said so</pre></div>
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
      store.dispatch("fetchProducts")
      const products = computed( ()=>store.state.products)
      return {
        products
      }
    },
    data () {
      return {
        searching: '',
        isLoading: true
      }
    },
    created(){
      setTimeout(()=>{
        this.isLoading = false
      },2000)
    },
    computed: {
      filtering() {
      if(this.searching.trim().length > 0){
        return this.products.filter((name)=> name.sup_name.toLowerCase().includes(this.searching.trim().toLowerCase()))
      }
      return this.products
    }},
    methods: {
      sortPrice(){
        this.$store.commit('filterByPrice')
      }
    },
    mounted () {
      this.$store.dispatch('fetchProducts')
    }
}
</script>
<style scoped>
h1, h2, h3, h4, h5{
  color: #2c3e50;
}
.row{
  display: flex;
  justify-content: space-evenly;
}
input {
  width: 100%;
  max-width: 220px;
  height: 45px;
  padding: 12px;
  border-radius: 12px 0px 0px 12px;
  border: none;
  outline: none;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 0px 20px -18px;
}

input:hover {
  border: none;
  box-shadow: 0px 0px 20px -17px;
}

input:active {
  transform: scale(0.95);
}

input:focus {
  border: none;
}
.search i{
  background-color: #c3c1c0;
  margin: auto;
  padding: 10.5px;
  width: 50px;
  border-radius: 0px 12px 12px 0px;
}
.sort{
  border: none;
  outline: none;
  border-radius: 10px 0px 10px 0px ;
  background-color: #777;
  transition: 0.1s;
}
.sort:hover{
  background-color: #c3c1c0;
}
.sort:active{
  transform: scale(0.95);
}
.card {
  width: 17em;
  height: 40.5em;
  background-color: #c3c3c3;
  transition: 1s ease-in-out;
  clip-path: polygon(30px 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% 30px);
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
}

.card p {
  font-weight: 400;
  color: #1B1B1B;
  display: block;
  text-align: center;
  font-size: 1em;
}
.card h2 {
  font-weight: bold;
  color: #1B1B1B;
  text-align: center;
  display: block;
  padding-top: 1em;
  font-size: 1.7em;
}

.card button {
  padding: 0.8em 1.7em;
  display: block;
  margin: auto;
  border-radius: 25px;
  border: none;
  margin-top: 2em;
  font-weight: bold;
  background: #ffffff;
  color: #1B1B1B;
  transition: 0.3s;
}

.card button:hover {
  background: #1B1B1B;
  color: #c3c3c3;
}
.card button:active {
  transform: scale(0.95);
}
.card a {
  text-decoration: none;
}

</style>
  