<template>
  <div class="">
    <h2 class="font-bold text-4xl">{{ $book.title }}</h2>

    <div v-html="$book.description" class="my-6 text-lg"></div>

    <ul class="grid grid-flow-col auto-cols-max gap-6">
      <li
        v-for="category in $book.categories"
        :key="category.id"
        class="bg-gray-900 px-6 py-1 rounded-full text-gray-200 shadow-xl"
      >
        {{ category.name }}
      </li>
    </ul>

    <div class="mt-4 flex gap-8">
      <div>
        <h4>Lançamento</h4>
        <p class="font-bold">{{ $book.releaseDate }}</p>
      </div>

      <div>
        <h4>Autor</h4>
        <p class="font-bold">{{ $book.author }}</p>
      </div>
    </div>
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
