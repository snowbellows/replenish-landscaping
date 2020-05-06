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
        <div class="navbar-start">
          <nuxt-link
            to="/about"
            class="navbar-item is-tab"
            :class="{ 'is-active': isActive('about') }"
          >
            About
          </nuxt-link>

          <nuxt-link
            to="/design"
            class="navbar-item is-tab"
            :class="{ 'is-active': isActive('design') }"
          >
            Design
          </nuxt-link>
          <nuxt-link
            to="/construction"
            class="navbar-item is-tab"
            :class="{ 'is-active': isActive('construction') }"
          >
            Construction
          </nuxt-link>
          <nuxt-link
            to="/maintenance"
            class="navbar-item is-tab"
            :class="{ 'is-active': isActive('maintenance') }"
          >
            Maintenance
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

    <footer>
      <div>
        &copy; Replenish Landscaping 2020
      </div>
    </footer>
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
      this.showBurger = false;
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

footer {
  margin-top: 40px;
  margin-bottom: 20px;
  padding: 0px 20px;
  text-align: center;
  font-size: 0.875rem;

  div {
    max-width: 1200px;
    margin: 10px auto;
    padding: 10px;
    border-top: 1px solid rgba($darkgrey, 0.3);
  }
}
</style>
