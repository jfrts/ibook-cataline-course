<template>
  <NuxtLink :to="`/book/${book.id}`" class="grid gap-6">
    <img
      :src="book.cover"
      :alt="`Capa do livro ${book.title}`"
      class="grid w-full shadow-md duration-200 ease-out transform hover:scale-110 hover:shadow-xl"
    />

    <div>
      <h4 class="text-sm font-normal">{{ book.title }}</h4>
      <p class="text-xs text-gray-900">{{ book.author }}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Book } from '@/models';

export default Vue.extend({
  props: {
    book: {
      type: Object,
      required: true,
    } as PropOptions<Book>,
  },
});
</script>
