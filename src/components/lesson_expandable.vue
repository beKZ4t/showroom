<template>
  <div>
    <div
        class="expandable-button"
        v-for="(chapter, index) in chapters"
        :key="index"
        :class="{ 'first-button': index === 0, 'last-button': index === chapters.length - 1 }">
      <div class="content" @click="setExpanded(index)">
        <div class="in_box">
          <div class="up-button">
            <div class="title">Video editor</div>
            <div class="website">Metry.kz</div>
            <div class="about">We need a video editor for a project, from placement to production we need support.</div>
            <div class="under_text">
              <div class="left_text">Contractual</div>
              <div class="right_text">31.12.2024</div>
            </div>
          </div>
        </div>

        <div class="show-container" :class="{ expanded: expandedIndex === index }">
          <div class="all_about">
            <div class="title_about">Responsibilities:</div>
            <ul>
              <li>Conducting research and analyses to assess operational effectiveness, processes, and stakeholders involved in current projects.</li>
              <li>Assisting with operational issues within ongoing projects.</li>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "lesson-expandable-component",
  data() {
    return {
      chapters: [
        {
          title: "Video editor",
        },
      ],
      expandedIndex: -1,
    };
  },
  methods: {
    setExpanded(index) {
      this.expandedIndex = this.expandedIndex === index ? -1 : index;
    },
  },
};
</script>

<style scoped>
.title{
  font-size: 18px;
  font-family: Poppins-bold,system-ui;
  color: #3E6CDE;
}
.button {
  padding: 15px 77px;
  border-radius: 10px;
  background-color: #3e6cde;
  color: white;
  font-size: 16px;
  margin-top: 20px;
  font-family: Poppins-medium, system-ui;
  box-shadow: 0 4px 45px rgba(0, 117, 255, 0.32);
  margin-bottom: 38px;
}
.all_about {
  width: 95%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 27px;
  font-size: 18px;
  font-family: Poppins-regular, system-ui;
}
.title_about {
  font-size: 18px;
  font-family: Poppins-bold, system-ui;
  color: #3e6cde;
}
.website {
  font-family: Poppins-medium, system-ui;
  font-size: 16px;
  margin-bottom: 8px;
  margin-top: 7px;
}
.about {
  font-size: 16px;
  font-family: Poppins-light, system-ui;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 49px;
}
.under_text {
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
}
.left_text {
  color: #3e6cde;
  font-family: Poppins-light, system-ui;
  font-size: 16px;
}
.right_text {
  font-family: Poppins-light, system-ui;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  padding-right: 41px;
}
.content {
  margin-top: 33px;
  margin-bottom: 24px;
  border-radius: 10px;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
}
.in_box {
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;
}
.show-container {
  overflow: hidden;
  max-height: 0;
  transition: max-height 1s ease-out;
  padding: 0 4px;
}
.show-container.expanded {
  max-height: 700px;
}
.show-container > p {
  text-align: start;
  color: rgba(0, 0, 0, 0.7);
  font-size: 12px;
  font-family: Inter-Light, system-ui;
}
.expandable-button {
  background: white;
  width: 100%;
}
.expandable-letter {
  text-align: start;
  display: grid;
  align-items: center;
  color: black;
  font-size: 12px;
  margin-right: 13px;
  font-family: "Ubuntu-bold", sytem ui;
  border-radius: 18px;
}

.expandable-title > span {
  color: rgba(0, 0, 0, 0.3);
  font-family: Inter-SemiBold, system-ui;
}
.progress > p {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-family: Inter-Regular, system-ui;
  font-size: 13px;
}
.block > p {
  margin-top: 11px;
  color: white;
  font-family: Inter-Bold, system-ui;
  font-size: 13px;
}
.first-button {
  margin-top: 40px;
  padding-top: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.last-button {
  padding-top: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
