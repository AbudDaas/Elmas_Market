<template>
  <li class="cart-item">
    <span>{{ item.name }} - {{ item.price }}</span>
    <button @click="removeItem">Remove</button>
  </li>
</template>

<script>
export default {
  name:"CartItem",
  props: ['item'],

  methods: {
    removeItem() {
      this.$emit('removeItem');
    }
  }
};
</script>

<style scoped>
.cart-item {
  margin-bottom: 10px;
}

button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #dc3545;
  color: rgb(2, 6, 247);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #c82333;
}
</style>
