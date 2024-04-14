<template>
  <div>
    <div class="search_input">
      <input type="text" v-model="query" @input="search" placeholder="Search...">
      <div class="icon">
        <img class="search_img" src="@/assets/images/search_last.png" alt="">
      </div>
    </div>
    <div class="outbox" v-for="card in filteredCards" :key="card.id">
      <div class="box">
        <div class="left">
          <div class="first">{{ card.jobTitle }}</div>
          <div class="second">{{ card.company }}</div>
        </div>
        <div class="right">
          <div class="second_right">{{ card.category }}</div>
          <img src="@/assets/images/uil_arrow-up.png" class="arrow">
        </div>
      </div>
      <div class="button">Chat</div>
    </div>
  </div>
</template>

<script>
export default {
    name: "NewSearch-component",
  data() {
    return {
      query: '',
      cards: [
        { id: 1, jobTitle: 'Video editor', company: 'Metry.kz', category: 'Board' },
        { id: 2, jobTitle: 'Video editor', company: 'Metry.kz', category: 'Board' },
        { id: 3, jobTitle: 'Video editor', company: 'Metry.kz', category: 'Board' },
        { id: 4, jobTitle: 'Video editor', company: 'Metry.kz', category: 'Board' },
      ],
    };
  },
  computed: {
    filteredCards() {
      return this.cards.filter(card =>
          card.jobTitle.toLowerCase().includes(this.query.toLowerCase()) ||
          card.company.toLowerCase().includes(this.query.toLowerCase()) ||
          card.category.toLowerCase().includes(this.query.toLowerCase()) ||
          card.id.toString().includes(this.query.toLowerCase()) // Добавляем поиск по ID
      );
    }
  },
  methods: {
    search() {
    }
  }
};
</script>

<style scoped>
.search_input {
  display: flex;
  align-items: center;
}

input {
  border: none;
  background-color: #F1F4FF;
  outline: none;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  font-family: Roboto-Light,system-ui;
  font-size: 22px;
  width: 100%;
  padding-top: 14px;
  padding-left: 26px;
  padding-bottom: 14px;
}

.search_img {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30px;
  vertical-align: middle;
  background-color: #3E6CDE;
  padding: 11px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}

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
