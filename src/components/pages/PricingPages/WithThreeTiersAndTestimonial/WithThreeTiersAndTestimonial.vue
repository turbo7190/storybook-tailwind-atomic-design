<template>
  <div class="bg-white h-screen overflow-scroll">
    <!-- Header and Page Header -->
    <div class="relative">
      <!-- Header -->
      <CenteredWithBottomBorder
        :solutions="solutions"
        :calls-to-action="callsToAction"
        :resources="resources"
        :recent-posts="recentPosts"
      />
      <!-- Page Header -->
      <!-- Pricing Section -->
      <ThreeTiers :pricing="pricing" />
    </div>

    <main>
      <!-- Logo Cloud -->
      <LogoCloud />
      <!-- Testimonial -->
      <WithBackgroundImage />

      <!-- FAQ -->
      <SideBySide :faqs="faqs" />
    </main>

    <!-- Footer -->
    <FourColumnWithCompanyMission />
  </div>
</template>

<script>
import CenteredWithBottomBorder from "../../../../components/organisms/Headers/CenteredWithBottomBorder/CenteredWithBottomBorder.vue";
import ThreeTiers from "../../../../components/organisms/PricingSections/ThreeTiers/ThreeTiers.vue";
import LogoCloud from "../../../../components/organisms/LogoClouds/Simple/Simple.vue";
import WithBackgroundImage from "../../../../components/organisms/Testimonials/WithBackgroundImage/WithBackgroundImage.vue";
import SideBySide from "../../../../components/organisms/FAQs/SideBySide/SideBySide.vue";
import FourColumnWithCompanyMission from "../../../../components/organisms/Footer/FourColumnWithCompanyMission/FourColumnWithCompanyMission.vue";

export default {
  components: {
    FourColumnWithCompanyMission,
    SideBySide,
    WithBackgroundImage,
    ThreeTiers,
    CenteredWithBottomBorder,
    LogoCloud,
  },
  props: [
    "faqs",
    "pricing",
    "solutions",
    "callsToAction",
    "resources",
    "recentPosts",
  ],
};
</script>
