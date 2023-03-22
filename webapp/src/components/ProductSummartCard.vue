<template>
    <div class="card">
        <h3>{{items?.sup_name}}</h3>
        <h5 class="price">Price: R{{items?.sup_price.toFixed(2)}}</h5>
    </div>
</template>
<script>
export default {
    props: ['items']
}
</script>
<style>
    
</style>