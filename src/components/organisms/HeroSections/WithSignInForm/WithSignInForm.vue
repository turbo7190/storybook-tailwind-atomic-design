<template>
  <div class="relative bg-gray-800 overflow-hidden">
    <div class="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
      <svg
        class="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
        width="364"
        height="384"
        viewBox="0 0 364 384"
        fill="none"
      >
        <defs>
          <pattern
            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect
          width="364"
          height="384"
          fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
        />
      </svg>
    </div>
    <div class="relative pt-6 pb-16 sm:pb-24">
      <Popover>
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
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                  alt=""
                />
              </a>
              <div class="-mr-2 flex items-center md:hidden">
                <PopoverButton
                  class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
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
            <div class="hidden space-x-10 md:flex md:ml-10">
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
          <div class="hidden md:flex">
            <Button
              content="Log in"
              variant="secondary"
              class="text-base hover:text-gray-300 bg-opacity-0 text-white"
            />
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
            class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
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
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                  >
                    <Icon name="XMarkIcon" size="6" />
                  </PopoverButton>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3 space-y-1">
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
              <Button content="Sign in" size="lg" class="w-full my-2" />
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <main class="mt-16 sm:mt-24">
        <div class="mx-auto max-w-7xl">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div
              class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
            >
              <div>
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
                    weight="extrabold"
                    color="primary-400"
                    :content="subtitle"
                    class="sm:text-5xl lg:text-6xl"
                  />
                </h1>
                <Text
                  size="xl"
                  color="gray-300"
                  :content="description"
                  class="mt-6 max-w-lg mx-auto sm:max-w-3xl"
                />
                <Text
                  size="sm"
                  color="white"
                  weight="semibold"
                  :content="cloudLabel"
                  class="mt-8 uppercase tracking-wide sm:mt-10"
                />
                <div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                  <div class="flex flex-wrap items-start justify-between">
                    <div
                      v-for="item in cloudItems"
                      :key="item.title"
                      class="flex justify-center px-1"
                    >
                      <img
                        :class="item.class"
                        :src="item.source"
                        :alt="item.title"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
              <div
                class="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden"
              >
                <div class="px-4 py-8 sm:px-10">
                  <div>
                    <Text
                      size="sm"
                      weight="medium"
                      color="gray-700"
                      :content="'Sign in with'"
                    />
                    <div class="mt-1 grid grid-cols-3 gap-3">
                      <div>
                        <a
                          href="#"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                          <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                      <div>
                        <a
                          href="#"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                          <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                            />
                          </svg>
                        </a>
                      </div>
                      <div>
                        <a
                          href="#"
                          class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                          <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <Divider label="Or" position="center" class="mt-6" />

                  <div class="mt-6">
                    <form action="#" method="POST" class="space-y-6">
                      <TextInput type="text" placeholder="Full Name" />
                      <TextInput
                        type="text"
                        placeholder="Mobile number or email"
                      />
                      <TextInput type="text" placeholder="Password" />
                      <Button content="Create your account" class="w-full" />
                    </form>
                  </div>
                </div>
                <div
                  class="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10"
                >
                  <Text
                    size="xs"
                    color="gray-500"
                    content="By signing up, you agree to our Terms, Data Policy and Cookies Policy."
                    class="leading-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
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
import Divider from "../../../molecules/Dividers/WithIcon/WithIcon.vue";
/**
 * - Use it to show dark hero section with signin form
 */
export default {
  components: {
    Icon,
    Text,
    Button,
    Badge,
    TextInput,
    Link,
    Divider,
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
     * Use it for cloud label
     */
    cloudLabel: {
      type: String,
      default: "",
    },
    /**
     * Use it for clound items
     */
    cloudItems: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
