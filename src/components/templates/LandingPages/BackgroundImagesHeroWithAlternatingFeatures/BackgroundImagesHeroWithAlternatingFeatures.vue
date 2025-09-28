<template>
  <div class="bg-white h-screen overflow-scroll">
    <CardWithBackgroundImage />
    <main>
      <!-- Alternating Feature Sections -->
      <AlternatingWithOptionalTestimonial />

      <FourX2 />

      <!-- Stats section -->
      <WithFadingBackgroundImage />

      <!-- CTA Section -->
      <SimpleStacked />
    </main>

    <FourColumnWithCompanyMission />
  </div>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  InboxIcon,
  Bars3Icon,
  SparklesIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
import SimpleLinksCentered from "../../../../components/organisms/Headers/SimpleLinksCentered/SimpleLinksCentered.vue";
import CardWithBackgroundImage from "../../../../components/organisms/HeroSections/CardWithBackgroundImage/CardWithBackgroundImage.vue";
import AlternatingWithOptionalTestimonial from "../../../../components/organisms/FeatureSections/AlternatingWithOptionalTestimonial/AlternatingWithOptionalTestimonial.vue";

import FourX2 from "../../../../components/organisms/FeatureSections/4x2GridOnBrand/4x2GridOnBrand.vue";
import WithFadingBackgroundImage from "../../../../components/organisms/PageStats/WithFadingBackgroundImage/WithFadingBackgroundImage.vue";
import SimpleStacked from "../../../../components/organisms/CTASections/SimpleStacked/SimpleStacked.vue";
import FourColumnWithCompanyMission from "../../../../components/organisms/Footer/FourColumnWithCompanyMission/FourColumnWithCompanyMission.vue";

export default {
  components: {
    FourColumnWithCompanyMission,
    SimpleStacked,
    WithFadingBackgroundImage,
    AlternatingWithOptionalTestimonial,
    CardWithBackgroundImage,
    SimpleLinksCentered,
    FourX2,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    InboxIcon,
    Bars3Icon,
    SparklesIcon,
    XMarkIcon,
  },
};
</script>
