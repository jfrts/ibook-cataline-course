<template>
  <HomeTemplate />
</template>

<script lang="ts">
import Vue from 'vue';
import { booksList } from '@/store';

export default Vue.extend({
  layout: 'ibook',

  async asyncData() {
    await booksList.index();
  },
});
</script>
