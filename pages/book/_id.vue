<template>
  <BookDetailsTemplate />
</template>

<script lang="ts">
import Vue from 'vue';
import { booksList } from '@/store';

export default Vue.extend({
  layout: 'ibook',

  head() {
    return {
      title: booksList.$single.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: booksList.$single.description,
        },
      ],
    };
  },

  async asyncData({ params, error }) {
    try {
      const bookId = Number(params.id);
      await booksList.show(bookId);
    } catch {
      error({ statusCode: 404 });
    }
  },
});
</script>
