<template>
  <div class="bg-white h-screen overflow-scroll">
    <Popover as="header" class="relative">
      <div class="bg-warm-gray-50">
        <nav
          class="relative max-w-7xl mx-auto flex items-center justify-between pt-6 px-6 xl:px-8"
          aria-label="Global"
        >
          <div class="flex items-center flex-1">
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
                  class="bg-warm-gray-50 rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-teal-500"
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
                class="text-base font-medium text-warm-gray-500 hover:text-warm-gray-900"
                >{{ item.name }}</a
              >
            </div>
          </div>
          <div class="hidden lg:flex lg:items-center lg:space-x-6">
            <a
              href="#"
              class="py-2 px-6 bg-warm-gray-100 border border-transparent rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-200"
            >
              Login
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
          class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top lg:hidden"
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
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
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
                  class="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50"
                  >{{ item.name }}</a
                >
              </div>
              <div class="mt-6 px-5">
                <a
                  href="#"
                  class="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-teal-500 text-white font-medium hover:bg-teal-600"
                  >Login</a
                >
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>

    <main class="overflow-hidden">
      <!-- Header -->
      <div class="bg-warm-gray-50">
        <div class="py-24 lg:py-32">
          <div
            class="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8"
          >
            <h1
              class="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl"
            >
              Get in touch
            </h1>
            <p class="mt-6 text-xl text-warm-gray-500 max-w-3xl">
              Vel nunc non ut montes, viverra tempor. Proin lectus nibh
              phasellus morbi non morbi. In elementum urna ut volutpat. Sagittis
              et vel et fermentum amet consequat.
            </p>
          </div>
        </div>
      </div>

      <!-- Contact section -->
      <Contact />

      <!-- Contact grid -->
      <ContactGrid />
    </main>

    <CompanyFooter />
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import {
  EnvelopeIcon,
  Bars3Icon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import CompanyFooter from "../../../../components/organisms/Footer/FourColumnWithCompanyMission/FourColumnWithCompanyMission.vue";
import TextInput from "../../../../components/molecules/Inputs/Component/Component.vue";
import Primary from "../../../../components/molecules/Button/Primary/Primary.vue";
import Contact from "../../../../components/organisms/ContactSections/SplitBrandPanel/SplitBrandPanel.vue";
import ContactGrid from "../../../../components/organisms/ContactSections/SimpleFourColumn/SimpleFourColumn.vue";

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    EnvelopeIcon,
    Bars3Icon,
    PhoneIcon,
    XMarkIcon,
    CompanyFooter,
    TextInput,
    Primary,
    Contact,
    ContactGrid,
  },
  props: ["navigation", "offices"],
};
</script>
