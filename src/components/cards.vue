<template>
  <div class="cards">
    <div class="title">Video editor</div>
    <div class="website">Metry.kz</div>
    <div class="about">We need a video editor for a project, from placement to production we need support.</div>
    <div class="under_text">
      <div class="left_text">Contractual</div>
      <div class="right_text">31.12.2024</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsComponent",
}
</script>

<style scoped>
.cards{
  padding-top: 15px;
  padding-left: 5%;
  margin-top: 33px;
  margin-bottom: 24px;
  border-radius: 10px;
  height: 171px;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
}
.title{
  font-size: 18px;
  font-family: Poppins-bold,system-ui;
  color: #3E6CDE;
}
.website{
  font-family: Poppins-medium,system-ui;
  font-size: 16px;
  margin-bottom: 8px;
  margin-top: 7px;
}
.about{
  font-size: 16px;
  font-family: Poppins-light, system-ui;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 49px;
}
.under_text{
  display: flex;
  justify-content: space-between;
}
.left_text{
  color: #3E6CDE;
  font-family: Poppins-light, system-ui;
  font-size: 16px;

}
.right_text{
  font-family: Poppins-light,system-ui;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  padding-right: 41px;
}
</style>