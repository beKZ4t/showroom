<template>
  <div class="main">
    <navbar-component/>
    <header-text-component/>

    <search-component/>
    <lesson-expandable-component/>
    <lesson-expandable-component/>
    <lesson-expandable-component/>
    <lesson-expandable-component/>
   <nav-nuber-component/>


  </div>
</template>

<script setup>

import NavbarComponent from "@/components/navbar.vue";
import HeaderTextComponent from "@/components/header_text.vue";
import SearchComponent from "@/components/search.vue";
import LessonExpandableComponent from "@/components/lesson_expandable.vue";
import NavNuberComponent from "@/components/nav_number.vue";


</script>

<style scoped>
.main {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}

</style>
