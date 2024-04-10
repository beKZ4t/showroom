<template>
  <div class="container">
  <div class="left_side">
    <div class="img">
      <img class="img_person" src="@/assets/images/person_img.png">
    </div>
    <div class="second_box">
      <div class="name">Ксения Аргутина</div>
      <div class="second">Employee profile </div>
    </div>
  </div>

  <div class="right_side">
    <div class="button">
      <p>Change role</p>
      <img class="left_arround" src="@/assets/images/left_arround.png">
    </div>
  </div>
  </div>
</template>

<script >
export default {
  name: "ContainerComponent",
}
</script>

<style scoped>
.container{
  height: 300px;
  width: 100%;
  background-color: #3E6CDE;
  border-radius: 20px;
  margin-top: 62px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.img_person{
  height: 160px;

}
.left_arround{
  height: 32px;
}
.button{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  color: white;
  font-size: 16px;
  font-family: Poppins-medium,system-ui;
  height: 52px;
  border-radius: 10px;
  background-color: rgba(241, 244, 255, 0.2);
}
.left_side{
  display: flex;
  align-items: center;
  width: 400px;
  color: white;
  justify-content: space-around;
}
.name{
  font-family: Roboto-bold,system-ui;
  font-size: 28px;
}
.second{
  font-family: Roboto-regular,system-ui;
  font-size: 18px;
}
</style>