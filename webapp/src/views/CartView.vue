<template>
<Spinner class="spinner" v-if="isLoading" />
        <div v-else>
          </div>

<div class="bg">

	<div class="row mainRow">

		<div class="col-sm-8">
			<div class="card card-cascade wider shadow p-3 mb-5"  v-for="cart in fetch">

				<div class=" overlay text-center">
					<img :src=cart.sup_URL alt="picsofsuperstars" style="width: 15rem;">
					<a>
						<div class="mask rgba-white-slight"></div>
					</a>
				</div>

				<div class="desc">
          <p>{{cart.sup_name}}</p>
          <p>R{{cart.sup_price}}</p>

				</div>
			</div>
		</div>

		<div class="col-sm-4">
			<div class="card card-cascade card-ecommerce wider shadow p-3 mb-5 ">

				<div class="card-body card-body-cascade">

					<div class="card2decs">

						<p class="heading1"><strong>ZABHL90</strong></p>
						<p class="quantity">Qty <span class="float-right text1">30</span></p>
						<p class="subtotal">Subtotal<span class="float-right text1">$1,240</span></p>
						<p class="shipping">Shipping<span class="float-right text1">Free</span></p>
						<p class="promocode">Promo Code<span class="float-right text1">-$100</span></p>
						<p class="total"><strong>Total</strong><span class="float-right totalText1">$<span class="totalText2">1,140</span></span></p>

					</div>

					<div class="payment">

						<p class="heading2"><strong>Payment Details</strong></p>
						<p class="cardAndExpire">Card Number<span class="float-right">Expiry</span></p>
            <p class="cardAndExpireValue">161617161816188<span class="float-right">26/11</span></p>
						<p class="nameAndcvc" style="margin-bottom:-10px;">Cardholder name<span class="float-right">CVC</span></p>
						<p class="nameAndcvcValue">Mr. Example<span class="float-right">010</span></p>

					</div>

					<a href="" class="purchaseLink">
						<div class="card-footer text-center">
							PURCHASE &#8594;
						</div>
					</a>

				</div>
			</div>
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
    created(){
      setTimeout(()=>{
        this.isLoading = false
      },2000)
    },
}
</script>
<style scoped>
.bg{
  width: 100%;
     height:auto;
   min-height:100vh;
 background-color: #cccccc;
     background-size: 100% 100%;
     background-position: top center;
     margin:auto;
 }
 
 .mainRow{
 
   margin-left: 10%;
   margin-right: 10%;
 }
 
 p{
    margin:0px; }
 
 .desc{
   background-color: #f0edeb;
   margin-top: 5%;
   margin-left:0;
   margin-right:50px;
   margin-bottom: 4%;
   }
 
 
   .card-body{
     padding:0;
     margin:0;
       margin-top:10%;
 
   }
   
   div.card.main{
     margin:0px!important;
   }
 
 
 .card{
   padding:0!important;
   margin-top:40px;
 }
 
 
 
 
 .quantity,.shipping,.promocode,.subtotal,.cardAndExpire,.nameAndcvc{
   margin:5%;
   color:#6c757d!important
 }
 
 .heading1{
     margin:5%;
 font-size: 25px;
 }
 
 .heading2{
     margin:5%;
 margin-top:15%;
 font-size: 20px;
 }
 
 .payment{
   background-color: #f0edeb;
   padding:3px;
   margin-top: 15%;
 }
 
 .text1{
 color:black;
 font-weight: 700;
 }
 
 .card-footer{
 background-color: black;
 color:white;
 }
 
 .purchaseLink{
   text-decoration: none;
 }
 
 .row1{
 font-size:12px;
 }
 
 .row2{
   font-weight: 600;
 }
 
 .subRow{
   margin-left:10%;
 margin-bottom: 2%;
   margin-top:5%;
 }
 
 p.cardAndExpireValue,p.nameAndcvcValue{
   margin:5%;
   margin-bottom: 10%;
 font-weight: 600;}
 
 p.nameAndcvc,p.cardAndExpire{
   margin-bottom: -10px;
 }
 
 .total{
   margin:5%;
 }
 
 .totalText{
   font-weight: 700;
 
 }
 .totalText2{
  font-weight: 700;
   font-size:30px;
 }
 
 .card-img-top {
     width: 100%;
     border-top-left-radius: calc(.25rem - 1px);
     border-top-right-radius: calc(.25rem - 1px);
     height: 430px;
 }
</style>