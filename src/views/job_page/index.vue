<template>
<div class="main">
  <navbar-component/>
  <header-text-component/>
  <search-component/>
</div>
</template>
<script >

import {defineComponent} from "vue";
import NavbarComponent from "@/components/navbar.vue";
import HeaderTextComponent from "@/components/header_text.vue";
import SearchComponent from "@/components/search.vue";

export default defineComponent({
  components: {SearchComponent, HeaderTextComponent, NavbarComponent}
})
</script>

<style scoped>
.main{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

</style>