<template>
    <div class="headerview">
        <div id="logo">
            <img src="../assets/logo.jpeg" alt="logo">
        </div>
        <div class="mine">
            <div id="search">
                <form >
                    <input type="text" placeholder="search here">
                    <MineBar></MineBar>
                </form>
            </div>
        </div>
        <div class="mine-bar">
            

        </div>
    </div>
</template>
<script>
import MineBar from '../components/Minebar.vue';
export default {
    name:"HeaderView",
    components: { MineBar }
}
</script>
<style>
@import "../style/css/HeaderView.css";
</style>