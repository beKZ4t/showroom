<template>
  <div class="content">

    <div class="expandable-button" ref="expandableButtons" v-for="(chapter, index) in chapters" @click="setExpanded(index)" :key="index" :class="{'first-button': index === 0, 'last-button': index === chapters.length - 1}">
      <div class="up-button">
        <div style="flex: auto">
          <div class="expandable-letter">{{chapter.title}}</div>
          <div class="info-text">
            <div class="text_second_list"> {{chapter.current}} Videos</div>
            <img style="margin-left: 4px; margin-right: 4px;" src="../../assets/images/Ellipse.png" height="3px">
          </div>
        </div>
      </div>
      <div class="show-container" :class="{'expanded': expandedIndex === index}">
        <div class="items">
          <div class="item" v-for="content in chapter.contentList" :key="content">
            <div class="item_head">
              <p>{{content.title}} </p>
              <img src="../../assets/images/play.png" height="10px"> <span>{{content.time}}</span>
            </div>
            <div v-if="content.status === 'Completed'" class="competed-container">{{content.status}}</div>
            <div v-else-if="content.status === 'Playing'" class="playing-container">{{content.status}}</div>
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
      user: null,
      chapters: [
        {
          title: "Video editor",
          totalCount: 12,
          current: 1,
          time: "28m",
          contentList: [
            {
              title: "Installing Vue JS",
              status: "Completed",
              time: "10m"
            },
            {
              title: "Understand Vue Components",
              status: "Completed",
              time: "59m"
            },
            {
              title: "Vue Templating",
              status: "Playing",
              time: "12m"
            },
            {
              title: "Vue Forms",
              status: "",
              time: "23m"
            },
            {
              title: "Vue Styling",
              status: "",
              time: "57m"
            },
            {
              title: "Vue Routing",
              status: "",
              time: "1h 30m"
            },
            {
              title: "Vue Animation",
              status: "",
              time: "1h 19m"
            }
          ]
        },
      ],
      loading: true,
      hash: "",
      expandedIndex: -1,
      barSize: [],
    }
  },
  mounted() {
  },
  methods: {
    setExpanded(index) {
      if (this.expandedIndex === index) {
        this.expandedIndex = -1;
      } else {
        this.expandedIndex = index;
      }
    },
  }
}
</script>

<style scoped>

.info-text {
  text-align: start;
}
.info-text>*{
  display: inline-block;
  vertical-align: middle;
}.competed-container{
   height: 18px;
   background-color: #1365E1;
   color: white;
   width: 50px;
   font-size: 8px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 2px;
   font-family: "Ubuntu-bold", sytem ui;
 }
.playing-container{
  width: 37px;
  height: 18px;
  background-color: #FE416D;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  color: white;
  font-family: "Ubuntu-bold", sytem ui;
}
.text_second_list{
  color: rgba(27, 27, 27, 0.6);
  font-size: 10px;
  font-family: "Ubuntu-regular", sytem ui;
}
.item{
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  background-color: rgba(249, 249, 249, 0.9);
  border-radius: 18px;
  margin-bottom: 4px;
  padding: 10px 14px;
}
.item_head{
  flex: auto;
  text-align: start;
  font-size: 10px;
  color: rgba(27, 27, 27, 0.6);
  font-family: "Ubuntu-regular", sytem ui;
}
.content {

}
.blue_text{
  font-size: 10px;
  font-family: "Ubuntu-regular", sytem ui;
  color: #1365E1;
}
.first-button {
  margin-top: 40px;
  padding-top: 10px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}
.last-button {
  padding-top: 10px;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
}
.show-container {
  overflow: hidden;
  max-height: 0;
  transition: max-height 1s ease-out;
  padding: 0 4px;
}
.show-container.expanded {
  max-height: 500px;
}
.show-container>p {
  text-align: start;
  color: rgba(0, 0, 0, 0.7);
  font-size: 12px;
  font-family: Inter-Light, system-ui;
}
.expandable-button {
  background: #F4F4F4;
  width: 100%;
}
.expandable-img {
  width: 20px;
  height: 20px;
  align-self: center;
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
.up-button {
  padding: 15px 40px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
}

.expandable-title>span {
  color: rgba(0,0,0,0.3);
  font-family: Inter-SemiBold, system-ui;
}

.progress>p {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-family: Inter-Regular, system-ui;
  font-size: 13px;
}

.block>p {
  margin-top: 11px;
  color: white;
  font-family: Inter-Bold, system-ui;
  font-size: 13px;
}

</style>