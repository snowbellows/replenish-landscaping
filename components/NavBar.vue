<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <img
          src="../assets/logo1-web.svg"
          alt="Replenish Landscaping Logo"
          class="logo"
        />
      </div>
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
          :to="`/${link(page.slug)}`"
          class="navbar-item is-tab"
          :class="{ 'is-active': isActive(page.slug) }"
        >
          {{ page.title.rendered }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    /**
     * @typedef {object} Page
     * @property {number} id
     * @property {string} slug - url slug
     * @property {object} title { rendered: string }
     */
    pages: { type: Array, required: false, default: undefined },
  },
  data() {
    return {
      showBurger: false,
    };
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
      if (
        this.$route.path.includes(name) ||
        (this.$route.path === '/' && name === 'home')
      ) {
        return true;
      }
      return false;
    },
    link(rawSlug) {
      return rawSlug === 'home' ? '' : rawSlug;
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/_variables.scss';

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
</style>
