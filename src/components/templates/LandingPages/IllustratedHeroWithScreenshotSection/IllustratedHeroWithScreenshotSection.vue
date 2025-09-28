<template>
  <div class="bg-white h-screen overflow-scroll">
    <div class="relative overflow-hidden">
      <Popover as="header" class="relative">
        <div class="bg-gray-900 pt-6">
          <nav
            class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div class="flex items-center flex-1">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span class="sr-only">Workflow</span>
                  <img
                    class="h-8 w-auto sm:h-10"
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                    alt=""
                  />
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <PopoverButton
                    class="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                  >
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="hidden space-x-8 md:flex md:ml-10">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="text-base font-medium text-white hover:text-gray-300"
                  >{{ item.name }}</a
                >
              </div>
            </div>
            <div class="hidden md:flex md:items-center md:space-x-6">
              <a
                href="#"
                class="text-base font-medium text-white hover:text-gray-300"
              >
                Log in
              </a>
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
              >
                Start free trial
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
            class="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
          >
            <div
              class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
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
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
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
                    class="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700"
                    >Start free trial</a
                  >
                </div>
                <div class="mt-6 px-5">
                  <p class="text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <a href="#" class="text-gray-900 hover:underline">Login</a>
                  </p>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
      <main>
        <div
          class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden"
        >
          <div class="mx-auto max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
              <div
                class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
              >
                <div class="lg:py-24">
                  <a
                    href="#"
                    class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span
                      class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full"
                      >We're hiring</span
                    >
                    <span class="ml-4 text-sm">Visit our careers page</span>
                    <ChevronRightIcon
                      class="ml-2 w-5 h-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </a>
                  <h1
                    class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
                  >
                    <span class="block">A better way to</span>
                    <span
                      class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5"
                      >ship web apps</span
                    >
                  </h1>
                  <p
                    class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl"
                  >
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat.
                  </p>
                  <div class="mt-10 sm:mt-12">
                    <form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div class="sm:flex">
                        <div class="min-w-0 flex-1">
                          <label for="email" class="sr-only"
                            >Email address</label
                          >
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div class="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                          >
                            Start free trial
                          </button>
                        </div>
                      </div>
                      <p class="mt-3 text-sm text-gray-300 sm:mt-4">
                        Start your free 14-day trial, no credit card necessary.
                        By providing your email, you agree to our
                        <a href="#" class="font-medium text-white"
                          >terms of service</a
                        >.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div
                  class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
                >
                  <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
                  <img
                    class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature section with screenshot -->
        <div class="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
          <div
            class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl"
          >
            <div>
              <h2
                class="text-base font-semibold tracking-wider text-cyan-600 uppercase"
              >
                Serverless
              </h2>
              <p
                class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
              >
                No server? No problem.
              </p>
              <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                Phasellus lorem quam molestie id quisque diam aenean nulla in.
                Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
                condimentum id viverra nulla.
              </p>
            </div>
            <div class="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
              <img
                class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                alt=""
              />
            </div>
          </div>
        </div>

        <!-- Feature section with grid -->
        <GridWithOffsetIcons />

        <!-- Testimonial section -->
        <WithOverlappingImage />

        <!-- Blog section -->
        <ThreeColumnCards :posts="blogPosts" />

        <!-- CTA Section -->
        <SplitWithImage />
      </main>
      <FourColumnWithCompanyMission />
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import {
  ChevronRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/vue/24/solid";
import GridWithOffsetIcons from "../../../../components/organisms/FeatureSections/GridWithOffsetIcons/GridWithOffsetIcons.vue";
import WithOverlappingImage from "../../../../components/organisms/Testimonials/WithOverlappingImage/WithOverlappingImage.vue";
import ThreeColumnCards from "../../../../components/organisms/BlogSections/ThreeColumnCards/ThreeColumnCards.vue";
import SplitWithImage from "../../../../components/organisms/CTASections/SplitWithImage/SplitWithImage.vue";
import FourColumnWithCompanyMission from "../../../../components/organisms/Footer/FourColumnWithCompanyMission/FourColumnWithCompanyMission.vue";
export default {
  components: {
    FourColumnWithCompanyMission,
    SplitWithImage,
    ThreeColumnCards,
    WithOverlappingImage,
    GridWithOffsetIcons,
    Popover,
    PopoverButton,
    PopoverPanel,
    ChevronRightIcon,
    ArrowTopRightOnSquareIcon,
    Bars3Icon,
    XMarkIcon,
  },
  props: ["navigation", "features", "blogPosts", "footerNavigation"],
};
</script>
