<template>
    <div>
        Center
        <MineBar></MineBar>
    </div>
</template>
<script>
import MineBar from '../components/MineBar.vue';

export default {
    name: "CenterView",
    components: { MineBar }
}
</script>
<style>
@import "../style/css/CenterView.css";
</style>