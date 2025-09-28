<template>
  <div class="bg-white">
    <div class="px-4 py-16 text-center sm:px-6 lg:px-8">
      <Text
        size="4xl"
        weight="extrabold"
        customClass="tracking-tight"
        color="gray-900"
        content="Workspace"
      />
      <Text
        customClass="max-w-xl mx-auto mt-4"
        size="base"
        color="gray-500"
        content="The secret to a tidy desk? Don't get rid of
				anything,
				just put it in really really nice looking containers."
      />
    </div>

    <!-- Filters -->
    <Disclosure
      as="section"
      aria-labelledby="filter-heading"
      class="relative z-10 grid items-center border-t border-b border-gray-200"
    >
      <Text id="filter-heading" customClass="sr-only" content="Filters" />
      <div class="relative col-start-1 row-start-1 py-4">
        <div
          class="flex px-4 mx-auto space-x-6 text-sm divide-x divide-gray-200 max-w-7xl sm:px-6 lg:px-8"
        >
          <div>
            <DisclosureButton
              class="flex items-center font-medium text-gray-700 group"
            >
              <FunnelIcon
                class="flex-none w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
              2 Filters
            </DisclosureButton>
          </div>
          <div class="pl-6">
            <Button
              type="button"
              customClass="text-gray-500"
              content="Clear all"
            />
          </div>
        </div>
      </div>
      <DisclosurePanel class="py-10 border-t border-gray-200">
        <div
          class="grid grid-cols-2 px-4 mx-auto text-sm max-w-7xl gap-x-4 sm:px-6 md:gap-x-6 lg:px-8"
        >
          <div
            class="grid grid-cols-1 gap-y-10 auto-rows-min md:grid-cols-2 md:gap-x-6"
          >
            <fieldset>
              <Text customClass="block" weight="medium" content="Price" />
              <div class="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                <div
                  v-for="(option, optionIdx) in filters.price"
                  :key="option.value"
                  class="flex items-center text-base sm:text-sm"
                >
                  <CheckBox
                    :title="option.label"
                    :id="`price-${optionIdx}`"
                    name="price[]"
                    :value="option.value"
                  />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <Text customClass="block" weight="medium" content="Color" />
              <div class="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                <div
                  v-for="(option, optionIdx) in filters.color"
                  :key="option.value"
                  class="flex items-center text-base sm:text-sm"
                >
                  <CheckBox
                    :title="option.label"
                    :id="`color-${optionIdx}`"
                    name="color[]"
                    :value="option.value"
                  />
                </div>
              </div>
            </fieldset>
          </div>
          <div
            class="grid grid-cols-1 gap-y-10 auto-rows-min md:grid-cols-2 md:gap-x-6"
          >
            <fieldset>
              <legend class="block font-medium">Size</legend>
              <div class="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                <div
                  v-for="(option, optionIdx) in filters.size"
                  :key="option.value"
                  class="flex items-center text-base sm:text-sm"
                >
                  <CheckBox
                    :title="option.label"
                    :id="`size-${optionIdx}`"
                    name="size[]"
                    :value="option.value"
                  />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend class="block font-medium">Category</legend>
              <div class="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                <div
                  v-for="(option, optionIdx) in filters.category"
                  :key="option.value"
                  class="flex items-center text-base sm:text-sm"
                >
                  <CheckBox
                    :title="option.label"
                    :id="`category-${optionIdx}`"
                    name="category[]"
                    :value="option.value"
                  />
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </DisclosurePanel>
      <div class="col-start-1 row-start-1 py-4">
        <div class="flex justify-end px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900"
              >
                Sort
                <Icon
                  name="ChevronDownIcon"
                  customClass="flex-shrink-0 ml-1 -mr-1 group-hover:text-gray-500"
                  :size="5"
                  color="gray-400"
                  :ariaHidden="true"
                />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute left-0 z-10 w-40 mt-2 origin-top-left bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem
                    v-for="option in sortOptions"
                    :key="option.name"
                    v-slot="{ active }"
                  >
                    <Link
                      :url="option.href"
                      :customClass="`${
                        option.current
                          ? 'font-medium text-gray-900'
                          : 'text-gray-500'
                      } ${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm`"
                      :content="option.name"
                    />
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </Disclosure>
  </div>
</template>

<script>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { ChevronDownIcon, FunnelIcon } from "@heroicons/vue/24/solid";
import Text from "../../../../atoms/Text/Text.vue";
import Button from "../../../../atoms/Button/Button.vue";
import Link from "../../../../atoms/Link/Link.vue";
import Icon from "../../../../atoms/Icons/Icons.vue";
import CheckBox from "../../../../molecules/Checkboxes/SimpleWithDescription/SimpleWithDescription.vue";

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
    FunnelIcon,
    Text,
    Button,
    Link,
    Icon,
    CheckBox,
  },
  props: {
    sortOptions: {
      type: Array,
      default: () => [],
    },
    filters: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
