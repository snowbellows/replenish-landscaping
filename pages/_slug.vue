<template>
  <div>
    <h1 v-if="page">{{ slug }}</h1>
    <h1 v-else>Oops! Cannot find the requested page</h1>
    <p>{{ page }}</p>
  </div>
</template>

<script>
import { getPage } from '../api/queries';
export default {
  async asyncData({ params, error, payload }) {
    const slug = params.slug || 'home';
    const page = payload || (await getPage(slug).catch((e) => undefined));
    return {
      page,
      slug: params.slug,
    };
  },
};
</script>
