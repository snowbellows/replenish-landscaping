<template>
  <div class="review">
    <ul class="stars" :aria-label="`${stars} out of 5 stars`">
      <li
        v-for="(i, index) in stars"
        :key="index"
        class="icon"
        aria-hidden="true"
      >
        <i class="fas fa-star"></i>
      </li>
      <li
        v-for="(i, index) in 5 - stars"
        :key="index"
        class="icon"
        aria-hidden="true"
      >
        <i class="fas fa-star empty"></i>
      </li>
    </ul>
    <h4 class="reviewer">
      -
      <slot name="reviewer">Anonymous</slot>
    </h4>
    <div class="comment mt-0">
      <i class="fas fa-quote-left"></i>
      {{ stars }} out of 5 stars!
      <slot></slot>
      <i class="fas fa-quote-right"></i>
      <div class="date">- {{ date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Review',
  props: {
    stars: { type: Number, default: 3 },
    date: { type: String, default: '2020' }
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/_variables.scss';

.review {
  display: flex;
  flex-direction: column;
  height: 12rem;
  border: 6px solid $darkgrey;
  box-shadow: 5px 5px 5px lightgray;
  // background-color: $darkgrey;
  margin: 30px;

  .stars {
    display: flex;
    color: $lightgreen;
    margin: 0 auto;

    .icon {
      height: 2.4rem;
      width: 2.4rem;
      font-size: 2rem;
    }

    .empty {
      color: $darkgrey;
    }
  }

  .reviewer {
    font-style: italic;
    color: $lightgreen;
    text-align: right;
  }

  .comment {
    font-size: 0.875rem;
  }

  .date {
    font-size: 1rem;
  }
}
</style>
