<template>
  <div class="all_block">
    <div class="header">

      <div class="img_icon">
        <img src="@/assets/images/person_img.png" class="person_img">
        <div class="names">
          <p>Metry.kz</p>
          <span>Ксения Аргутина</span>
        </div>
      </div>
      <div class="right_side">
        <img src="@/assets/images/three_point.png" class="three_point">
      </div>
    </div>
    <hr>
    <div class="footer">
      <div class="today">Today</div>
      <div class="text_first">
        <div class="first">You have a call scheduled at 15:00</div>
        <div class="time">08:35</div>
      </div>
      <div class="second">
        <div class="second_first">
          <p>Great, I'm ready</p>
          <img src="@/assets/images/chek.png" class="chek_img">
          <div class="time">08:36</div>
        </div>

      </div>
    </div>
    <hr>
    <div class="chat_input">
      <img class="scrip" src="@/assets/images/scrip.png">
      <input type="text" placeholder="Message">
    </div>

  </div>
</template>

<script>
export default {
  name: "ChatComponent",
}
</script>

<style scoped>
.all_block {
  width: 50%;
  height: 625px;
  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  margin-bottom: 32px;
}

.person_img {
  height: 50px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 31px;
}

.img_icon {
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: space-between;


}

.three_point {
  height: 30px;
}

p {
  font-size: 16px;
  font-family: Poppins-medium, system-ui;
}

span {
  font-family: Poppins-regular, system-ui;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
}

.footer {
  margin-top: 319px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;

}

.today {
  padding: 3px 30px;
  background-color: #E3E3E3;
  border-radius: 10px;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  font-size: 10px;
  font-family: Rubik-regular, system-ui;
  width: min-content;
}

.text_first {
  margin-top: 17px;
  color: white;
  width: 28%;
  border-radius: 10px;
  background-color: #1581FF;
}

.first {
  font-family: Poppins-regular, system-ui;
  font-size: 14px;
  padding: 6px 12px 7px 6px;
}

.time {
  font-size: 10px;
  font-family: Rubik-regular, system-ui;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: end;
  margin-right: 8px;
  padding-bottom: 5px;
}

.chek_img {
  height: 14px;
}

.second_first {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  border-radius: 10px;
  background-color: #0067E1;
  color: white;
  padding: 7px 13px 10px 9px;

}

.second {
  display: flex;
  justify-content: end;
}

.second_first p {

}

.chat_input {
  display: flex;
  align-items: center;
  width: 95%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 18px;
  justify-content: space-between;
}

input {
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  font-size: 16px;
  font-family: Rubik-regular, system-ui;
  color: #A4A4A4;
  width: 100%;
  border-color: #A4A4A4;
  padding-bottom: 5px;
}

.scrip {
  height: 26px;
}

</style>