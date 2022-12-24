<template>

  <div id="app">
    <header>MENU</header>
  </div>

  <p>Welcome to elmasmarket</p>
  <div class="cards">
    <FlipCard front="Hi" back="Hello" />
    <FlipCard front="Merhaba" back="Nasilsin?"  />
    <div class="flipcard">
      <FlipCard front="popkek" back="fiat:5"  />
      <ul><img src="./assets/popkek.png" alt=""></ul>
    </div>
    
  </div>
</template>

<script>
import FlipCard from "./components/FlipCard.vue";

export default {
  name: "App",
  components: {
    FlipCard,
    data() {
      return {
        productes: [
          {
            name: "popkek",
            Image:"./assets/popkek.png"
          }
        ]
      }
    },

  },
};
</script>

<style>
@import "./css/App.css";
</style>
