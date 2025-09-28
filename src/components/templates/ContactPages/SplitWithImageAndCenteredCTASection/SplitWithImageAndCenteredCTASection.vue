<template>
  <div class="bg-white h-screen overflow-scroll">
    <Popover as="header" class="relative z-10">
      <div class="bg-gray-50">
        <nav
          class="relative max-w-7xl mx-auto flex items-center justify-between pt-8 px-6 xl:px-8"
          aria-label="Global"
        >
          <div class="flex items-center justify-between w-full lg:w-auto">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <img
                class="h-8 w-auto sm:h-10"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                alt=""
              />
            </a>
            <div class="-mr-2 flex items-center lg:hidden">
              <PopoverButton
                class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-grape-500"
              >
                <span class="sr-only">Open main menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
          <div class="hidden space-x-10 lg:flex lg:ml-10">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-base font-medium text-gray-500 hover:text-gray-600"
              >{{ item.name }}</a
            >
          </div>
          <div class="hidden lg:flex lg:items-center lg:space-x-6">
            <a
              href="#"
              class="py-2 px-6 bg-white border border-transparent rounded-md shadow-md text-base font-medium text-grape-600 hover:bg-gray-50"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>

      <transition
        enter-active-class="duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          class="absolute top-0 inset-x-0 p-2 transition transform origin-top lg:hidden"
        >
          <div
            class="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
          >
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                  alt=""
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grape-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="pt-5 pb-6">
              <div class="px-2 space-y-1">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
              <div class="mt-6 px-5">
                <a
                  href="#"
                  class="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-grape-500 text-white font-medium hover:bg-grape-600"
                  >Contact</a
                >
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>

    <main>
      <!-- Header -->
      <div class="py-24 bg-gray-50 sm:py-32">
        <div
          class="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <h1
            class="text-4xl leading-10 font-extrabold tracking-tight text-gray-900 text-center sm:text-5xl sm:leading-none lg:text-6xl"
          >
            Get in touch
          </h1>
          <p
            class="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center"
          >
            Convallis feugiat et aliquet pellentesque dictum nisi, velit.
            Egestas fermentum adipiscing risus quam ac consectetur mattis turpis
            tristique.
          </p>
        </div>
      </div>

      <!-- Contact Section -->
      <split-with-image />

      <!-- CTA Section -->
      <div class="bg-grape-400">
        <div
          class="max-w-md mx-auto text-center py-16 px-4 sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32"
        >
          <h2 class="text-3xl font-extrabold sm:text-4xl">
            <span class="block text-black">Looking for a new career?</span>
            <span class="block text-grape-900">We’re hiring.</span>
          </h2>
          <a
            href="#"
            class="mt-8 w-full inline-flex items-center justify-center py-3 px-5 bg-white border border-transparent rounded-md shadow-md text-base font-medium text-grape-600 hover:bg-grape-50 sm:w-auto"
          >
            <span>See open positions</span>
            <ArrowTopRightOnSquareIcon
              class="ml-3 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </main>

    <FourColumnWithCompanyMission />
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/solid";
import SplitWithImage from "../../../../components/organisms/ContactSections/SplitWithImage/SplitWithImage.vue";
import FourColumnWithCompanyMission from "../../../../components/organisms/Footer/FourColumnWithCompanyMission/FourColumnWithCompanyMission.vue";

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ArrowTopRightOnSquareIcon,
    Bars3Icon,
    XMarkIcon,
    SplitWithImage,
    FourColumnWithCompanyMission,
  },
  props: ["navigation", "footerNavigation"],
};
</script>
