<template>
  <div class="cards">
    <div class="in_cards">

    <div class="title">Video editor</div>
    <div class="website">Metry.kz</div>
    <div class="about">We need a video editor for a project, from placement to production we need support.</div>
    <div class="under_text">
      <div class="left_text">Contractual</div>
      <div class="right_text">31.12.2024</div>
    </div>
    <div class="all_about">
      <div class="title_about">Responsibilities:</div>
      <ul>
        <li>
          Conducting research and analyses to assess operational effectiveness, processes, and stakeholders involved in current projects.
        </li>
        <li>Assisting with operational issues within ongoing projects.</li>
        <li>Developing consistent and concise presentations and analytical notes for management teams and other stakeholders, offering analysis and recommendations to facilitate strategic decision-making.</li>
        <li>Engaging in various facets of corporate development (e.g., mergers, acquisitions, joint ventures, investments, securing bank financing), which includes constructing complex financial models and valuations, aiding in negotiations, and more.</li>
        <li>Proactively researching potential investment opportunities across various sectors.</li>
      </ul>
      <div style="display: flex; justify-content: end;">

        <div class="button">Submit your application</div>

      </div>
    </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "SecondCardComponent",
}
</script>

<style scoped>
.in_cards{
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;
}
.button{
  padding: 15px 77px;
  border-radius: 10px;
  background-color: #3E6CDE;
  color: white;
  font-size: 16px;
  margin-top: 20px;
  font-family: Poppins-medium,system-ui;
  box-shadow: 0 4px 45px rgba(0, 117, 255, 0.32);


}
.all_about{
  margin-top: 27px;
  margin-right: 3%;
  font-size: 18px;
  font-family: Poppins-regular,system-ui;
}
.cards{
  padding-top: 15px;
  margin-top: 33px;
  margin-bottom: 24px;
  border-radius: 10px;
  height: 480px;
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