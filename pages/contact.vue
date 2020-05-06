<template>
  <div>
    <div class="header-image"></div>
    <div class="container">
      <div>
        <div>
          <p>
            Please get in touch with us for a free quote by contacting Reon on
            the details below
          </p>
          <p>
            Phone: <a href="tel:+61484140347">0484140347</a>
            <br />
            Email:
            <a href="mailto:reon@replenishlandscaping.com.au"
              >reon@replenishlandscaping.com.au</a
            >
          </p>
          <p>
            Or visit our
            <a href="https://www.facebook.com/replenishlandscaping/">
              Facebook Page</a
            >
          </p>
        </div>
        <div>
          <img src="../assets/logo1.svg" alt="Replenish Landscaping Logo" />
        </div>
      </div>
      <div>
        <div>
          <img
            src="../assets/images/20191031_142349.jpg"
            alt="Frame of a wooden step mid construction"
            class="image-border"
          />
          <img
            src="../assets/images/20191031_142403.jpg"
            alt="Frame of a wooden step mid construction"
            class="image-border"
          />
        </div>
        <div>
          <img
            src="../assets/images/20191107_112230.jpg"
            alt="Finished wooden step with natural patterning"
            class="image-border"
          />
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
  background-image: url('../assets/images/vegtable patch and sitting area.jpg');
  @include header-image;
}
</style>
