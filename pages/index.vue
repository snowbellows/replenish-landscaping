<template>
  <div>
    <wp-section v-if="page" :html-string="page.content.rendered" />
    <h1 v-else>Oops! Cannot find the requested page</h1>
    <review-bar v-if="reviews" :reviews="reviews"></review-bar>
  </div>
</template>

<script>
import { getHomePageReviews, getPage } from '~/api/queries';
import ReviewBar from '~/components/ReviewBar';
import WpSection from '~/components/WPSection.vue';
export default {
  components: { WpSection, ReviewBar },
  async asyncData({ params, error, payload }) {
    const page = payload || (await getPage('home'));

    const reviews = await getHomePageReviews();
    return {
      page,
      slug: params.slug,
      reviews,
    };
  },
};
</script>