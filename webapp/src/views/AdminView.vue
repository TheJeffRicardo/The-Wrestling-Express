<template>
  <div class="structure">
    <div class="btnh2"><h2>User's Table</h2><AddUser></AddUser></div>
    <Spinner class="spinner" v-if="isLoading" />
    <div v-else>
    <div class="table">
      <table class="table">
        <thead class="table-light">
          <tr>
            <th scope="col">id</th>
            <th scope="col">firstName</th>
            <th scope="col">lastName</th>
            <th scope="col">gender</th>
            <th scope="col">cellphoneNumber</th>
            <th scope="col">emailAdd</th>
            <th scope="col">userPass</th>
            <th scope="col">joinDate</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        
        <tbody class="table-light">
          <tr v-for="user in users" :key="user">
              <td>{{user.user_id}}</td>
              <td>{{user.firstName}}</td>
              <td>{{user.lastName}}</td>
              <td>{{user.gender}}</td>
              <td>{{user.cellphoneNumber}}</td>
              <td>{{user.emailAdd}}</td>
              <td>***{{user.userPass}}***</td>
              <td>{{user.joinDate}}</td>
              <td><button type="button" class="btn btn-outline-danger" @click.prevent="deleteUser(user.user_id)"><i class="bi bi-trash"></i>Delete</button>
              </td>
              <td><UpdateUser :userData = user></UpdateUser></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="structures">
    <div class="btnh2"><h2>Product's Table</h2><AddProduct></AddProduct></div>
    <Spinner class="spinner" v-if="isLoading" />
    <div v-else>
      <div class="table">
        <table class="table">
          <thead class="table-light">
            <tr>
              <th scope="col">id</th>
              <th scope="col">superstar</th>
              <th scope="col">song</th>
              <th scope="col">finisher</th>
              <th scope="col">price</th>
              <th scope="col">imgURL</th>
              <th scope="col">Delete</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          
          <tbody class="table-light">
            <tr v-for="item in items" :key="items">
              <td>{{item.sup_id}}</td>
              <td>{{item.sup_name}}</td>
              <td><i class="bi bi-music-note"></i>{{item.sup_song}}<i class="bi bi-music-note"></i></td>
              <td>{{item.sup_finisher}}</td>
              <td>R{{item.sup_price}}</td>
              <td><img :src=item.sup_URL alt="picsofsuperstars" style="width: 8rem;"></td>
              <td><button type="button" class="btn btn-outline-danger" @click.prevent="deleteProduct(item.user_id)"><i class="bi bi-trash"></i>Delete</button>
              </td>
              <td><button type="button" class="btn btn-outline-warning" @click.prevent="updateProduct(item.userID)">Update</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  </template>
<script>
import {computed} from '@vue/runtime-core';
import { useStore  } from 'vuex';
import AddUser from '@/components/AddUser.vue'
import AddProduct from '@/components/AddProduct.vue'
import UpdateUser from '@/components/UpdateUser.vue'
import Spinner from '@/components/SpinnerComp.vue'
export default {
  components: {
    AddUser,
    AddProduct,
    UpdateUser,
    Spinner

  },
    setup() {
      const store = useStore()
      store.dispatch("fetchUsers")
      store.dispatch("fetchProducts")
      const deleteUser = (id)=> {
        alert(`You have delete successfully`)
        store.dispatch('deleteUser', id)
      }
      const deleteProduct = (id)=> {
          alert('You have deleted successfully')
          store.dispatch('deleteProduct', id)
        }
      const userMsg = 
        computed( ()=>store.state.message )
      const users = computed( ()=>store.state.users)
      const items = computed( ()=>store.state.products)
        
      return {
        users,
        items,
        deleteUser,
        deleteProduct,
        userMsg
      }
    },
    data () {
      return {
        isLoading: true,
      }
    },
    created(){
      setTimeout(()=>{
        this.isLoading = false
      },1000)
    }
}
</script>
<style scoped>
.btnh2{
  display: flex;
  justify-content: space-between;
}
</style>