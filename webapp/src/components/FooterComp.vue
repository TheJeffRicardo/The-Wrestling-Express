<template>
    <div class="foot">
        <pre>Copyright &copy; {{current}} by The Wrestling Express
            All Rights Reserved
        </pre>
    </div>
</template>
<script>
export default {
    name: 'footer-',
    data(){
        return {
            current : new Date().getFullYear()
        }
    }
}
</script>
<style scoped>
pre {
    text-align: center;
    font-size: 15px;
    overflow-y: hidden;
}
</style>