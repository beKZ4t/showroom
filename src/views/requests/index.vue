<template>
  <div class="main">
    <navbar-component/>
    <div class="header">
      <p>Requests</p>
      <span>Here are your responses and answers</span>
    </div>
    <search-component/>
    <accepted-cards-component/>
    <accepted-cards-component/>
    <accepted-cards-component/>
    <accepted-cards-component/>
    <nav-nuber-component/>

  </div>


</template>

<script>


import {defineComponent} from "vue";
import NavbarComponent from "@/components/navbar.vue";
import SearchComponent from "@/components/search.vue";
import AcceptedCardsComponent from "@/components/accepted_card.vue";
import LessonExpandableComponent from "@/components/lesson_expandable.vue";
import ExpanComponent from "@/components/expan.vue";
import NavNuberComponent from "@/components/nav_number.vue";

export default defineComponent({
  components: {
    NavNuberComponent,
    ExpanComponent, LessonExpandableComponent, AcceptedCardsComponent, SearchComponent, NavbarComponent}
})


</script>

<style scoped>

/* Style the links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

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
</style>