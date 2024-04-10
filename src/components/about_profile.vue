<template>
  <div class="about_profile">
    <div class="name">Ксения Аргутина </div>
    <div class="space"></div>
    <div class="role">
      <p>Video Editor</p>
      <img class="black_arround" src="@/assets/images/left_black_arround.png" alt="">
    </div>
  </div>
  <div class="info">
    <p>Participated in several large projects, 5 years of experience, there are projects in production.</p>
  </div>

</template>

<script>
export default {
  name: "AboutProfileComponent",
}
</script>

<style scoped>
.about_profile{
  display: flex;
  margin-top: 30px;

}
.name{
  background-color: #F1F4FF;
  border-radius: 10px;
  flex: 1;
  padding: 16px ;
  font-size: 18px;
  font-family: Poppins-medium, system-ui;
}
.black_arround{
  display: flex;
  justify-content: space-between;
  height: 32px;
  padding-right: 2%;

}
.space{
  width: 3%;
}
.role{
  flex: 1;
  font-size: 18px;
  font-family: Poppins-bold, system-ui;
  display: flex;
  align-items: center;
  background-color: #F1F4FF;
  border-radius: 10px;
  justify-content: space-between;
}
.role p{
  padding-left: 2%;
}
.info{
  border-radius: 10px;
  margin-top: 30px;
  padding: 14px 20px 260px 14px;
  background-color: #F1F4FF;
  font-family: Poppins-medium,system-ui;
  font-size: 18px;
  margin-bottom: 33px;
}
</style>