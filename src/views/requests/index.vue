<template>
  <div class="main">
    <navbar-component/>
    <div class="header">
      <p>Requests</p>
      <span>Here are your responses and answers</span>
    </div>
    <search-component/>
    <form>
    <label for="dates">Выберите дату:</label>
    <input type="text" id="dates" list="date-list" placeholder="he">
    <datalist id="date-list" >
      <option value="2024-04-10">2024-04-10</option>
      <option value="2024-04-10">2024-04-10</option>
      <option value="2024-04-10">2024-04-10</option>
    </datalist>


      <div class="dropdown">
        <button class="dropbtn">Select an option</button>
        <div class="dropdown-content">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      </div>
    </form>>
  </div>
</template>

<script >

import {defineComponent} from "vue";
import NavbarComponent from "@/components/navbar.vue";
import SearchComponent from "@/components/search.vue";

export default defineComponent({
  components: {SearchComponent, NavbarComponent}
})
</script>

<style scoped>
/* Style the dropdown button */
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Style the dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

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

.main{
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}
.header{
  margin-top: 40px;
  margin-bottom: 21px;
}
p{
  font-family: Poppins-bold, system-ui;
  font-size: 30px;
  margin-bottom: 7px;
  color: #3E6CDE;
}
span{
  font-size: 18px;
  font-family: Poppins-medium,system-ui;
}
</style>