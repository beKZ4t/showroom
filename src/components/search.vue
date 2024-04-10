<template>
  <div class="search_input">
    <input type="text" placeholder="Search...">
    <div class="icon">
      <img class="search_img" src="@/assets/images/search_last.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
}
</script>

<style scoped>


.search_img{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30px;
  vertical-align: middle;
  background-color: #3E6CDE;
  padding: 11px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
.search_input{
  display: flex;
  align-items: center;
}
input{
  border: none;
  background-color: #F1F4FF;
  outline: none;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  font-family: Roboto-Light,system-ui;
  font-size: 22px;
  width: 100%;
  padding-top: 14px;
  padding-left: 26px;
  padding-bottom: 14px;
}
</style>