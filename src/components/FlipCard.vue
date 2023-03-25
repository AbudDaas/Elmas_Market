<template>


<div id="flashcard-app" class="container" @click="toggleCard()">
  <transition name="flip">

    <p v-bind:key="flipped" class="card">
      {{ flipped ? back : front }}
      
    </p>
  </transition>
</div>


</template>

<script>
import FaceComponent from '../components/FaceComponent.vue';
export default {
    name:"FlipCard",
    components:{
      FaceComponent,
    },
    data(){
      return {
        flipped: true,
      };
    },
    props:{
      front:{
        type: String,
        required: true,
      },
      back:{
        type: String,
        required: true,
      },
      
    },
    methods: {
      toggleCard() {
        this.flipped = !this.flipped;
        
      },
    },

}
</script>

<style>
  @import "../style/css/FlipCard.css";    
</style>]