<template>
  <div class="dis">
    <div class="blue">

    </div>
    <div class="main">
      <p>Make a video montage for replay</p>
      <span>Cut out unnecessary moments, prepare a short video, add captions at the end...</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContainersComponent",
}
</script>

<style scoped>
.main {
  padding: 5px 9px;

}

p {
  font-family: Poppins-medium, system-ui;
  font-size: 16px;
}

span {
  font-size: 12px;
  font-family: Poppins-medium, system-ui;
  color: rgba(0, 0, 0, 0.6);
}

.blue {
  background-color: #3E6CDE;
  width: 14px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

.dis {
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  width: 22%;
  display: flex;
  box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
}
</style>