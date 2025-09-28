<template>
  <div class="bg-white">
    <div class="py-16 sm:py-24">
      <div class="max-w-7xl mx-auto sm:px-2 lg:px-8">
        <div class="max-w-2xl mx-auto px-4 lg:max-w-4xl lg:px-0">
          <Text
            size="2xl"
            weight="extrabold"
            color="gray-900"
            class="tracking-tight sm:text-3xl"
            :content="title"
          />
          <Text
            size="sm"
            weight="normal"
            color="gray-500"
            class="mt-2"
            :content="description"
          />
        </div>
      </div>

      <div class="mt-16">
        <div class="max-w-7xl mx-auto sm:px-2 lg:px-8">
          <div class="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            <div
              v-for="order in orders"
              :key="order.number"
              class="bg-white border-t border-b border-gray-200 shadow-sm sm:rounded-lg sm:border"
            >
              <div
                class="flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6"
              >
                <dl
                  class="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2"
                >
                  <div>
                    <Text
                      size="sm"
                      weight="medium"
                      color="gray-900"
                      content="Order number"
                    />
                    <Text
                      size="sm"
                      color="gray-600"
                      :content="order.number"
                      class="md:mt-1"
                    />
                  </div>
                  <div class="hidden sm:block">
                    <Text
                      size="sm"
                      weight="medium"
                      color="gray-900"
                      content="Date placed"
                    />
                    <Text
                      size="sm"
                      color="gray-600"
                      :content="order.createdDate"
                      class="md:mt-1"
                    />
                  </div>
                  <div>
                    <Text
                      size="sm"
                      weight="medium"
                      color="gray-900"
                      content="Total amount"
                    />
                    <Text
                      size="sm"
                      color="gray-600"
                      :content="order.total"
                      class="md:mt-1"
                    />
                  </div>
                </dl>

                <Menu as="div" class="relative flex justify-end lg:hidden">
                  <div class="flex items-center">
                    <MenuButton
                      class="-m-2 p-2 flex items-center text-gray-400 hover:text-gray-500"
                    >
                      <Icon
                        name="EllipsisVerticalIcon"
                        size="6"
                        color="gray-400"
                      />
                    </MenuButton>
                  </div>

                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <MenuItems
                      class="origin-bottom-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <div class="py-1">
                        <MenuItem v-slot="{ active }">
                          <Link
                            size="sm"
                            :url="order.href"
                            :color="active ? 'gray-900' : 'gray-700'"
                            class="block px-4 py-2"
                            :class="active && 'bg-gray-100'"
                            :content="'View'"
                          />
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                          <Link
                            size="sm"
                            :url="order.href"
                            :color="active ? 'gray-900' : 'gray-700'"
                            class="block px-4 py-2"
                            :class="active && 'bg-gray-100'"
                            :content="'Invoice'"
                          />
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>

                <div
                  class="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4 text-sm"
                >
                  <Button
                    v-for="button in buttons"
                    :content="button.label"
                    :key="button.label"
                    variant="secondary"
                    :onClick="button.action"
                  />
                </div>
              </div>

              <!-- Products -->
              <ul role="list" class="divide-y divide-gray-200">
                <li
                  v-for="product in order.products"
                  :key="product.id"
                  class="p-4 sm:p-6"
                >
                  <div class="flex items-center sm:items-start">
                    <div
                      class="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden sm:w-40 sm:h-40"
                    >
                      <img
                        :src="product.imageSrc"
                        :alt="product.imageAlt"
                        class="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div class="flex-1 ml-6 text-sm">
                      <div
                        class="font-medium text-gray-900 sm:flex sm:justify-between"
                      >
                        <h5>{{ product.name }}</h5>
                        <p class="mt-2 sm:mt-0">{{ product.price }}</p>
                      </div>
                      <Text
                        size="sm"
                        color="gray-500"
                        class="hidden sm:block sm:mt-2"
                        :content="product.description"
                      />
                    </div>
                  </div>

                  <div class="mt-6 sm:flex sm:justify-between">
                    <div class="flex items-center">
                      <Icon name="CheckCircleIcon" size="5" color="green-500" />
                      <Text
                        size="sm"
                        weight="medium"
                        color="gray-500"
                        class="ml-2"
                        :content="`Delivered on ${order.deliveredDate}`"
                      />
                    </div>

                    <div
                      class="mt-6 border-t border-gray-200 pt-4 flex items-center space-x-4 divide-x divide-gray-200 text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0"
                    >
                      <Link
                        color="primary-600"
                        hoverColor="primary-500"
                        size="sm"
                        weight="medium"
                        content="View Product"
                        :url="product.href"
                      />
                      <div
                        class="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6"
                      >
                        <Link
                          color="primary-600"
                          hoverColor="primary-500"
                          size="sm"
                          weight="medium"
                          content="Buy Again"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Text from "../../../../atoms/Text/Text.vue";
import Button from "../../../../atoms/Button/Button.vue";
import Link from "../../../../atoms/Link/Link.vue";
import Icon from "../../../../atoms/Icons/Icons.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
/**
 * - Use it to show invoice panels
 */
export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Text,
    Button,
    Link,
    Icon,
  },
  props: {
    /**
     * use it for title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * use it for description
     */
    description: {
      type: String,
      default: "",
    },
    /**
     * use it for orders list
     */
    orders: {
      type: Array,
      default: () => [],
    },
    /**
     * use it for buttons list
     */
    buttons: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
