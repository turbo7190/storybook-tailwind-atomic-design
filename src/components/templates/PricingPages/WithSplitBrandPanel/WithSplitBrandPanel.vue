<template>
  <div class="bg-white h-screen overflow-scroll">
    <SimpleBrandedWithStackedLinks />
    <!-- Split brand panel -->
    <SplitWithBrandPanel />
    <!-- Logo cloud -->
    <SimpleWithHeading />

    <!-- FAQs -->
    <ThreeColumns :faqs="faqs" />
    <!-- CTA section -->
    <SimpleCenterBranded />
    <!-- Footer 4-column with newsletter and localization dark -->
    <FourColumnWithNewsletterAndLocalizationDark />
  </div>
</template>

<script>
import SimpleBrandedWithStackedLinks from "../../../../components/organisms/Headers/SimpleBrandedWithStackedLinks/SimpleBrandedWithStackedLinks.vue";
import SplitWithBrandPanel from "../../../../components/organisms/PricingSections/SplitWithBrandPanel/SplitWithBrandPanel.vue";
import SimpleWithHeading from "../../../../components/organisms/LogoClouds/SimpleWithHeading/SimpleWithHeading.vue";
import ThreeColumns from "../../../../components/organisms/FAQs/ThreeColumns/ThreeColumns.vue";
import SimpleCenterBranded from "../../../../components/organisms/CTASections/SimpleCenterBranded/SimpleCenterBranded.vue";
import FourColumnWithNewsletterAndLocalizationDark from "../../../../components/organisms/Footer/FourColumnWithNewsletterAndLocalizationDark/FourColumnWithNewsletterAndLocalizationDark.vue";

export default {
  components: {
    FourColumnWithNewsletterAndLocalizationDark,
    SimpleCenterBranded,
    ThreeColumns,
    SimpleWithHeading,
    SplitWithBrandPanel,
    SimpleBrandedWithStackedLinks,
  },
  props: ["faqs"],
};
</script>
