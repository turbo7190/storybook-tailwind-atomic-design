<template>
  <div class="relative bg-gray-50 overflow-hidden">
    <div
      class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
      aria-hidden="true"
    >
      <div class="relative h-full max-w-7xl mx-auto">
        <svg
          class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
          />
        </svg>
        <svg
          class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
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
            fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
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
          <div
            class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 space-x-2"
          >
            <Button
              v-for="button in buttons"
              :key="button.label"
              :content="button.label"
              :variant="button.type"
              size="lg"
            />
          </div>
        </div>
      </main>
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
 * - Use it to show a simple centered hero section
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
     * Use it for section buttons
     */
    buttons: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
