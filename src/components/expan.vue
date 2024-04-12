<template>
  <div class="expandable-button" @click="toggleOptions">
    <button>Main Button</button>
    <div class="options" ref="options">
      <button>Option 1</button>
      <button>Option 2</button>
      <button>Option 3</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpanComponent",
  methods: {
    toggleOptions() {
      this.$refs.options.$el.classList.toggle('active');
    }
  }
}
</script>

<style scoped>
.expandable-button {
  position: relative;
  display: inline-block;
}

.expandable-button .options {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px;
  z-index: 1;
}

.expandable-button .options button {
  display: block;
  width: 100%;
  margin-bottom: 5px;
}

.expandable-button.active .options {
  display: block;
}
</style>
