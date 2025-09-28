<template>
  <div class="h-screen overflow-scroll min-h-full flex flex-col">
    <NavBar />
    <main
      class="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8"
    >
      <div class="flex-shrink-0 my-auto py-16 sm:py-32">
        <p
          class="text-sm font-semibold text-primary-600 uppercase tracking-wide"
        >
          404 error
        </p>
        <h1
          class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
        >
          Page not found
        </h1>
        <p class="mt-2 text-base text-gray-500">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div class="mt-6">
          <TextLink
            content="Go back home &rarr;"
            decoration="no-underline"
            color="primary-600"
          />
        </div>
      </div>
    </main>

    <CompanyFooter />
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import NavBar from "../../../../components/organisms/Navbars/SimpleWithMenuButtonOnLeft/SimpleWithMenuButtonOnLeft.vue";
import CompanyFooter from "../../../../components/organisms/Footer/FourColumnWithCompanyMission/FourColumnWithCompanyMission.vue";
import TextLink from "../../../../components/atoms/Link/Link.vue";

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    Bars3Icon,
    XMarkIcon,
    NavBar,
    CompanyFooter,
    TextLink,
  },
};
</script>
