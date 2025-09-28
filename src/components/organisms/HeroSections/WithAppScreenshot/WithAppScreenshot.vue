<template>
  <div class="h-screen overflow-scroll bg-gray-50">
    <div class="relative overflow-hidden">
      <div class="absolute inset-y-0 h-full w-full" aria-hidden="true">
        <div class="relative h-full">
          <svg
            class="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
            />
          </svg>
          <svg
            class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
            />
          </svg>
        </div>
      </div>

      <div class="relative pt-6 pb-16 sm:pb-24">
        <Header
          :solutions="solutions"
          :resources="resources"
          class="bg-opacity-0"
        />

        <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div class="text-center">
            <h1 class="text-center tracking-tight">
              <Text
                size="4xl"
                weight="extrabold"
                color="gray-900"
                :content="title"
                class="sm:text-5xl lg:text-6xl"
              />
              <Text
                size="4xl"
                weight="extrabold"
                color="primary-600"
                :content="subtitle"
                class="sm:text-5xl lg:text-6xl"
              />
            </h1>
            <Text
              size="xl"
              color="gray-500"
              :content="description"
              class="mt-6 max-w-lg mx-auto text-center sm:max-w-3xl"
            />
          </div>
        </main>
      </div>

      <div class="relative">
        <div class="absolute inset-0 flex flex-col" aria-hidden="true">
          <div class="flex-1" />
          <div class="flex-1 w-full bg-gray-800" />
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <img
            class="relative rounded-lg shadow-lg"
            :src="screenshot"
            alt="App screenshot"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import Secondary from "../../../molecules/Button/Secondary/Secondary.vue";
import Primary from "../../../molecules/Button/Primary/Primary.vue";
import Header from "../../Headers/SimpleLinksCentered/SimpleLinksCentered.vue";
import Text from "../../../atoms/Text/Text.vue";
import Button from "../../../atoms/Button/Button.vue";
/**
 * - Use it to show a simple centered hero section with app screenshot
 */
export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    Bars3Icon,
    XMarkIcon,
    Secondary,
    Primary,
    Header,
    Text,
    Button,
  },
  props: {
    /**
     * Use it for solutions
     */
    solutions: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it for resources
     */
    resources: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it for section title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Use it for section subtitle
     */
    subtitle: {
      type: String,
      default: "",
    },
    /**
     * Use it for section description
     */
    description: {
      type: String,
      default: "",
    },
    /**
     * Use it for section screenshot
     */
    screenshot: {
      type: String,
      default: "",
    },
  },
};
</script>
