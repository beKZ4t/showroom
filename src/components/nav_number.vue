<template>
  <div class="out_nav">
    <div class="nav_num">
      <img class="arrow" @click="decrementPage" src="@/assets/images/Arrowleft.png">
      <div class="number">
        <input readonly :value="currentPage" type="number">
        <p>of</p>
        <span>{{ totalPages }}</span>
      </div>
      <img class="arrow" @click="incrementPage" src="@/assets/images/ArrowRight.png">
    </div>
  </div>
</template>
<script >
export default {
  name: "NavNuberComponent",
}
import { ref } from 'vue';


const currentPage = ref(1);
const totalPages = ref(19); // Replace with your real value

const incrementPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const decrementPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>

<style scoped>

.nav_num {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.number {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  font-family: Poppins-regular,system-ui;
  font-size: 15px;
  color: #8E8E93;
}

input {
  width: 16px;
  outline: none;
}

.out_nav {
  margin-bottom: 50px;
  width: 30%;
  margin-right: auto;
  margin-left: auto;
}

.arrow {
  height: 33px;
  cursor: pointer;
}
</style>