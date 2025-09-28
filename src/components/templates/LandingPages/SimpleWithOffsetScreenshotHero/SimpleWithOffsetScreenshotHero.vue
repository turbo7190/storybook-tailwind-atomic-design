<template>
  <div class="bg-white h-screen overflow-scroll">
    <main>
      <!-- Hero section -->
      <SplitWithScreenshot />

      <!-- Testimonial/stats section -->
      <WithTestimonialAndStats />
      <!-- Logo cloud section -->
      <SimpleWithGridOnRight />

      <!-- CTA section -->
      <SimpleCenterBranded />
    </main>

    <!-- Footer section -->
    <SimpleCentered />
  </div>
</template>

<script>
import { ChevronRightIcon, StarIcon } from "@heroicons/vue/24/solid";
import SplitWithScreenshot from "../../../../components/organisms/HeroSections/SplitWithScreenshot/SplitWithScreenshot.vue";
import WithTestimonialAndStats from "../../../../components/organisms/ContentSections/WithTestimonialAndStats/WithTestimonialAndStats.vue";
import SimpleWithGridOnRight from "../../../../components/organisms/LogoClouds/SplitWithGridOnRight/SimpleWithGridOnRight.vue";
import SimpleCenterBranded from "../../../../components/organisms/CTASections/SimpleCenterBranded/SimpleCenterBranded.vue";
import SimpleCentered from "../../../../components/organisms/Footer/SimpleCentered/SimpleCentered.vue";

export default {
  components: {
    SimpleCentered,
    SimpleCenterBranded,
    SimpleWithGridOnRight,
    WithTestimonialAndStats,
    SplitWithScreenshot,
    ChevronRightIcon,
    StarIcon,
  },
};
</script>
