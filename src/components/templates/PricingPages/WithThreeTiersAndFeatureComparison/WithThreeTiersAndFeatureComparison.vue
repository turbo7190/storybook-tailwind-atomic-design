<template>
  <div class="bg-gray-50 h-screen overflow-scroll">
    <SimpleBrandedWithStackedLinks />

    <main>
      <!-- Pricing section -->
      <ThreeTiersOnBrandAndFeatureComparison />

      <!-- Logo cloud -->
      <LogoCloud />

      <!-- FAQs -->
      <ThreeColumns :faqs="faqs" />

      <!-- Footer -->
      <FourColumnWithCompanyMission />
    </main>
  </div>
</template>

<script>
import SimpleBrandedWithStackedLinks from "../../../../components/organisms/Headers/SimpleBrandedWithStackedLinks/SimpleBrandedWithStackedLinks.vue";
import ThreeTiersOnBrandAndFeatureComparison from "../../../../components/organisms/PricingSections/ThreeTiersOnBrandAndFeatureComparison/ThreeTiersOnBrandAndFeatureComparison.vue";
import LogoCloud from "../../../../components/organisms/LogoClouds/Simple/Simple.vue";
import ThreeColumns from "../../../../components/organisms/FAQs/ThreeColumns/ThreeColumns.vue";
import FourColumnWithCompanyMission from "../../../../components/organisms/Footer/FourColumnWithCompanyMission/FourColumnWithCompanyMission.vue";

export default {
  components: {
    FourColumnWithCompanyMission,
    ThreeColumns,
    ThreeTiersOnBrandAndFeatureComparison,
    SimpleBrandedWithStackedLinks,
    LogoCloud,
  },
  props: ["faqs"],
};
</script>
