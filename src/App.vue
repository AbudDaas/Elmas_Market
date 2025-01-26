<template lang="html">
  <div>
    <HeaderView/>
    <!-- <CT :cart="cart" @removeItem="removeItem" /> -->
    
  </div>
</template>

<script>
import HeaderView from './views/HeaderView.vue';




export default {
  components: {HeaderView, },
  data() {
    return {
      cart: []
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
    removeItem(index) {
      this.cart.splice(index, 1);
    }
  }
};
</script>
