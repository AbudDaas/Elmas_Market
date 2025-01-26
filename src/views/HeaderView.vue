<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="headerview">
        <div id="logo">
            <a href="#">MyShop.com</a>
        </div>
        <div class="mine">
            <div class="hedar">
                <div id="up">
                    <div id="search-container">
                        <form class="example" action="action_page.php">
                            <input type="text" id="search-input" placeholder="Search.." name="search">
                            <button type="submit" id="search-button"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <div id="user">
                        
                        <a href="">giris yap</a>
                        <a href="">uye ol</a>
                        <!-- <ProductList @addToCart="addToCart" />
                        <CT/> -->
                    </div>
                </div>
                
            </div>
        </div>
        <div class="mine-bar">
            

        </div>
    </div>
</template>
<script>
// import ProductList from '@/components/ProductList.vue';


export default {
    name:"HeaderView",
    components: {  }
}
</script>
<style>
@import "../style/HeaderView.css";

</style>
