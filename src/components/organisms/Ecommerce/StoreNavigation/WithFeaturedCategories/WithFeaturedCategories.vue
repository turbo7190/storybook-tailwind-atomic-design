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
                  class="pt-10 pb-8 px-4 space-y-10"
                >
                  <div class="grid grid-cols-2 gap-x-4">
                    <div
                      v-for="item in category.featured"
                      :key="item.name"
                      class="group relative text-sm"
                    >
                      <div
                        class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75"
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
                        :content="item.name"
                        customClass="mt-6 block"
                      />
                      <Text
                        color="gray-700"
                        content="Shop now"
                        customClass="mt-1"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div v-for="section in category.sections" :key="section.name">
                    <Text
                      :id="`${category.id}-${section.id}-heading-mobile`"
                      color="gray-900"
                      :content="section.name"
                    />
                    <ul
                      role="list"
                      :aria-labelledby="`${category.id}-${section.id}-heading-mobile`"
                      class="mt-6 flex flex-col space-y-6"
                    >
                      <li
                        v-for="item in section.items"
                        :key="item.name"
                        class="flow-root"
                      >
                        <Link
                          :url="item.href"
                          color="gray-500"
                          :content="item.name"
                          customClass="-m-2 p-2 block"
                        />
                      </li>
                    </ul>
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
                  content="Sign in"
                  customClass="-m-2 p-2 block"
                />
              </div>
              <div class="flow-root">
                <Link
                  color="gray-900"
                  content="Create account"
                  customClass="-m-2 p-2 block"
                />
              </div>
            </div>

            <div class="border-t border-gray-200 py-6 px-4">
              <a href="#" class="-m-2 p-2 flex items-center">
                <Image
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80"
                  customClass="w-5 h-auto block flex-shrink-0"
                />
                <Text
                  color="gray-900"
                  content="CAD"
                  customClass="ml-3 block text-base"
                  element="span"
                />
                <Text
                  content=", change currency"
                  customClass="sr-only"
                  element="span"
                />
              </a>
            </div>
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>

    <header class="relative bg-white">
      <Text
        size="sm"
        color="white"
        content="Get free delivery on orders over $100"
        customClass="bg-primary-600 h-10 flex items-center justify-center px-4 sm:px-6 lg:px-8"
      />

      <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="h-16 flex items-center">
            <button
              type="button"
              class="bg-white p-2 rounded-md text-gray-400 lg:hidden"
              @click="open = true"
            >
              <Text content="Open menu" customClass="sr-only" element="span" />
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0">
              <a href="#">
                <Text content="Workflow" customClass="sr-only" element="span" />
                <Image
                  customClass="h-8 w-auto"
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
              </a>
            </div>

            <!-- Flyout menus -->
            <PopoverGroup class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="h-full flex space-x-8">
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
                          <div class="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                            <div class="col-start-2 grid grid-cols-2 gap-x-8">
                              <div
                                v-for="item in category.featured"
                                :key="item.name"
                                class="group relative text-base sm:text-sm"
                              >
                                <div
                                  class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75"
                                >
                                  <Image
                                    :src="item.imageSrc"
                                    :alt="item.imageAlt"
                                    customClass="object-center w-full h-full object-cover"
                                  />
                                </div>
                                <Link
                                  :url="item.href"
                                  color="gray-900"
                                  :content="item.name"
                                  customClass="mt-6 block"
                                />
                                <Text
                                  content="Shop now"
                                  customClass="mt-1"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                            <div
                              class="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm"
                            >
                              <div
                                v-for="section in category.sections"
                                :key="section.name"
                              >
                                <p
                                  :id="`${section.name}-heading`"
                                  class="font-medium text-gray-900"
                                >
                                  {{ section.name }}
                                </p>
                                <ul
                                  role="list"
                                  :aria-labelledby="`${section.name}-heading`"
                                  class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  <li
                                    v-for="item in section.items"
                                    :key="item.name"
                                    class="flex"
                                  >
                                    <Link
                                      :url="item.href"
                                      color="gray-900"
                                      :content="item.name"
                                      hoverColor="gray-800"
                                    />
                                  </li>
                                </ul>
                              </div>
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

            <div class="ml-auto flex items-center">
              <div
                class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"
              >
                <Link color="gray-700" size="sm" content="Sign in" />
                <Text
                  customClass="h-6 w-px"
                  color="gray-200"
                  element="span"
                  aria-hidden="true"
                />
                <Link
                  color="gray-700"
                  size="sm"
                  hoverColor="gray-800"
                  content="Create account"
                />
              </div>

              <div class="hidden lg:ml-8 lg:flex">
                <a
                  href="#"
                  class="text-gray-700 hover:text-gray-800 flex items-center"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80"
                    customClass="w-5 h-auto block flex-shrink-0"
                  />
                  <Text
                    weight="medium"
                    size="sm"
                    content="CAD"
                    customClass="ml-3 block"
                    element="span"
                  />
                  <Text
                    content=", change currency"
                    customClass="sr-only"
                    element="span"
                  />
                </a>
              </div>

              <!-- Search -->
              <div class="flex lg:ml-6">
                <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                  <Text content="Search" customClass="sr-only" element="span" />
                  <MagnifyingGlassIcon class="w-6 h-6" aria-hidden="true" />
                </a>
              </div>

              <!-- Cart -->
              <div class="ml-4 flow-root lg:ml-6">
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
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    XMarkIcon,
    Button,
    Image,
    Link,
    Text,
  },
  props: ["items"],
  setup() {
    const open = ref(false);

    return {
      open,
    };
  },
};
</script>
