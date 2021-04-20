<template>
  <h1 class="text-center text-5xl font-medium">
    {{ text }} <b v-if="strong" class="text-gray-900">{{ strong }}</b>
  </h1>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
    strong: {
      type: String,
      required: false,
    },
  },
});
</script>
