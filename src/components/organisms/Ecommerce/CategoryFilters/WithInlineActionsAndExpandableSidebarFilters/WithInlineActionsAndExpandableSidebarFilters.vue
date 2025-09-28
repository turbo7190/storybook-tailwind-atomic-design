<template>
  <div class="bg-white">
    <div>
      <!-- Mobile filter dialog -->
      <TransitionRoot as="template" :show="mobileFiltersOpen">
        <Dialog
          as="div"
          class="fixed inset-0 flex z-40 lg:hidden"
          @close="mobileFiltersOpen = false"
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
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <div
              class="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto"
            >
              <div class="px-4 flex items-center justify-between">
                <Text
                  size="lg"
                  weight="medium"
                  color="gray-900"
                  content="Filters"
                />
                <Button
                  :leading="true"
                  type="button"
                  customClass="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 hover:text-gray-500"
                  @click="mobileFiltersOpen = false"
                >
                  <Text customClass="sr-only" content="Close menu" />
                  <Icon
                    name="XMarkIcon"
                    color="gray-400"
                    hoverTextColor="gray-500"
                    :size="6"
                    :ariaHidden="true"
                  />
                </Button>
              </div>

              <!-- Filters -->
              <form class="mt-4 border-t border-gray-200">
                <Text customClass="sr-only" content="Categories" />
                <ul role="list" class="font-medium text-gray-900 px-2 py-3">
                  <li v-for="category in subCategories" :key="category.name">
                    <Link
                      :url="category.href"
                      customClass="block px-2 py-3"
                      :content="category.name"
                    />
                  </li>
                </ul>

                <Disclosure
                  as="div"
                  v-for="section in filters"
                  :key="section.id"
                  class="border-t border-gray-200 px-4 py-6"
                  v-slot="{ open }"
                >
                  <div class="-mx-2 -my-3 flow-root">
                    <DisclosureButton
                      class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                    >
                      <Text
                        weight="medium"
                        color="gray-900"
                        :content="section.name"
                      />
                      <span class="ml-6 flex items-center">
                        <Icon
                          name="PlusIcon"
                          v-if="!open"
                          :size="5"
                          :ariaHidden="true"
                          color="gray-400"
                          hoverTextColor="gray-500"
                        />
                        <Icon
                          name="MinusIcon"
                          v-else
                          :size="5"
                          :ariaHidden="true"
                          color="gray-400"
                          hoverTextColor="gray-500"
                        />
                      </span>
                    </DisclosureButton>
                  </div>
                  <DisclosurePanel class="pt-6">
                    <div class="space-y-6">
                      <div
                        v-for="(option, optionIdx) in section.options"
                        :key="option.value"
                        class="flex items-center"
                      >
                        <input
                          :id="`filter-mobile-${section.id}-${optionIdx}`"
                          :name="`${section.id}[]`"
                          :value="option.value"
                          type="checkbox"
                          :checked="option.checked"
                          class="h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                        />
                        <Text
                          :for="`filter-mobile-${section.id}-${optionIdx}`"
                          customClass="ml-3 min-w-0 flex-1"
                          color="gray-500"
                          :content="option.label"
                        />
                      </div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </form>
            </div>
          </TransitionChild>
        </Dialog>
      </TransitionRoot>

      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200"
        >
          <Text
            size="4xl"
            weight="extrabold"
            color="gray-900"
            customClass="tracking-tight"
            content="New Arrivals"
          />
          <div class="flex items-center">
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
                        } ${
                          active ? 'bg-gray-100' : ''
                        } block px-4 py-2 text-sm`"
                        :content="option.name"
                      />
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>

            <Button
              :leading="true"
              type="button"
              customClass="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500"
            >
              <Text customClass="sr-only" content="View grid" />
              <Icon
                name="Squares2X2Icon"
                :size="5"
                :ariaHidden="true"
                color="gray-400"
                hoverTextColor="gray-500"
              />
            </Button>
            <Button
              :leading="true"
              type="button"
              customClass="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
              @click="mobileFiltersOpen = true"
            >
              <Text customClass="sr-only" content="Filters" />
              <Icon
                name="FunnelIcon"
                :size="5"
                :ariaHidden="true"
                color="gray-400"
                hoverTextColor="gray-500"
              />
            </Button>
          </div>
        </div>

        <section aria-labelledby="products-heading" class="pt-6 pb-24">
          <Text
            id="products-heading"
            customClass="sr-only"
            content="Products"
          />
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
            <!-- Filters -->
            <form class="hidden lg:block">
              <Text customClass="sr-only" content="Categories" />
              <ul
                role="list"
                class="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200"
              >
                <li v-for="category in subCategories" :key="category.name">
                  <Link :url="category.href" :content="category.name" />
                </li>
              </ul>

              <Disclosure
                as="div"
                v-for="section in filters"
                :key="section.id"
                class="border-b border-gray-200 py-6"
                v-slot="{ open }"
              >
                <h3 class="-my-3 flow-root">
                  <DisclosureButton
                    class="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                  >
                    <Text
                      weight="medium"
                      color="gray-900"
                      :content="section.name"
                    />
                    <span class="ml-6 flex items-center">
                      <Icon
                        name="PlusIcon"
                        v-if="!open"
                        :size="5"
                        :ariaHidden="true"
                        color="gray-400"
                        hoverTextColor="gray-500"
                      />
                      <Icon
                        name="MinusIcon"
                        v-else
                        :size="5"
                        :ariaHidden="true"
                        color="gray-400"
                        hoverTextColor="gray-500"
                      />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel class="pt-6">
                  <div class="space-y-4">
                    <div
                      v-for="(option, optionIdx) in section.options"
                      :key="option.value"
                      class="flex items-center"
                    >
                      <CheckBox
                        :title="option.label"
                        :id="`filter-${section.id}-${optionIdx}`"
                        :name="section.id"
                        :value="option.value"
                      />
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </form>

            <!-- Product grid -->
            <div class="lg:col-span-3">
              <!-- Replace with your content -->
              <div
                class="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full"
              />
              <!-- /End replace -->
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/vue/24/solid";
import Text from "../../../../atoms/Text/Text.vue";
import Button from "../../../../atoms/Button/Button.vue";
import Link from "../../../../atoms/Link/Link.vue";
import Icon from "../../../../atoms/Icons/Icons.vue";
import CheckBox from "../../../../molecules/Checkboxes/SimpleWithDescription/SimpleWithDescription.vue";

export default {
  components: {
    Dialog,
    DialogOverlay,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    ChevronDownIcon,
    FunnelIcon,
    MinusIcon,
    PlusIcon,
    Squares2X2Icon,
    XMarkIcon,
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
    subCategories: {
      type: Array,
      default: () => [],
    },
    filters: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const mobileFiltersOpen = ref(false);

    return {
      mobileFiltersOpen,
    };
  },
};
</script>
