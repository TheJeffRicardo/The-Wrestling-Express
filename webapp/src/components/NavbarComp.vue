<template>
<div class="container-fluid whitey p-0 mx-auto">
    <div class="container-lg p-0 px-lg-3">
        <nav class="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-around" id="navbarCollapse">
                <div class="navbar-nav ml-auto py-0">
                    <router-link to="/">Home</router-link> 
                    <router-link to="/admin">Admin</router-link> 
                    <router-link to="/product">Products</router-link> 
                    <router-link to="/single-product">Single</router-link> 
                </div>
                <h1 class="m-0 display-5 milky"></h1>
                <div class="navbar-nav mr-auto py-0">
                    <router-link to="/login">Login</router-link> 
                    <router-link to="/registration">Registration</router-link> 
                    <router-link to="/userprofile">User Profile</router-link> 
                    <router-link to="/contact">Contact Form</router-link> 
                </div>
            </div>
        </nav>
    </div>
</div>
</template>
<script>
export default {
    name: 'nav-bar'
}
</script>
<style>
    .milky{
        font-family: 'Pacifico';
    }
    .pink{
        background-color: #e83e8c;
    }
    .blueNav{
        height: 6vh;
    }
    .blueNav a:hover{
        font-size: 1.2rem;
        transition: 0.2s;
    }
    .container-lg{
        z-index: 9;
        margin: -30px;
    }
    .navbar{
        margin-bottom: 20%;
        border-radius: 20px;
    }
    .navbar a{
        text-decoration: none;
    }
    .navbar a:hover{
        text-decoration: dotted;
    }
    .navbar-nav{
        gap: 20px;
    }
    .milky{
        color: #e83e8c;
    }
    .whitey{
        position: sticky;
        top: 0;
    }
</style>