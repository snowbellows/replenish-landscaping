<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <img
            src="../assets/logo1-web.svg"
            alt="Replenish Landscaping Logo"
            class="logo"
          />
        </nuxt-link>
        <a
          role="button"
          class="navbar-burger burger"
          :class="{ 'is-active': showBurger }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-standard"
          @click="toggleBurger"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbar-standard"
        class="navbar-menu"
        :class="{ 'is-active': showBurger }"
      >
        <div v-if="pages" class="navbar-start">
          <nuxt-link
            v-for="page in pages"
            :key="page.id"
            :to="`/${page.attributes.slug}`"
            class="navbar-item is-tab"
            :class="{ 'is-active': isActive('about') }"
          >
            {{ page.attributes.name }}
          </nuxt-link>
        </div>
      </div>
    </nav>
    <div class="header-image-main"></div>
    <nuxt />

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

export default {
  name: 'DefaultLayout',
  data() {
    return {
      showBurger: false,
      pages: [],
    };
  },
  async fetch() {
    const pages = await getPages();
    this.pages = pages;
  },

  watch: {
    '$route.path'() {
      this.showBurger = false;
    },
  },
  methods: {
    toggleBurger() {
      this.showBurger = !this.showBurger;
    },
    isActive(name) {
      if (this.$route.path.includes(name)) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/_variables.scss';

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-size: 1.3rem;
  @media (max-width: $tablet) {
    font-size: 1rem;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.navbar-brand {
  .navbar-item {
    padding: 10px 20px;

    img.logo {
      max-height: 4rem;
      @media (max-width: $tablet) {
        max-height: 2.5rem;
      }
    }
  }

  .navbar-burger {
    width: calc(4rem + 20px) !important;
    height: calc(4rem + 20px) !important;
    @media (max-width: $tablet) {
      width: calc(2.5rem + 20px) !important;
      height: calc(2.5rem + 20px) !important;
    }
  }
}

.navbar-menu.is-active {
  position: fixed;
  left: 0;
  right: 0;
}

.header-image-main {
  background-image: url('../assets/images/header-image.jpg');
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
