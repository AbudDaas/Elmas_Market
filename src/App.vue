<template>
  <div id="app">
    <div id="header">
      <HeaderView />
    </div>
    <div id="center">
      <CenterView />
    </div>
    <div id="footer">
      <FooterView />
    </div>
  </div>
</template>


<script>
import CenterView from "./views/CenterView.vue";
import FooterView from "./views/FooterView.vue";
import HeaderView from "./views/HeaderView.vue";
export default {
  components: { FooterView, CenterView, HeaderView, },
  name: "App",
};
</script>

<style>
@import "./style/css/App.css";
</style>
