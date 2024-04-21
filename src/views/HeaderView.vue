<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <div class="headerview">
        <div id="logo">
            <img src="" alt="myshoop.com">
        </div>
        <div class="mine">
            <div class="hedar">
                <div id="up">
                    <div id="search-container">
                        <input type="text" id="search-input" placeholder="Search...">
                        <button id="search-button"><i class="fa fa-search"></i></button>
                    </div>
                    <div id="user">
                        <a href="">giris yap</a>
                        <a href="">uye ol</a>
                    </div>
                </div>
                <MineBar></MineBar>
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
