<template>
  <footer class="w-full h-28 bg-gray-900 bottom-0 left-0">
    <Container class="grid h-full grid-flow-col justify-between items-center">
      <Logo />
      <p class="text-gray-100">Copyright &copy; {{ currentYear }} iBook</p>
    </Container>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
});
</script>
