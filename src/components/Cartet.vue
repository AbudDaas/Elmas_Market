
<template lang="">
  <div>
    <h2>Your Cart</h2>
    <ul id="cart-items">
      <CartItem v-for="(item, index) in cart" :key="index" :item="item" @removeItem="removeItem(index)"/>
    </ul>
    <p class="total-price">Total Price: ${{ totalPrice.toFixed(2) }}</p>
  </div>
</template>

<script>
import CartItem from '../components/CartItem.vue';

export default {
  name:'CT',
  components: { CartItem},
  props: ['cart'],
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0);
    }
  },
  methods: {
    removeItem(index) {
      this.$emit('removeItem', index);
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

.total-price {
  font-weight: bold;
  margin-top: 20px;
}
</style>
