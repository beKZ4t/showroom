<template>
  <div class="outbox">
    <div class="box">
      <div class="left">
        <div class="first">Video editor</div>
        <div class="second">Metry.kz</div>
      </div>
      <div class="right">
        <div class="second_right">Board</div>
        <img src="@/assets/images/uil_arrow-up.png" class="arrow">
      </div>
    </div>
    <div class="button">Chat</div>
  </div>
</template>

<script>
export default {
  name: "MinCardComponent",
}

</script>

<style scoped>
.box {
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;

}

.outbox {
  margin-top: 38px;
  border-radius: 10px;
  width: 30%;
  padding-bottom: 10px;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);

}

.right {
  display: flex;
  align-items: center;
}

.arrow {
  height: 35px;
}

.button {
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  margin-top: 14px;
  border-radius: 10px;
  font-family: Poppins-medium, system-ui;
  font-size: 14px;
  color: #3E6CDE;
  background-color: #F1F4FF;
  text-align: center;
  padding-top: 7px;
  padding-bottom: 7px;
}

.first {
  color: #3E6CDE;
  font-size: 16px;
  font-family: Poppins-bold, system-ui;
}

.second {
  font-family: Poppins-medium, system-ui;
  font-size: 14px;
}

.second_right {
  color: #3E6CDE;
  font-size: 14px;
  font-family: Poppins-medium, system-ui;
}
</style>