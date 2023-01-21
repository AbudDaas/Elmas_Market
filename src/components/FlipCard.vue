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
export default {
    name:"FlipCard",
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
  @import "../css/FlipCard.css";    
</style>]