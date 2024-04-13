<template>
<div class="main">
  <navbar-component/>
  <container-component />
 <about-profile-component />
  <div class="setting_profile">
    <div class="left_side">
      <div class="header_item">Main information</div>
      <div class="item">Change password</div>
      <div class="item">Change email</div>
      <div class="item">Privacy Policy</div>
    </div>
    <div class="space"></div>
    <div class="right_side">
      <div class="right_header">Found a technical error?</div>
      <div class="about_text">Write to us, we will be happy to help you decide</div>
      <div class="button">Write</div>
    </div>
  </div>

  <div class="logout" @click="this.$router.push('/search')">
    <img src="@/assets/images/logout.png" class="logout_img" alt="">
    <p>Logout</p>
  </div>



</div>
</template>

<script>

import {defineComponent} from "vue";
import NavbarComponent from "@/components/navbar.vue";
import ContainerComponent from "@/components/container.vue";
import AboutProfileComponent from "@/components/about_profile.vue";

export default defineComponent({
  components: {AboutProfileComponent, ContainerComponent, NavbarComponent}
})
</script>

<style scoped>
.main{
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}
.setting_profile{
  display: flex;
  height: 201px;
  padding-bottom: 20px;
  width: 100%;
  background-color: #F8F8F8;
  border-radius: 20px;
  margin-bottom: 33px;
  padding-top: 30px;
}
.left_side{
  display: flex;
  flex: 1;
  margin-left: 5%;
  flex-direction: column;
  justify-content: space-evenly;
}
.right_side{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 2;
}
.header_item{
  font-family: Rubik-medium,system-ui;
  font-size: 20px;
}
.item{
  font-size: 20px;
  font-family: Rubik-regular,system-ui;
  color: rgba(0, 0, 0, 0.37);
}
.right_header{
  font-family: Rubik-semibold,system-ui;
  font-size: 21px;
}
.about_text{
  font-size: 20px;
  font-family: Rubik-regular,system-ui;
  color: rgba(0, 0, 0, 0.37);
}
.button{
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #3E6CDE;
  border-radius: 10px;
  text-align: center;
  color: white;
  font-family: Rubik-regular,system-ui;
  font-size: 21px;
}
.space{
  flex: 1;
}
.logout_img{
  height: 40px;
  margin-right: 1%;
}
.logout{
  display: flex;
  align-items: center;
  margin-bottom: 160px;
  color: #F86868;
  font-size: 18px;
  font-family: Roboto-regular, system-ui;
  cursor: pointer;

}



</style>