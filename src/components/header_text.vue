<template>
  <div class="header_text">
    <div class="first">Vacancies for you</div>
    <div class="second">Picked up for the resume "Video editor"</div>
  </div>
</template>
<script >
export default {
  name: "HeaderTextComponent",
}
</script>

<style scoped>
.header_text{
  margin-top: 40px;
  margin-bottom: 21px;
}
.first{
  color: #3E6CDE;
  font-family: Poppins-bold, system-ui;
  font-size: 30px;
  margin-bottom: 7px;
}
.second{
  font-size: 18px;
  font-family: Poppins-medium,system-ui;
}
.left_arround{
  height: 32px;
}
</style>