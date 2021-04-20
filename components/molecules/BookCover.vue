<template>
  <div>
    <img :src="$book.cover" :alt="`Capa do livro ${$book.title}`" />
    <NuxtLink
      :to="`/book/${$book.id}/read`"
      class="bg-gray-900 flex mt-2 py-4 justify-center text-gray-200 text-lg uppercase font-bold hover:bg-gray-800"
      >Ler Livro</NuxtLink
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { booksList } from '@/store';
export default Vue.extend({
  computed: {
    $book() {
      return booksList.$single;
    },
  },
});
</script>
