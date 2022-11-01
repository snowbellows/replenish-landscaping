<template>
  <div>
    <WPSection v-if="page" :html-string="page.content.rendered" />
    <h1 v-else>Oops! Cannot find the requested page</h1>
  </div>
</template>

<script>
import { getPage } from '../api/queries';
import WPSection from '~/components/WPSection.vue';
export default {
  components: { WPSection },
  async asyncData({ params, error, payload }) {
    const slug = params.slug || 'home';
    const page = payload || (await getPage(slug));
    return {
      page,
      slug: params.slug,
    };
  },
};
</script>
