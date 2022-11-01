<template>
  <div class="review-bar-container">
    <review-box
      v-for="review in reviews"
      :key="`${review.name}-${review.date.getTime()}`"
      v-bind="review"
    ></review-box>
  </div>
</template>

<script>
import ReviewBox from './ReviewBox.vue';
export default {
  components: { ReviewBox },
  props: {
    /**
     * @typedef {object} Review
     * @property {number} stars
     * @property {Date} date
     * @property {string} quote
     * @property {string} name
     * @property {string} type
     * @property {string} [link]
     */
    reviews: { type: Array, required: true },
  },
};
</script>

<style lang="scss" scoped>
.review-bar-container {
  margin: 1rem auto;
  width: 100%;
  display: flex;
  padding: 10px;
}
</style>
