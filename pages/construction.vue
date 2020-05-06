<template>
  <div>
    <div class="header-image"></div>
    <div class="container">
      <div>
        <div>
          <h2>Construction</h2>
          <p>
            Timber is an incredible material and versatile in production and we
            construct retaining walls, fences, stairs, railings, sitting areas,
            decks, pergolas, garden beds, cubby houses and more using tried and
            tested timber construction. Timber materials can be used to create
            calming and opening spaces to live in outdoors. We use
            environmentally resourced timbers to minimise our impact and create
            piece of mind.
          </p>
          <p>
            Stone is less versatile but creates stunning results, we use to
            construct retaining walls, crazy paving, stepping stones, water
            features, letter boxes, stairs and more using sound industry
            techniques. Using stone brings maturity and strength into a space
            and can be very durable when maintained.
          </p>
        </div>
        <div>
          <img
            src="../assets/images/rock edging and pebbled walking area.jpg"
            alt="Finished wooden step with natural patterning"
            class="image-border"
          />
        </div>
      </div>
      <div>
        <div>
          <img
            src="../assets/images/20171228_154709.jpg"
            alt="Frame of a wooden step mid construction"
            class="image-border"
          />
        </div>
        <div>
          <img
            src="../assets/images/20180715_141312.jpg"
            alt="Finished wooden step with natural patterning"
            class="image-border"
          />
        </div>
      </div>
      <div class="text">
        <p>
          Metals these are rarer to see in the design for an outdoor space,
          however they have their uses in fencing, garden beds, washing lines,
          gabion baskets, sculptural features, benches, lighting and more. Using
          metal materials can produce a sense of ease and fills practical needs
          of an outdoor space.
        </p>
        <p>
          Plastics are versatile but have limited use in our business due to
          their environmental factors and fragility, we limit our products to
          outdoor plumbing for taps and irrigation. Steering clear of garden
          beds and borders being made with plastic due to their impact on our
          world.
        </p>
      </div>
      <div>
        <div>
          <p>
            Ceramics are useful not only in the design aspect creating lavish
            water features, but also practically with paving and brick work for
            retaining walls. We feel that gardens are very much apart of the
            home and believe the way ceramic paving can be very important in
            giving a sense of this integration. This is accomplished through
            smooth transition around the property with comfort, conveniently
            guiding you throughout your home.
          </p>
          <p>
            Concreting is again a very practical part of your living space from
            car ports, to driveways, retaining walls again and fire pits. It
            covers a range of uses from strengthening products for generational
            pleasure, to industrialising your space into access or lifestyle.
          </p>
        </div>
        <div>
          <img
            src="../assets/images/20200330_150557.jpg"
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
  background-image: url('../assets/images/rock edging and pebbled walking area.jpg');
  @include header-image;
}

.text {
  padding-bottom: 0px !important;
}
</style>
