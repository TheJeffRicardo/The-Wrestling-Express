<template>
<div class="container">
    <nav>
        <img src="https://i.postimg.cc/HLzq9MPn/giphy.gif" alt="championship">
        <ul class="routes">
            <li><router-link to="/"><i class="bi bi-house-door"></i></router-link></li>
            <li><router-link to="/admin"><i class="bi bi-person-check"></i></router-link></li>
            <li><router-link to="/product"><i class="bi bi-box-seam"></i></router-link></li>
            <li><router-link to="/login"><i class="bi bi-box-arrow-in-right"></i></router-link></li>
            <li><router-link to="/registration"><i class="bi bi-clipboard-check"></i></router-link></li>
            <li><router-link to="/userprofile"><i class="bi bi-person-circle"></i></router-link></li>
            <li> <router-link to="/contact"><i class="bi bi-envelope-at"></i></router-link></li>
            <button @click.prevent="logout" v-if="this.$store.state.userAuth">Logout</button>
        </ul>
    </nav> 
</div>            
</template>
<script>
export default {
    name: 'nav-bar',
    methods: {
        logout(){
            console.log('Logging Out');
        }
    }
}
</script>
<style scoped>
.container{
    position: sticky;
    top: 0;
}
nav{
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
}
nav img{
    width: 7rem;
}
nav ul li{
    list-style: none;
    display: inline-block;
    padding: 30px 25px;
    margin: 10px;
    font-size: 20px;
    font-weight: 500;
    color: #777;
    cursor: pointer;
    position: relative;
}
nav ul li:hover{
    color: #777;
}
nav ul li a{
    color: #ffffff;
}
nav ul li a:after{
    position: absolute;
    top: 60%;
    left: 5%;
    content: "";
    width: 0px;
    height: 30%;
    transition: 0.3s;
}
nav ul li a:hover:after{
    width: 70px;
}

nav ul li:nth-child(1) a:after{
    background-color: #e91e63;
    content: "Home";
    content-visibility: hidden;
}
nav ul li:nth-child(2) a:after{
    background-color: #8F43EE;
    content: "Admin";
    content-visibility: hidden;
}
nav ul li:nth-child(3) a:after{
    background-color: #009688;
    content: "Products";
    content-visibility: hidden;
}
nav ul li:nth-child(4) a:after{
    background-color: #E21818;
    content: "Login";
    content-visibility: hidden;
}
nav ul li:nth-child(5) a:after{
    background-color: #00235B;
    content: "Registration";
    content-visibility: hidden;
}
nav ul li:nth-child(6) a:after{
    background-color: #8D7B68;
    content: "User";
    content-visibility: hidden;
}
nav ul li:nth-child(7) a:after{
    background-color: #E7B10A;
    content: "Contact";
    content-visibility: hidden;
}

nav ul li:nth-child(3) a:hover:after{
    width: 95px;
    left: -10%;
}
nav ul li:nth-child(5) a:hover:after{
   width: 130px;
   left: -37%;
}
nav ul li:nth-child(7) a:hover:after{
    width: 85px;
    left: -10%;
}

nav ul li:nth-child(1) a.router-link-exact-active:after {
    background-color: #e91e63;
    content: "Home";
    width: 70px;
}
nav ul li:nth-child(2) a.router-link-exact-active:after {
    background-color: #8F43EE;
    content: "Admin";
    width: 70px;
}
nav ul li:nth-child(3) a.router-link-exact-active:after {
    background-color: #009688;
    content: "Products";
    width: 95px;
    left: -10%;
}
nav ul li:nth-child(4) a.router-link-exact-active:after {
    background-color: #E21818;
    content: "Login";
    width: 95px;
    left: -10%;
}
nav ul li:nth-child(5) a.router-link-exact-active:after {
    background-color: #00235B;
    content: "Registration";
    width: 130px;
    left: -37%;
}
nav ul li:nth-child(6) a.router-link-exact-active:after {
    background-color: #8D7B68;
    content: "User";
    width: 95px;
    left: -10%;
}
nav ul li:nth-child(7) a.router-link-exact-active:after {
    background-color: #E7B10A;
    content: "Contact";
    width: 85px;
    left: -10%;
}
</style>