<template>
<div class="main">
  <navbar-component/>
  <header-text-component/>


  <search-component/>
  <cards-component/>
  <cards-component/>
  <cards-component/>
  <cards-component/>



</div>
</template>

<script setup>

import NavbarComponent from "@/components/navbar.vue";
import SearchComponent from "@/components/search.vue";
import CardsComponent from "@/components/cards.vue";
import HeaderTextComponent from "@/components/header_text.vue";
</script>
<style scoped>
.main{
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}




</style>