<template>
    <NavBar/>
    <MineBar/>

</template>

<script>
import NavBar from '../components/NavBar.vue';
import MineBar from '../components/MineBar.vue';

    export default {
    name: "HeaderView",
    components:{
        MineBar,
        NavBar
    }
    };
</script>
<style>
@import "../style/HeaderView.css";

</style>
