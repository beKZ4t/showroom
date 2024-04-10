<template>

    <div class="output">
      <div class="navbar">
        <div class="item"><a href="#">Search</a> </div>
        <div class="item"><a href="#">Tasks</a> </div>
        <div class="item"><a href="#">Requests</a> </div>
        <div class="button">
          <img class="icon_img" src="@/assets/images/icon_profile.png">
          <p>Ксения</p>
        </div>


      </div>
    </div>

</template>

<script>
export default {
  name: "NavbarComponent",
}

</script>

<style scoped>
.main{
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}
.navbar{
  width: 60%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
}
.button{
  padding: 16px 42px 16px 38px;
  background-color: #3E6CDE;
  align-items: center;
  display: flex;
  width: 90px;
  justify-content: space-between;
  color: white;
  border-radius: 10px;
  font-family: Roboto-bold,system-ui;
  font-size: 18px;

}
.item a{
  text-decoration: none;
  color: black;
  font-size: 22px;
  font-family: Roboto-regular,system-ui;
}
.item{
  flex: 1;
}
.icon_img{
  height: 16px;
}
.output{
  display: flex;
  justify-content: end;
}
</style>