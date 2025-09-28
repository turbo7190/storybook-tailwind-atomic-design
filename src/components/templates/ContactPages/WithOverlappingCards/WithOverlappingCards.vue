<template>
  <div class="bg-white h-screen overflow-scroll">
    <header-section v-bind="headerSectionProps" />

    <main>
      <div class="bg-blue-gray-50">
        <!-- FAQ -->
        <section
          class="max-w-md mx-auto py-24 px-4 divide-y-2 divide-blue-gray-200 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
          aria-labelledby="faq-heading"
        >
          <Faq :faqs="faqs" />
        </section>
      </div>

      <!-- CTA Section -->
      <section class="relative bg-white" aria-labelledby="join-heading">
        <CTA />
      </section>

      <!-- Newsletter Section -->
      <News />
    </main>
    <CompanyFooter />
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import HeaderSection from "../../../../components/organisms/HeaderSections/WithBackgroundImageAndOverlappingCards/WithBackgroundImageAndOverlappingCards.vue";
import Faq from "../../../../components/organisms/FAQs/ThreeColumns/ThreeColumns.vue";
import CTA from "../../../../components/organisms/CTASections/BrandPanelWithOverlappingImage/BrandPanelWithOverlappingImage.vue";
import News from "../../../../components/organisms/NewsletterSections/SimpleWithDescription/SimpleWithDescription.vue";
import CompanyFooter from "../../../../components/organisms/Footer/FourColumnWithCompanyMission/FourColumnWithCompanyMission.vue";

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    Bars3Icon,
    XMarkIcon,
    HeaderSection,
    Faq,
    CTA,
    News,
    CompanyFooter,
  },
  props: [
    "navigation",
    "supportLinks",
    "faqs",
    "footerNavigation",
    "headerSectionProps",
  ],
};
</script>
