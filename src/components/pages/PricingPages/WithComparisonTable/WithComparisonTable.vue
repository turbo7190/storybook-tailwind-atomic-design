<template>
  <div class="bg-white h-screen overflow-scroll">
    <div class="bg-primary-900">
      <!-- Header -->
      <SimpleBrandedWithStackedLinks />

      <!-- Header section with select menu -->
      <SimpleWithSelectMenuDark />
    </div>

    <!-- Comparison table -->
    <WithComparisonTable />
    <!-- Logo cloud -->
    <LogoCloud />
    <div class="bg-gray-50">
      <!-- FAQ -->
      <ThreeColumns :faqs="faqs" />
    </div>

    <!-- Feature section with brand panel -->
    <BrandPanelWithAppScreenshot />

    <!-- Footer -->
    <FourColumnWithCompanyMission />
  </div>
</template>

<script>
import SimpleBrandedWithStackedLinks from "../../../../components/organisms/Headers/SimpleBrandedWithStackedLinks/SimpleBrandedWithStackedLinks.vue";
import SimpleWithSelectMenuDark from "../../../../components/organisms/HeaderSections/SimpleWithSelectMenuDark/SimpleWithSelectMenuDark.vue";
import WithComparisonTable from "../../../../components/organisms/PricingSections/WithComparisonTable/WithComparisonTable.vue";
import LogoCloud from "../../../../components/organisms/LogoClouds/Simple/Simple.vue";
import ThreeColumns from "../../../../components/organisms/FAQs/ThreeColumns/ThreeColumns.vue";
import BrandPanelWithAppScreenshot from "../../../../components/organisms/CTASections/BrandPanelWithAppScreenshot/BrandPanelWithAppScreenshot.vue";
import FourColumnWithCompanyMission from "../../../../components/organisms/Footer/FourColumnWithCompanyMission/FourColumnWithCompanyMission.vue";

export default {
  components: {
    FourColumnWithCompanyMission,
    BrandPanelWithAppScreenshot,
    ThreeColumns,
    WithComparisonTable,
    SimpleWithSelectMenuDark,
    SimpleBrandedWithStackedLinks,
    LogoCloud,
  },
  props: ["faqs"],
};
</script>
