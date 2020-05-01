<template>
  <div>
    <div class="header-image"></div>
    <div class="container">
      <div>
        <div>
          <img
            src="../assets/logo1.svg"
            alt="Replenish Landscaping Logo"
            class="logo"
          />
        </div>
        <div>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
@import '~/assets/_variables.scss';

.logo {
  height: 320px;
  flex: 0 0 auto;
}

.header-image {
  background-image: url('../assets/images/shed.jpg');
  @include header-image;
}
</style>
