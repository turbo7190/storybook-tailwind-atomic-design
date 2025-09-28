<template>
  <div class="bg-white h-screen overflow-scroll">
    <header class="relative pb-24 bg-sky-800 sm:pb-32">
      <div class="absolute inset-0">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
        />
        <div
          class="absolute inset-0 bg-gradient-to-l from-sky-800 to-cyan-700 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <Popover as="div" class="relative z-10">
        <nav
          class="relative max-w-7xl mx-auto flex items-center justify-between pt-6 pb-2 px-4 sm:px-6 lg:px-8"
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
                class="bg-sky-800 bg-opacity-0 rounded-md p-2 inline-flex items-center justify-center text-cyan-100 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
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
              class="text-base font-medium text-white hover:text-cyan-100"
              >{{ item.name }}</a
            >
          </div>
          <div class="hidden lg:flex lg:items-center lg:space-x-6">
            <a
              href="#"
              class="py-2 px-6 bg-white bg-opacity-10 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-20"
            >
              Login
            </a>
          </div>
        </nav>

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
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
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
                    class="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-green-400 text-white font-medium hover:bg-green-500"
                    >Login</a
                  >
                </div>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <div
        class="relative mt-24 max-w-md mx-auto px-4 sm:max-w-3xl sm:mt-32 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h1
          class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Get in touch
        </h1>
        <p class="mt-6 text-xl text-cyan-100 max-w-3xl">
          Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
          lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
          consectetur. Sit justo viverra non adipisicing elit distinctio.
        </p>
      </div>
    </header>

    <main>
      <!-- Side-by-side grid -->
      <SideBySide />

      <!-- FAQ -->
      <Faqs :faqs="faqs" />

      <!-- Newsletter -->
      <News />
    </main>

    <CompanyFooter />
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import CompanyFooter from "../../../../components/organisms/Footer/FourColumnWithCompanyMission/FourColumnWithCompanyMission.vue";
import SideBySide from "../../../../components/organisms/ContactSections/SideBySideGrid/SideBySideGrid.vue";
import Faqs from "../../../../components/organisms/FAQs/OffsetWithSupportingText/OffsetWithSupportingText.vue";
import News from "../../../../components/organisms/NewsletterSections/WithParagraphOnBrandCard/WithParagraphOnBrand.vue";

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    Bars3Icon,
    XMarkIcon,
    CompanyFooter,
    SideBySide,
    Faqs,
    News,
  },
  props: ["navigation", "faqs"],
};
</script>
