<template>
  <div class="main">
    <navbar-component/>
    <div class="header_box">
      <div class="left">
        <div class="first">Video editor</div>
        <div class="second">Metry.kz</div>
      </div>
      <div class="right">
        <img src="@/assets/images/chat.png" class="chat_img">
      </div>
    </div>
    <div class="list">
      <div class="item">TODO</div>
      <div class="item">In Progress</div>
      <div class="item">In Review</div>
    </div>
    <hr>
    <chat-component/>


  </div>
</template>

<script>

import {defineComponent} from "vue";
import NavbarComponent from "@/components/navbar.vue";
import ChatComponent from "@/components/chat_websocced.vue";


export default defineComponent({
  components: { ChatComponent, NavbarComponent}
})
</script>

<style scoped>
.main {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}

.header_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3E6CDE;
  padding: 35px 40px;
  border-radius: 20px;
  margin-top: 40px;
}

.chat_img {
  height: 40px;
}

.first {
  font-size: 20px;
  font-family: Poppins-bold, system-ui;
  color: white;
}

.second {
  font-family: Poppins-medium, system-ui;
  font-size: 16px;
  color: white;
  margin-top: 8px;
}

.list {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-family: Poppins-medium, system-ui;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 45px;
}
</style>