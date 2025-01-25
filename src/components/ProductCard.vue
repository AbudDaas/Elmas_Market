<template>
    <div class="product-card">
      <div class="card-inner">
        <div class="card-front">
          <img :src="product.image" :alt="product.name" />
          <h2>{{ product.name }}</h2>
        </div>
        <div class="card-back">
          <p>{{ product.price }}</p>
          <button @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:'ProductCard',
    props: ['product'],
    methods: {
      addToCart() {
        this.$emit('addToCart', this.product);
      }
    }
  };
  </script>
  
<style scoped>
@import '../style/Prod.css'
</style>
  