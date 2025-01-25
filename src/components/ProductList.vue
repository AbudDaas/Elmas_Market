<template>
    <div>
      
      <button @click="addProduct">Add Product</button>
      <input type="file" id="image-input" ref="imageInput" style="display:none;" accept="image/*" />
  
      <div id="product-list">
        <ProductCard v-for="(product, index) in products" :key="index" :product="product" @addToCart="addToCart" />
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from './ProductCard.vue';
  
  export default {
    name:'ProductList',
    components: { ProductCard },
    data() {
      return {
        products: []
      };
    },
    methods: {
      addProduct() {
        const productName = prompt('Enter the product name:');
        if (!productName) {
          alert('Product name is required!');
          return;
        }
  
        let productPrice = prompt('Enter the product price:');
        if (!productPrice || isNaN(productPrice)) {
          alert('Please enter a valid product price!');
          return;
        }
  
        productPrice = `$${parseFloat(productPrice).toFixed(2)}`;
  
        const imageInput = this.$refs.imageInput;
        imageInput.click();
  
        imageInput.onchange = (event) => {
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              const productImage = e.target.result;
  
              this.products.push({
                name: productName,
                price: productPrice,
                image: productImage
              });
              imageInput.value = '';
            };
            reader.readAsDataURL(file);
          } else {
            alert('No image selected!');
          }
        };
      },
      addToCart(product) {
        this.$emit('addToCart', product);
      }
    }
  };
  </script>
  