<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 lg:hidden"
        @close="open = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto"
          >
            <div class="px-4 pt-5 pb-2 flex">
              <button
                type="button"
                class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                @click="open = false"
              >
                <Text
                  content="Close menu"
                  customClass="sr-only"
                  element="span"
                />
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <!-- Links -->
            <TabGroup as="div" class="mt-2">
              <div class="border-b border-gray-200">
                <TabList class="-mb-px flex px-4 space-x-8">
                  <Tab
                    as="template"
                    v-for="category in items.categories"
                    :key="category.name"
                    v-slot="{ selected }"
                  >
                    <Button
                      :customClass="[
                        selected
                          ? 'text-primary-600 border-primary-600'
                          : 'text-gray-900 border-transparent',
                        'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium',
                      ]"
                      :content="category.name"
                    />
                  </Tab>
                </TabList>
              </div>
              <TabPanels as="template">
                <TabPanel
                  v-for="category in items.categories"
                  :key="category.name"
                  class="px-4 py-6 space-y-12"
                >
                  <div class="grid grid-cols-2 gap-x-4 gap-y-10">
                    <div
                      v-for="item in category.featured"
                      :key="item.name"
                      class="group relative"
                    >
                      <div
                        class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75"
                      >
                        <Image
                          :src="item.imageSrc"
                          :alt="item.imageAlt"
                          customClass="object-center h-full w-full object-cover"
                        />
                      </div>
                      <Link
                        :url="item.href"
                        size="sm"
                        color="gray-900"
                        :content="item.name"
                        customClass="mt-6 block"
                      />
                      <Text
                        color="gray-700"
                        size="sm"
                        content="Shop now"
                        customClass="mt-1"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>

            <div class="border-t border-gray-200 py-6 px-4 space-y-6">
              <div
                v-for="page in items.pages"
                :key="page.name"
                class="flow-root"
              >
                <Link
                  :url="page.href"
                  color="gray-900"
                  :content="page.name"
                  customClass="-m-2 p-2 block"
                />
              </div>
            </div>

            <div class="border-t border-gray-200 py-6 px-4 space-y-6">
              <div class="flow-root">
                <Link
                  color="gray-900"
                  content="Create an account"
                  customClass="-m-2 p-2 block"
                />
              </div>
              <div class="flow-root">
                <Link
                  color="gray-900"
                  content="Sign in"
                  customClass="-m-2 p-2 block"
                />
              </div>
            </div>

            <div class="border-t border-gray-200 py-6 px-4 space-y-6">
              <!-- Currency selector -->
              <form>
                <div class="inline-block">
                  <label for="mobile-currency" class="sr-only">Currency</label>
                  <div
                    class="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white"
                  >
                    <select
                      id="mobile-currency"
                      name="currency"
                      class="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent"
                    >
                      <option v-for="currency in currencies" :key="currency">
                        {{ currency }}
                      </option>
                    </select>
                    <div
                      class="absolute right-0 inset-y-0 flex items-center pointer-events-none"
                    >
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        class="w-5 h-5 text-gray-500"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M6 8l4 4 4-4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>

    <header class="relative">
      <nav aria-label="Top">
        <!-- Top navigation -->
        <div class="bg-gray-900">
          <div
            class="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8"
          >
            <!-- Currency selector -->
            <form>
              <div>
                <label for="desktop-currency" class="sr-only">Currency</label>
                <div
                  class="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white"
                >
                  <select
                    id="desktop-currency"
                    name="currency"
                    class="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent"
                  >
                    <option v-for="currency in currencies" :key="currency">
                      {{ currency }}
                    </option>
                  </select>
                  <div
                    class="absolute right-0 inset-y-0 flex items-center pointer-events-none"
                  >
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      class="w-5 h-5 text-gray-300"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M6 8l4 4 4-4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </form>

            <div class="flex items-center space-x-6">
              <Link
                color="white"
                size="sm"
                hoverColor="gray-100"
                content="Sign in"
              />
              <Link
                color="white"
                size="sm"
                hoverColor="gray-100"
                content="Create an account"
              />
            </div>
          </div>
        </div>

        <!-- Secondary navigation -->
        <div class="bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="border-b border-gray-200">
              <div class="h-16 flex items-center justify-between">
                <!-- Logo (lg+) -->
                <div class="hidden lg:flex-1 lg:flex lg:items-center">
                  <a href="#">
                    <Text
                      content="Workflow"
                      customClass="sr-only"
                      element="span"
                    />
                    <Image
                      customClass="h-8 w-auto"
                      src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    />
                  </a>
                </div>

                <div class="hidden h-full lg:flex">
                  <!-- Flyout menus -->
                  <PopoverGroup class="px-4 bottom-0 inset-x-0">
                    <div class="h-full flex justify-center space-x-8">
                      <Popover
                        v-for="category in items.categories"
                        :key="category.name"
                        class="flex"
                        v-slot="{ open }"
                      >
                        <div class="relative flex">
                          <PopoverButton
                            :class="[
                              open
                                ? 'border-primary-600 text-primary-600'
                                : 'border-transparent text-gray-700 hover:text-gray-800',
                              'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px',
                            ]"
                          >
                            {{ category.name }}
                          </PopoverButton>
                        </div>

                        <transition
                          enter-active-class="transition ease-out duration-200"
                          enter-from-class="opacity-0"
                          enter-to-class="opacity-100"
                          leave-active-class="transition ease-in duration-150"
                          leave-from-class="opacity-100"
                          leave-to-class="opacity-0"
                        >
                          <PopoverPanel
                            class="absolute top-full inset-x-0 text-sm text-gray-500"
                          >
                            <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                            <div
                              class="absolute inset-0 top-1/2 bg-white shadow"
                              aria-hidden="true"
                            />

                            <div class="relative bg-white">
                              <div class="max-w-7xl mx-auto px-8">
                                <div
                                  class="grid grid-cols-4 gap-y-10 gap-x-8 py-16"
                                >
                                  <div
                                    v-for="item in category.featured"
                                    :key="item.name"
                                    class="group relative"
                                  >
                                    <div
                                      class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75"
                                    >
                                      <Image
                                        :src="item.imageSrc"
                                        :alt="item.imageAlt"
                                        customClass="object-center h-full w-full object-cover"
                                      />
                                    </div>
                                    <Link
                                      :url="item.href"
                                      color="gray-900"
                                      size="sm"
                                      customClass="mt-4 block"
                                      :content="item.name"
                                    />
                                    <Text
                                      content="Shop now"
                                      customClass="mt-1"
                                      aria-hidden="true"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </transition>
                      </Popover>

                      <Link
                        v-for="page in items.pages"
                        :key="page.name"
                        :url="page.href"
                        color="gray-700"
                        size="sm"
                        :content="page.name"
                        hoverColor="gray-800"
                        customClass="flex items-center"
                      />
                    </div>
                  </PopoverGroup>
                </div>

                <!-- Mobile menu and search (lg-) -->
                <div class="flex-1 flex items-center lg:hidden">
                  <button
                    type="button"
                    class="-ml-2 bg-white p-2 rounded-md text-gray-400"
                    @click="open = true"
                  >
                    <Text
                      content="Open menu"
                      customClass="sr-only"
                      element="span"
                    />
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                  </button>

                  <!-- Search -->
                  <a
                    href="#"
                    class="ml-2 p-2 text-gray-400 hover:text-gray-500"
                  >
                    <Text
                      content="Search"
                      customClass="sr-only"
                      element="span"
                    />
                    <MagnifyingGlassIcon class="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>

                <!-- Logo (lg-) -->
                <a href="#" class="lg:hidden">
                  <Text
                    content="Workflow"
                    customClass="sr-only"
                    element="span"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    customClass="h-8 w-auto"
                  />
                </a>

                <div class="flex-1 flex items-center justify-end">
                  <a
                    href="#"
                    class="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"
                  >
                    Search
                  </a>

                  <div class="flex items-center lg:ml-8">
                    <!-- Help -->
                    <a
                      href="#"
                      class="p-2 text-gray-400 hover:text-gray-500 lg:hidden"
                    >
                      <Text
                        content="Help"
                        customClass="sr-only"
                        element="span"
                      />
                      <QuestionMarkCircleIcon
                        class="w-6 h-6"
                        aria-hidden="true"
                      />
                    </a>
                    <a
                      href="#"
                      class="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"
                      >Help</a
                    >

                    <!-- Cart -->
                    <div class="ml-4 flow-root lg:ml-8">
                      <a href="#" class="group -m-2 p-2 flex items-center">
                        <ShoppingBagIcon
                          class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <Text
                          content="0"
                          size="sm"
                          weight="medium"
                          color="gray-700"
                          customClass="ml-2 group-hover:text-gray-800"
                          element="span"
                        />
                        <Text
                          content="items in cart, view bag"
                          customClass="sr-only"
                          element="span"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  QuestionMarkCircleIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import Button from "../../../../atoms/Button/Button.vue";
import Image from "../../../../atoms/Image/Image.vue";
import Link from "../../../../atoms/Link/Link.vue";
import Text from "../../../../atoms/Text/Text.vue";

export default {
  components: {
    Dialog,
    DialogOverlay,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
    Bars3Icon,
    QuestionMarkCircleIcon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    XMarkIcon,
    Button,
    Image,
    Link,
    Text,
  },
  props: ["currencies", "items"],
  setup() {
    const open = ref(false);

    return {
      open,
    };
  },
};
</script>
