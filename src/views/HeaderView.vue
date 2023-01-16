<template>
    <div class="headerview">
        <div id="logo">
            <img src="../assets/logo.jpeg" alt="logo">
        </div>
        <div class="mine">
            
            <div id="search">
                <form action="">
                    <input type="text" placeholder="search here">
                    <input class="search-btn" type="submit" name="submit" value="SEARCH">
                </form>
            </div>
        </div>
        <div class="user">
            <div id="signin">
                <a href="#">sign in</a>
            </div>
                
            <div id="signup">
                <a href="#">sign up</a>
            </div>
            <div id="card">
                <a href="#">Cart</a>
            </div>     
            
        </div>
    </div>
</template>
<script>
export default {
    name:"HeaderView",
}
</script>
<style>
@import "../style/css/HeaderView.css";
</style>