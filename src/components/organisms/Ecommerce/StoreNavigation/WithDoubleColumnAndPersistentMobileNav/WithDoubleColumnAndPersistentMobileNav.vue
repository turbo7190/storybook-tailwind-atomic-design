<template>
  <div class="bg-white">
    <header class="relative bg-white">
      <nav aria-label="Top" class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0">
          <div class="h-16 flex items-center justify-between">
            <!-- Logo -->
            <div class="flex-1 flex">
              <a href="#">
                <Text content="Workflow" customClass="sr-only" element="span" />
                <Image
                  class="h-8 w-auto"
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
              </a>
            </div>

            <!-- Flyout menus -->
            <PopoverGroup
              class="absolute bottom-0 inset-x-0 sm:static sm:flex-1 sm:self-stretch"
            >
              <div
                class="border-t h-14 px-4 flex space-x-8 overflow-x-auto pb-px sm:h-full sm:border-t-0 sm:justify-center sm:overflow-visible sm:pb-0"
              >
                <Popover
                  v-for="(category, categoryIdx) in items.categories"
                  :key="categoryIdx"
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
                      class="absolute top-full inset-x-0 text-gray-500 sm:text-sm"
                    >
                      <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                      <div
                        class="absolute inset-0 top-1/2 bg-white shadow"
                        aria-hidden="true"
                      />

                      <div class="relative bg-white">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                          <div
                            class="grid grid-cols-1 items-start gap-y-10 gap-x-6 pt-10 pb-12 md:grid-cols-2 lg:gap-x-8"
                          >
                            <div
                              class="grid grid-cols-1 gap-y-10 gap-x-6 lg:gap-x-8"
                            >
                              <div>
                                <Text
                                  content="Clothing"
                                  color="gray-900"
                                  id="clothing-heading"
                                />
                                <div
                                  class="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6"
                                >
                                  <ul
                                    role="list"
                                    aria-labelledby="clothing-heading"
                                    class="space-y-6 sm:space-y-4"
                                  >
                                    <li
                                      v-for="item in category.clothing[0]"
                                      :key="item.name"
                                      class="flex"
                                    >
                                      <Link
                                        :url="item.href"
                                        hoverColor="gray-800"
                                        :content="item.name"
                                      />
                                    </li>
                                  </ul>
                                  <ul
                                    role="list"
                                    aria-label="More clothing"
                                    class="mt-6 space-y-6 sm:mt-0 sm:space-y-4"
                                  >
                                    <li
                                      v-for="item in category.clothing[1]"
                                      :key="item.name"
                                      class="flex"
                                    >
                                      <Link
                                        :url="item.href"
                                        hoverColor="gray-800"
                                        :content="item.name"
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div
                              class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:gap-x-8"
                            >
                              <div>
                                <Text
                                  content="Accessories"
                                  color="gray-900"
                                  id="accessories-heading"
                                />
                                <!-- <p id="accessories-heading" class="font-medium text-gray-900">Accessories</p> -->
                                <ul
                                  role="list"
                                  aria-labelledby="accessories-heading"
                                  class="mt-4 border-t border-gray-200 pt-6 space-y-6 sm:space-y-4"
                                >
                                  <li
                                    v-for="item in category.accessories"
                                    :key="item.name"
                                    class="flex"
                                  >
                                    <Link
                                      :url="item.href"
                                      hoverColor="gray-800"
                                      :content="item.name"
                                    />
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <Text
                                  content="Categories"
                                  color="gray-900"
                                  id="categories-heading"
                                />
                                <ul
                                  role="list"
                                  aria-labelledby="categories-heading"
                                  class="mt-4 border-t border-gray-200 pt-6 space-y-6 sm:space-y-4"
                                >
                                  <li
                                    v-for="item in category.categories"
                                    :key="item.name"
                                    class="flex"
                                  >
                                    <Link
                                      :url="item.href"
                                      hoverColor="gray-800"
                                      :content="item.name"
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
                  v-for="item in items.other"
                  :key="item.name"
                  :url="item.href"
                  hoverColor="gray-800"
                  size="sm"
                  color="gray-700"
                  :content="item.name"
                  customClass="flex items-center"
                />
              </div>
            </PopoverGroup>

            <div class="flex-1 flex items-center justify-end">
              <!-- Search -->
              <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                <Text content="Search" customClass="sr-only" element="span" />
                <MagnifyingGlassIcon class="w-6 h-6" aria-hidden="true" />
              </a>

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
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/vue/24/outline";
import Image from "../../../../atoms/Image/Image.vue";
import Link from "../../../../atoms/Link/Link.vue";
import Text from "../../../../atoms/Text/Text.vue";

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    Image,
    Link,
    Text,
  },
  props: ["items"],
};
</script>
