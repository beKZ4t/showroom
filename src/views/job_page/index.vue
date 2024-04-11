<template>
<div class="main">
  <navbar-component/>
  <header-text-component/>
  <search-component/>
  <second-card-component/>
  <cards-component/>
  <cards-component/>

</div>
</template>
<script >

import {defineComponent} from "vue";
import NavbarComponent from "@/components/navbar.vue";
import HeaderTextComponent from "@/components/header_text.vue";
import SearchComponent from "@/components/search.vue";
import LessonExpandableComponent from "@/components/lesson_expandable.vue";
import SecondCardComponent from "@/components/second_card.vue";
import CardsComponent from "@/components/cards.vue";

export default defineComponent({
  components: {
    CardsComponent,
    SecondCardComponent, LessonExpandableComponent, SearchComponent, HeaderTextComponent, NavbarComponent}
})
</script>

<style scoped>
.main{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

</style>