<template>
  <div>
    <div class="header-image"></div>
    <div class="container">
      <div>
        <img
          src="../assets/logo1.svg"
          alt="Replenish Landscaping Logo"
          class="logo"
        />
      </div>
      <div class="reviews" role="region" aria-label="reviews">
        <review
          :stars="5"
          date="14th May 2020"
          type="facebook"
          link="https://www.facebook.com/elvis.gleeson/posts/3175224002509219"
        >
          <span slot="reviewer">Elvis Gleeson</span>
          <slot>
            Reon from Replenish Landscaping mowed and trimmed my yard for an
            excellent rate. The property looks amazing and so I would highly
            recommend him for his work ethic, attention to detail, and
            professionalism.
          </slot>
        </review>
        <review></review>
      </div>
      <div class="text">
        <p>
          Replenish Landscaping provides construction, design and maintenance
          for individuals and businesses in Canberra and the surrounding area.
          We strive to use industry forward practices, quality materials to
          provide an environmentally sound and customer-focused solution to our
          clients. Not only all this but we manage these quality products at a
          highly competitive rate. Providing this type of service requires a
          founding in traditional industry best practice, an eye on the future
          and an insatiable appetite for learning.
        </p>
      </div>
      <div>
        <div>
          <img
            src="../assets/images/vegtable patch and sitting area.jpg"
            alt="Construction of a vegetable patch and sitting area"
            class="image-border"
          />
        </div>
        <div>
          <img
            src="../assets/images/maintenance.jpg"
            alt="Freshly mown lawn with rustic scuptural piece"
            class="image-border"
          />
        </div>
      </div>
      <div class="centre">
        <p class="text">
          Here you can find out more about what services we provide in
          <nuxt-link to="/design">design</nuxt-link>,
          <nuxt-link to="/construction">construction</nuxt-link> and
          <nuxt-link to="/maintenance">maintenance</nuxt-link> , learn
          <nuxt-link to="/about"> more about us </nuxt-link> as a company and
          our vision for the future and find
          <nuxt-link to="/contact"> contact details </nuxt-link> for a free
          quote.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Review from '../components/Review.vue';

export default {
  name: 'Home',
  components: {
    Review
  }
};
</script>

<style lang="scss" scoped>
@import '~/assets/_variables.scss';

.header-image {
  background-image: url('../assets/images/shed.jpg');
  @include header-image;
}

.logo {
  width: 100%;
  max-height: 320px;
  flex: 0 0 auto;
}

.centre {
  max-width: 900px;
  margin: auto;
  text-align: center;
  font-size: 1.5rem;
  flex-direction: column;

  @media (max-width: $tablet) {
    font-size: 1.3rem;
  }
}

.reviews {
  display: flex;
  justify-content: space-around !important;
}
</style>
