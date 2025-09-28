<template>
  <div class="bg-white h-screen overflow-scroll">
    <CenteredWithBottomBorder />

    <!-- Pricing with four tiers and toggle -->
    <FourTiersWithToggle />

    <!-- Logo cloud on brand -->
    <SimpleWithHeadingOnBrand />

    <!-- FAQ offset -->
    <OffsetWithSupportingText :faqs="faqs" />

    <!-- Footer 4-column with newsletter and localization dark -->
    <FourColumnWithNewsletterAndLocalizationDark />
  </div>
</template>

<script>
import CenteredWithBottomBorder from "../../../../components/organisms/Headers/CenteredWithBottomBorder/CenteredWithBottomBorder.vue";
import FourTiersWithToggle from "../../../../components/organisms/PricingSections/FourTiersWithToggle/FourTiersWithToggle.vue";
import SimpleWithHeadingOnBrand from "../../../../components/organisms/LogoClouds/SimpleWithHeadingOnBrand/SimpleWithHeadingOnBrand.vue";
import OffsetWithSupportingText from "../../../../components/organisms/FAQs/OffsetWithSupportingText/OffsetWithSupportingText.vue";
import FourColumnWithNewsletterAndLocalizationDark from "../../../../components/organisms/Footer/FourColumnWithNewsletterAndLocalizationDark/FourColumnWithNewsletterAndLocalizationDark.vue";

export default {
  components: {
    FourColumnWithNewsletterAndLocalizationDark,
    OffsetWithSupportingText,
    SimpleWithHeadingOnBrand,
    FourTiersWithToggle,
    CenteredWithBottomBorder,
  },
  props: ["faqs"],
};
</script>
