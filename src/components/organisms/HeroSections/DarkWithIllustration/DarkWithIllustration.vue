<template>
  <div class="relative overflow-scroll h-screen">
    <Popover as="header" class="relative">
      <div class="bg-gray-900 pt-6">
        <nav
          class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div class="flex items-center flex-1">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <img
                  class="h-8 w-auto sm:h-10"
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                  alt=""
                />
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <PopoverButton
                  class="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                >
                  <Icon
                    name="Bars3Icon"
                    size="6"
                    aria-hidden="true"
                    color="white"
                  />
                </PopoverButton>
              </div>
            </div>
            <div class="hidden space-x-8 md:flex md:ml-10">
              <Link
                v-for="item in navigation"
                :key="item.name"
                :url="item.href"
                :content="item.name"
                weight="medium"
                color="white"
                hoverColor="gray-300"
              />
            </div>
          </div>
          <div class="hidden md:flex md:items-center md:space-x-6">
            <Button
              content="Log in"
              variant="primary"
              class="text-base hover:text-gray-300 bg-opacity-0"
            />
            <Button
              content="Start free trial"
              variant="secondary"
              class="text-base text-white hover:text-gray-300 bg-opacity-25"
            />
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
          class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
        >
          <div
            class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
          >
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt=""
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600"
                >
                  <Icon name="XMarkIcon" size="6" />
                </PopoverButton>
              </div>
            </div>
            <div class="pt-5 pb-6">
              <div class="px-2 space-y-1">
                <Link
                  v-for="item in navigation"
                  :key="item.name"
                  :url="item.href"
                  :content="item.name"
                  weight="medium"
                  color="gray-900"
                  hoverColor="gray-50"
                  class="block px-3 py-2 rounded-md"
                />
              </div>
              <div class="mt-6 px-5">
                <Button content="Start free trial" size="lg" class="w-full" />
              </div>
              <div class="mt-6 px-5">
                <p class="flex justify-center">
                  <Text
                    weight="medium"
                    color="gray-500"
                    content="Existing customer?"
                    class="mr-1"
                  />
                  <Link
                    src="#"
                    color="gray-900"
                    class="hover:underline"
                    content="Login"
                  />
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
                  class="inline-flex items-center bg-black rounded-full p-1 pr-2"
                >
                  <Badge
                    label="We're hiring"
                    bgColor="primary-500"
                    textSize="xs"
                    textColor="white"
                    px="3"
                    py="0.5"
                    class="font-semibold leading-5 uppercase tracking-wide"
                  />
                  <Text
                    size="sm"
                    color="white"
                    content="Visit our careers page"
                    class="ml-4 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  />
                  <Icon
                    name="ChevronRightIcon"
                    size="5"
                    color="gray-500"
                    class="ml-2"
                  />
                </a>
                <h1 class="tracking-tight mt-4">
                  <Text
                    size="4xl"
                    weight="extrabold"
                    color="white"
                    :content="title"
                    class="sm:text-5xl lg:text-6xl"
                  />
                  <Text
                    size="4xl"
                    color="primary-200"
                    :content="subtitle"
                    class="sm:text-5xl lg:text-6xl"
                  />
                </h1>
                <Text
                  size="xl"
                  color="primary-200"
                  :content="description"
                  class="mt-6 max-w-lg mx-auto sm:max-w-3xl"
                />
                <div class="mt-10 sm:mt-12">
                  <form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">
                    <div class="sm:flex">
                      <div class="min-w-0 flex-1">
                        <TextInput
                          :placeholder="placeholder"
                          custom-class="py-3 sm:text-base"
                        />
                      </div>
                      <div class="mt-3 sm:mt-0 sm:ml-2">
                        <Button
                          variant="primary"
                          :content="btnText"
                          size="xl"
                          class="rounded-md"
                        />
                      </div>
                    </div>
                    <Text
                      :content="helpText"
                      size="sm"
                      color="gray-300"
                      class="mt-3 sm:mt-4"
                    />
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
                  :src="image"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- More main page content here... -->
      <slot></slot>
    </main>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
import TextInput from "../../../molecules/Inputs/Component/Component.vue";
import Button from "../../../atoms/Button/Button.vue";
import Link from "../../../atoms/Link/Link.vue";
import Badge from "../../../molecules/Badge/Basic/Basic.vue";
/**
 * - Use it to show dark hero sections with illustration
 */
export default {
  components: {
    Icon,
    Text,
    Button,
    Badge,
    TextInput,
    Link,
    Popover,
    PopoverButton,
    PopoverPanel,
  },
  props: {
    /**
     * use it for navigation
     */
    navigation: {
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
     * Use it for section background image
     */
    image: {
      type: String,
      default: "",
    },
  },
};
</script>
