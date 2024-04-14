<template>
  <div class="results-container">
    <input type="text" v-model="query" @input="search" placeholder="Введите запрос">
    <ul>
      <li v-for="result in searchResults" :key="result.id" class="result-item">{{ result.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      results: [
        {id: 1, title: 'Результат поиска 1'},
        {id: 2, title: 'Результат поиска 2'},
        {id: 3, title: 'Результат поиска 3'},
        {id: 4, title: 'Результат поиска 4'},
        {id: 5, title: 'Результат поиска 5'},
      ],
      searchResults: []
    }
  },
  methods: {
    search() {
      this.searchResults = this.results.filter(result =>
          result.title.toLowerCase().includes(this.query.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
/* Стили для контейнера и его содержимого */
.results-container {
  /* Добавьте стили для контейнера */
}

.result-item {
  display: flex;
  /* Добавьте другие стили, которые вам нужны для элементов списка */
}
</style>
