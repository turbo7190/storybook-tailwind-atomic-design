<template>
  <div class="h-screen overflow-scroll relative bg-white overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
      <svg
        class="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
        width="640"
        height="784"
        fill="none"
        viewBox="0 0 640 784"
      >
        <defs>
          <pattern
            id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
            x="118"
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
          y="72"
          width="640"
          height="640"
          class="text-gray-50"
          fill="currentColor"
        />
        <rect
          x="118"
          width="404"
          height="784"
          fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
        />
      </svg>
    </div>

    <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
      <Header
        :solutions="solutions"
        :resources="resources"
        class="bg-opacity-0"
      />

      <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div
            class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
          >
            <Text
              size="sm"
              weight="semibold"
              color="gray-500"
              :content="label"
              class="block uppercase tracking-wide sm:text-base lg:text-sm xl:text-base"
            />
            <h1 class="tracking-tight">
              <Text
                size="5xl"
                weight="extrabold"
                color="gray-900"
                :content="title"
              />
              <Text
                size="5xl"
                weight="extrabold"
                color="primary-600"
                :content="subtitle"
              />
            </h1>
            <Text
              size="xl"
              color="gray-500"
              :content="description"
              class="mt-6 max-w-lg mx-auto sm:max-w-3xl"
            />
            <div
              class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
            >
              <Text
                size="base"
                weight="medium"
                color="gray-500"
                :content="inputLabel"
              />
              <form action="#" method="POST" class="mt-3 sm:flex space-x-3">
                <TextInput :placeholder="placeholder" class="w-full" />
                <Button :content="btnText" class="bg-gray-800 w-40" />
              </form>
              <Text
                size="sm"
                color="gray-500"
                :content="helpText"
                class="mt-4"
              />
            </div>
          </div>
          <div
            class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <svg
              class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
              width="640"
              height="784"
              fill="none"
              viewBox="0 0 640 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  x="118"
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
                y="72"
                width="640"
                height="640"
                class="text-gray-50"
                fill="currentColor"
              />
              <rect
                x="118"
                width="404"
                height="784"
                fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
              />
            </svg>
            <div
              class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md"
            >
              <button
                type="button"
                class="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <img class="w-full" :src="thumbnail" alt="" />
                <div
                  class="absolute inset-0 w-full h-full flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    class="h-20 w-20 text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 84 84"
                  >
                    <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                    <path
                      d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z"
                    />
                  </svg>
                </div>
              </button>
            </div>
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
import TextInput from "../../../molecules/Inputs/Component/Component.vue";
/**
 * - Use it to show a centered hero section with signin and media content
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
    TextInput,
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
     * Use it for section label
     */
    label: {
      type: String,
      default: "",
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
     * Use it for input label
     */
    inputLabel: {
      type: String,
      default: "",
    },
    /**
     * Use it for input placeholder
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * Use it for button text
     */
    btnText: {
      type: String,
      default: "",
    },
    /**
     * Use it for help text
     */
    helpText: {
      type: String,
      default: "",
    },
    /**
     * Use it for help text
     */
    thumbnail: {
      type: String,
      default: "",
    },
  },
};
</script>
