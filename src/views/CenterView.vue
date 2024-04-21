<template>
    <div class="product">
        <Carousel />
        <div class="product_place">
            <FlipCard
            front="CupCake"
            back="Price: 10TL, Calories: 400KJ"
            
            />
            <FlipCard
            front="pp"
            back="qq"
            
            />
            <FlipCard
            front="cc"
            back="hh"
            
            />
            <FlipCard
            front="cc"
            back="hh"
            
            />
        </div>
    </div>
</template>

  
<script>
  // Import the FlipCard component
    import FlipCard from '../components/FlipCard.vue';
    import Carousel from '../components/Carousel.vue';


  
  export default {
    name: "CenterView",
    components:{
        FlipCard,
        Carousel,
    },
    data() {
      return {
        frontContent: {
          text: "pp",
          image: "./src/assets/img/popkek.png",
        },
        backContent: {
          text: "qq",
          image: "./src/assets/img/popkek.png",
        },
      };
    },
  };
</script>
  
<!-- import FlipCard from '../components/FlipCard.vue';
import Carousel from '../components/Carousel.vue';
export default {
    name: "CenterView",
    components:{
        FlipCard,
        Carousel,
    }
} -->

<style>
@import "../style/css/CenterView.css"
</style>