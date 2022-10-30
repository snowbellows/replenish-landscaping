<template>
  <div class="review">
    <ul class="stars" aria-hidden="true">
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
      <slot name="reviewer">{{ name }}</slot>
    </h4>
    <div class="comment mt-0">
      <i class="fas fa-quote-left"></i>
      {{ quote }}
      <slot></slot>
      <i class="fas fa-quote-right"></i>
      <div class="date">
        <a v-if="link" :href="link" target="_blank">
          - {{ formattedDate }}
          <div
            v-if="type && type === 'facebook'"
            aria-label="View review on Facebook"
            class="icon"
          >
            <i class="fab fa-facebook"></i>
          </div>
        </a>
        <div v-else>- {{ formattedDate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewBox',
  props: {
    stars: { type: Number, required: true },
    date: { type: String, required: true },
    quote: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, default: 'other' },
    link: { type: String, required: false, default: undefined },
  },
  computed: {
    formattedDate() {
      return new Date(this.date).toLocaleDateString()
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/_variables.scss';

.review {
  display: flex;
  flex-direction: column;
  min-height: 12rem;
  border: 6px solid $darkgrey;
  box-shadow: 5px 5px 5px lightgray;
  max-width: 500px;
  padding: 15px;

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

    .icon {
      color: #4a4a4a;
    }
  }
}
</style>
