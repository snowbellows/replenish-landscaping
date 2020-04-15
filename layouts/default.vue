<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          Replenish Landscaping
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
        <div class="navbar-start">
          <nuxt-link
            to="/about"
            class="navbar-item is-tab"
            :class="{ 'is-active': isActive('about') }"
          >
            About
          </nuxt-link>

          <nuxt-link
            to="/maintenance"
            class="navbar-item is-tab"
            :class="{ 'is-active': isActive('maintenance') }"
          >
            Maintenance
          </nuxt-link>
          <nuxt-link
            to="/landscaping"
            class="navbar-item is-tab"
            :class="{ 'is-active': isActive('landscaping') }"
          >
            Landscaping
          </nuxt-link>
          <nuxt-link
            to="/contact"
            class="navbar-item is-tab"
            :class="{ 'is-active': isActive('contact') }"
          >
            Contact
          </nuxt-link>
        </div>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      showBurger: false
    };
  },
  watch: {
    '$route.path'() {
      this.toggleBurger();
    }
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
    }
  }
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

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.navbar-brand {
  .navbar-item {
    font-family: $family-secondary;
    font-size: 1.5rem;

    @media (max-width: 724px) {
      font-size: 1.3rem;
    }
  }
}

.navbar-menu.is-active {
  @media (max-width: 724px) {
    position: fixed;
    left: 0;
    right: 0;
  }
}
</style>
