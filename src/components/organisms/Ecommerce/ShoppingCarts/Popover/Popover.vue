<template>
  <header class="relative bg-white">
    <nav aria-label="Top" class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div
        class="relative border-b border-gray-200 px-4 pb-14 sm:static sm:px-0 sm:pb-0"
      >
        <div class="h-16 flex items-center justify-between">
          <!-- Logo -->
          <div class="flex-1 flex">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <img class="h-8 w-auto" :src="logoSrc" :alt="logoAlt" />
            </a>
          </div>

          <div
            class="absolute bottom-0 inset-x-0 border-t overflow-x-auto sm:static sm:border-t-0"
          >
            <div class="h-14 flex items-center px-4 space-x-8 sm:h-auto">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="text-sm font-medium text-gray-700 hover:text-gray-800"
                >{{ item.name }}</a
              >
            </div>
          </div>

          <div class="flex-1 flex items-center justify-end">
            <!-- Search -->
            <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
              <span class="sr-only">Search</span>
              <MagnifyingGlassIcon class="w-6 h-6" aria-hidden="true" />
            </a>

            <!-- Cart -->
            <Popover class="ml-4 flow-root text-sm lg:relative lg:ml-8">
              <PopoverButton class="group -m-2 p-2 flex items-center">
                <ShoppingBagIcon
                  class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span
                  class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                  >{{ products.length }}</span
                >
                <span class="sr-only">items in cart, view bag</span>
              </PopoverButton>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <PopoverPanel
                  class="absolute top-16 inset-x-0 mt-px pb-6 bg-white shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5"
                >
                  <h2 class="sr-only">Shopping Cart</h2>

                  <form class="max-w-2xl mx-auto px-4">
                    <ul role="list" class="divide-y divide-gray-200">
                      <li
                        v-for="product in products"
                        :key="product.id"
                        class="py-6 flex items-center"
                      >
                        <img
                          :src="product.imageSrc"
                          :alt="product.imageAlt"
                          class="flex-none w-16 h-16 rounded-md border border-gray-200"
                        />
                        <div class="ml-4 flex-auto">
                          <h3 class="font-medium text-gray-900">
                            <a :href="product.href">{{ product.name }}</a>
                          </h3>
                          <p class="text-gray-500">{{ product.color }}</p>
                        </div>
                      </li>
                    </ul>

                    <button
                      type="submit"
                      class="w-full bg-primary-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500"
                    >
                      Checkout
                    </button>

                    <p class="mt-6 text-center">
                      <a
                        href="#"
                        class="text-sm font-medium text-primary-600 hover:text-primary-500"
                        >View Shopping Bag</a
                      >
                    </p>
                  </form>
                </PopoverPanel>
              </transition>
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { MagnifyingGlassIcon, ShoppingBagIcon } from "@heroicons/vue/24/outline";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
  },
  props: {
    logoSrc: {
      type: String,
      default: "",
    },
    logoAlt: {
      type: String,
      default: "",
    },
    navigation: {
      type: Array,
      default: null,
    },
    products: {
      type: Array,
      default: null,
    },
  },
};
</script>
