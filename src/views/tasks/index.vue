<template>
  <div class="main">
    <navbar-component/>
    <div class="header">
      <p>Tasks</p>
      <span>Your work in organizations</span>
    </div>
   <new-search-component/>

  </div>

</template>

<script>

import {defineComponent} from "vue";
import NavbarComponent from "@/components/navbar.vue";
import SearchComponent from "@/components/search.vue";
import MinCardComponent from "@/components/min_card.vue";
import NewSearchComponent from "@/components/new_cards_search.vue";

export default defineComponent({
  components: {NewSearchComponent, MinCardComponent, SearchComponent, NavbarComponent}
})
</script>

<style scoped>
.main {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}

.header {
  margin-top: 40px;
  margin-bottom: 21px;
}

p {
  font-family: Poppins-bold, system-ui;
  font-size: 30px;
  margin-bottom: 7px;
  color: #3E6CDE;
}

span {
  font-size: 18px;
  font-family: Poppins-medium, system-ui;
}

.min_card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
}

</style>