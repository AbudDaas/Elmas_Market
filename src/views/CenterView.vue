<template>
    <div class="product">
        <Carousel />
        <div class="product_place">
            <FlipCard
            front="CupCake"
            back="Price: 10TL, Calories: 400KJ"
            img_name="popkek"
            />
            <FlipCard
            front="pp"
            back="qq"
            FaceComponent="popkek"
            />
            <FlipCard
            front="cc"
            back="hh"
            img_name="popkek"
            />
            <FlipCard
            front="cc"
            back="hh"
            img_name="popkek"
            />
        </div>
    </div>
</template>
<script>
import FlipCard from '../components/FlipCard.vue';
import Carousel from '../components/Carousel.vue';
export default {
    name: "CenterView",
    components:{
        FlipCard,
        Carousel,
    }
}
</script>
<style>
@import "../style/css/CenterView.css"
</style>