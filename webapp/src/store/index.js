import axios from 'axios'
import { createStore } from 'vuex'
import Cookies from 'js-cookie'

const api = 'https://the-wrestling-express.onrender.com/'

export default createStore({
  state: {
    users: null,
    user: null,
    userAuth: false,
    logOut: null,
    products: null,
    product: null,
    cart: [],
    token: null,
    showSpinner: false,
    message: null,
    counter : 0,
    total: 0,
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
    setLogout(state, value){
      state.logOut = value
      state.userAuth = false
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
    setTotal(state, value){
      state.total = value
    },
    setCart(state, value) {
      state.cart = value
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
      context.commit('setMessage', 'This may take a while...')
      try{
        const res = await axios.post(`${api}login`, payload)
      const {result, jwToken, msg, err} = res.data
      if(result){
        context.commit('setUser', result)
        context.commit('setMessage', msg)
        context.commit('setToken', jwToken)
        Cookies.set('myUser', jwToken)
        Cookies.set('userInfo', result.user_id)
      }else{
        context.commit('setMessage', err)
      }
    }catch(error){
      console.error(error);
      context.commit('setMessage', error)
      }
    },
    async logout(context) {
        context.commit('setUser', null)
        context.commit('setToken', null)
        Cookies.remove('myUser')
        location.reload()
    },
    async register(context, payload) {
      context.commit('setMessage', 'This may take a while')
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
    async fetchItemsFromCart(context) {
      let user = Cookies.get('userInfo')
      const res = await axios.get(`${api}user/${user}/cart`)
      let {results, err} = await res.data
      if(results){
        context.commit('setCart', results)
        console.log(results.user_id)
      }else{
        context.commit('setMessage', err)
      }
    },
    async addItemToCart(context, payload){
      let user = Cookies.get('userInfo')
      context.commit('setMessage', 'This may take a while')
      console.log('This may take a while')
      const res = await axios.post(`${api}user/${user}/cart`, payload)
      let {result, msg, err} = await res.data
      if(result){
        context.commit('setCart', result)
        context.commit('setMessage', msg)
        Cookies.set('cartDetails', result)
      }else{
        context.commit('setMessage', err)
      }
    },
  },
  modules: {
  }
})