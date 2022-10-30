<template>
  <div>
    <review-box v-bind="review"></review-box>
    <WPSection v-if="page" :html-string="page.content.rendered" />
    <h1 v-else>Oops! Cannot find the requested page</h1>
  </div>
</template>

<script>
import { getHomePageReview, getPage } from '~/api/queries';
import ReviewBox from '~/components/ReviewBox.vue';
import WPSection from '~/components/WPSection.vue';
export default {
  components: { WPSection, ReviewBox },
  async asyncData({ params, error, payload }) {
    const page =
      payload ||
      (await getPage('home').catch((e) => {
        if (process.env.NODE_ENV !== 'production') {
          console.error(e);
        }
      }));

    const review = await getHomePageReview().catch((e) => {
      if (process.env.NODE_ENV !== 'production') {
        console.error(e);
      }
    });
    return {
      page,
      slug: params.slug,
      review,
    };
  },
};
</script>
