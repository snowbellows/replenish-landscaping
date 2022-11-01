<template>
  <div class="cms-content" v-html="htmlString" />
</template>

<script>
export default {
  props: {
    htmlString: { type: String, required: true },
  },
};
</script>

<style lang="scss">
@import '~assets/variables';

.cms-content {
  margin: auto;
  margin-top: 1rem;
  & > p:not(:first) {
    margin-top: 1rem;
  }
}

.wp-block-media-text__media,
.wp-block-image {
  padding: 10px;

  img {
    border: 6px solid $darkgrey;
    box-shadow: 5px 5px 5px lightgray;
    background-color: $darkgrey;
  }
}

.wp-block-column > p {
  padding: 0 8%;
}
.has-medium-font-size {
  font-size: 1.5rem;
}

.has-large-font-size {
  font-size: 2rem;
}
</style>
