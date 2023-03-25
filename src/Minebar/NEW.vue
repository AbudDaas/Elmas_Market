<template>
    <P>there are a new brodect here</P>
    
    <div>
        <FlipCard 
        front="mal" 
        back="mun daas"/>
    </div>
</template>
<script>
import FlipCard from '../components/FlipCard.vue';


export default {
    name: "NEW",
    components: { FlipCard },
}
</script>
<style>

</style>