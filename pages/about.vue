<template>
  <div>
    <div class="header-image"></div>
    <div class="container">
      <div>
        <div>
          <h2>About</h2>
          <p>
            Replenish Landscaping has been running since January 2020, being a
            new business we are determined to create an amazing customer base
            and look after our clients with a family like mentality, so together
            we can create a premium service at a highly competitive rate.
          </p>
          <p>
            The owner Reon Halverson has been in the construction and
            landscaping industry since 2016 and has a range of experts in
            industry to give insight and aid to his already expansive knowledge.
            Not only has he started this business, but he continues to study at
            a high level to increase his knowledge and skill set while working
            full time. Through this clients can see his passion and love for
            Landscaping and willingness to produce works at an ever increasing
            standard.
          </p>
        </div>
        <div>
          <img
            src="../assets/images/shed.jpg"
            alt="Rustic shed in a well kept cottage garden"
            class="image-border"
          />
        </div>
      </div>
      <div>
        <div>
          <img
            src="../assets/images/20180619_122036.jpg"
            alt="Construction of a stone wall"
            class="image-border"
          />
        </div>
        <div>
          <h2>The Future</h2>
          <p>
            All business should look to the future, technology is a major part
            in the future of landscaping, it is ever expanding and needs to be
            constantly monitored by its professionals to continue with customer
            demands and needs. ‘Replenish landscaping’ is hoping to look into
            design software in 3D graphics in the near future, to help convey
            ideas and plans to better customer relations.
          </p>
          <p>
            Tools and equipment are getting more and more industrialised
            including apps to aid in stone masonry, selecting the correct stone
            for the next piece of the puzzle. Not only is the business hoping to
            keep up with industry standards, but we hope to learn and compose
            new designs to fulfil customer need.
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
  background-image: url('../assets/images/maintenance.jpg');
  @include header-image;
}
</style>
