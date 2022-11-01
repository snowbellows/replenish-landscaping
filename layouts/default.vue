<template>
  <div>
    <nav-bar :pages="pages" />
    <div class="header-image-main"></div>
    <div class="container is-max-desktop">
      <nuxt />
    </div>
    <footer class="mb-4">
      <div class="top-line"></div>
      <div class="columns">
        <div class="column socials is-two-fifths is-offset-three-fifths">
          <ul class="d-flex">
            <li class="icon">
              <a
                href="https://www.facebook.com/replenishlandscaping"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook fa-3x"></i>
              </a>
            </li>
            <li class="icon">
              <a
                href="mailto:reon@replenishlandscaping.com.au"
                aria-label="Email"
              >
                <i class="fas fa-at fa-3x"></i>
              </a>
            </li>
            <li class="icon">
              <a href="tel:+61484140347" aria-label="Phone">
                <i class="fas fa-phone fa-3x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>&copy; Replenish Landscaping 2020 - 2021</div>
    </footer>
  </div>
</template>

<script>
import { getPages } from '~/api/queries';
import NavBar from '~/components/NavBar.vue';

export default {
  name: 'DefaultLayout',
  components: { NavBar },
  data() {
    return {
      pages: [],
    };
  },
  async fetch() {
    const pages = await getPages();
    this.pages = pages;
  },
  fetchOnServer: true,
};
</script>

<style lang="scss">
@import '~/assets/_variables.scss';

.header-image-main {
  background-image: url('~/assets/images/header-image.jpg');
  @include header-image;
}

footer {
  margin-top: 40px;
  padding: 0px 20px;
  text-align: center;
  font-size: 0.875rem;

  .top-line {
    max-width: 1200px;
    margin: 10px auto;
    padding: 10px;
    border-top: 1px solid rgba($darkgrey, 0.3);
  }

  .socials {
    a {
      color: #4a4a4a;
    }

    .icon {
      height: 3rem;
      width: 3rem;
    }
  }
}
</style>
