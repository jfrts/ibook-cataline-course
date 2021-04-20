<template>
  <div class="grid grid-cols-2 gap-8 md:grid-cols-6">
    <BookCard v-for="book in $booksList" :key="book.id" :book="book" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { booksList } from '@/store';

export default Vue.extend({
  computed: {
    $booksList() {
      return booksList.$all;
    },
  },
});
</script>
