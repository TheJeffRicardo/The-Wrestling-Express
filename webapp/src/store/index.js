import axios from 'axios'
import { createStore } from 'vuex'
import Cookies from 'js-cookie'

const api = 'https://the-wrestling-express.onrender.com/'

export default createStore({
  state: {
    users: null,
    user: null,
    userAuth: false,
    products: null,
    product: null,
    cart: [],
    token: null,
    showSpinner: false,
    message: null,
    counter : 0,
    asc: true
  },
  getters(state) {
    return state.showSpinner
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value
      state.userAuth = true
      localStorage.setItem("user", JSON.stringify(state.user))
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, value) {
      state.product = value
    },
    setToken(state, value){
      state.token = value
    },
    setSpinner(state, value) {
      state.showSpinner = value
    },
    setMessage(state, value) {
      state.message = value
    },
    setCounter(state, value){
      state.counter = value
    },
    setLogout(state, value){
      state.logout = value
      state.userAuth = false
      state.user = null
      state.token = null
    },
    addToCart(state, product) {
      
    },
    filterByPrice: (state) => {
      state.products.sort((a, b) => {
        return a.sup_price - b.sup_price
      })
      if(!state.asc){
        state.products.reverse()
      }
      state.asc = !state.asc
    }
  },
  actions: {
    async login(context, payload) {
      console.log('This might take a minute')
      try{
      const res = await axios.post(`${api}login`, payload)
      const {result, jwToken, msg, err} = res.data
      if(result){
        context.commit('setUser', result)
        context.commit('setMessage', msg)
        context.commit('setToken', jwToken)
        Cookies.set('token-of-user', jwToken)
      }else{
        context.commit('setMessage', err)
      }
      }catch(error){
        console.error(error);
      }
    },
    async register(context, payload) {
        const res = await axios.post(`${api}register`, payload)
        console.log(res, 'This may take a while');
        let {msg, err} = res.data
          if(msg){
            context.commit('setMessage', msg)
          }else{
            context.commit('setMessage', err)
          }
    },
    async fetchUsers(context) {

      const res = await axios.get(`${api}users`)
      let {results, err} = await res.data
      if(results){
        context.commit('setUsers', results)
      }else{
        context.commit('setMessage', err)     
      }
    },
    async fetchUser(context, id) {
      const res = await axios.get(`${api}user/${id}`)
      let {results, err} = await res.data
      if(results){
        context.commit('setUser', results[0])
      }else{
        context.commit('setMessage', err)
      }
    },
    async updateUser(context, id, payload) {
      const res = await axios.put(`${api}user/${id}`, payload)
      let {result, msg, err} = await res.data
      if(result){
        context.commit('setUser', result[0])
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    async deleteUser(context, id) {
      const res = await axios.delete(`${api}user/${id}`)
      let {msg, err} = await res.data
      if(msg){
        context.commit('fetchUsers')
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    async fetchProducts(context) {
      const res = await axios.get(`${api}items`)
      let {results, err} = await res.data
      if(results){
        context.commit('setProducts', results)
      }else{
        context.commit('setMessage', err)
      }
    },
    async fetchProduct(context, id) {
      const res = await axios.get(`${api}item/${id}`)
      let {results, err} = await res.data
      if(results){
        context.commit('setProduct', results[0])
      }else{
        context.commit('setMessage', err)
      }
    },
    async updateProduct(context, id) {
      const res = await axios.put(`${api}item/${id}`)
      let {msg, err} = await res.data
      if(msg){
        context.commit('fetchProducts')
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    async deleteProduct(context, id) {
      const res = await axios.delete(`${api}item/${id}`)
      let {msg, err} = await res.data
      if(msg){
        context.commit('fetchProducts')
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    increaseCounter(context) {
      if(this.state.counter < 5){
        context.commit('setCounter', ++this.state.counter)
      }
    },
    decreaseCounter(context) {
      if(this.state.counter > 0){
        context.commit('setCounter', --this.state.counter)
      }
    },
    logOut(context){
      context.commit('setLogout')
    },
    async addItemToCart(context, id){
      const res = await axios.post(`${api}user/${id}/cart`)
      let {result, msg, err} = await res.data
      if(result){
        context.commit('setUser', result[0])
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    async fetchItemFromCart(context) {
      const res = await axios.get(`${api}user/${id}/cart`)
      let {results, err} = await res.data
      if(results){
        context.commit('setProducts', results)
      }else{
        context.commit('setMessage', err)
      }
    },
  },
  modules: {
  }
})