<template>
  <div class="min-h-full">
    <Popover as="header" class="pb-24 bg-primary-600" v-slot="{ open }">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div
          class="relative py-5 flex items-center justify-center lg:justify-between"
        >
          <!-- Logo -->
          <div class="absolute left-0 flex-shrink-0 lg:static">
            <a href="#">
              <img class="h-8 w-auto" :src="logo" alt="" />
            </a>
          </div>

          <!-- Right section on desktop -->
          <div class="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
            <button
              type="button"
              class="flex-shrink-0 p-1 text-primary-200 rounded-full hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Icon
                name="BellIcon"
                size="6"
                color="primary-200"
                class="hover:text-white"
              />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-4 relative flex-shrink-0">
              <div>
                <MenuButton
                  class="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100"
                >
                  <Avatar
                    :src="user.imageUrl"
                    size="8"
                    isCircle
                    :username="user.name"
                  />
                </MenuButton>
              </div>
              <transition
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active }"
                  >
                    <Link
                      :url="item.href"
                      size="sm"
                      color="gray-700"
                      :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
                      :content="item.name"
                    />
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>

          <!-- Search -->
          <div class="flex-1 min-w-0 px-12 lg:hidden">
            <div class="max-w-xs w-full mx-auto">
              <TextInput placeholder="Search" icon="MagnifyingGlassIcon" />
            </div>
          </div>

          <!-- Menu button -->
          <div class="absolute right-0 flex-shrink-0 lg:hidden">
            <!-- Mobile menu button -->
            <PopoverButton
              class="bg-transparent p-2 rounded-md inline-flex items-center justify-center hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Icon
                name="Bars3Icon"
                v-if="!open"
                size="6"
                color="primary-200"
                class="block hover:text-white"
              />
              <Icon
                name="XMarkIcon"
                v-else
                size="6"
                color="primary-200"
                class="block hover:text-white"
              />
            </PopoverButton>
          </div>
        </div>
        <div
          class="hidden lg:block border-t border-white border-opacity-20 py-5"
        >
          <div class="grid grid-cols-3 gap-8 items-center">
            <div class="col-span-2">
              <nav class="flex space-x-4">
                <Link
                  v-for="item in navigation"
                  :key="item.name"
                  :url="item.href"
                  size="sm"
                  weight="medium"
                  color="white"
                  :content="item.name"
                  :class="[
                    item.current ? 'text-white' : 'text-primary-1005',
                    'rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10',
                  ]"
                />
              </nav>
            </div>
            <div>
              <div class="max-w-md w-full mx-auto">
                <TextInput placeholder="Search" icon="MagnifyingGlassIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <TransitionRoot as="template" :show="open">
        <div class="lg:hidden">
          <TransitionChild
            as="template"
            enter="duration-150 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-150 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <PopoverOverlay class="z-20 fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <TransitionChild
            as="template"
            enter="duration-150 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <PopoverPanel
              focus
              class="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
            >
              <div
                class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200"
              >
                <div class="pt-3 pb-2">
                  <div class="flex items-center justify-between px-4">
                    <div>
                      <img class="h-8 w-auto" :src="logo" alt="Workflow" />
                    </div>
                    <div class="-mr-2">
                      <PopoverButton
                        class="bg-white rounded-md p-2 inline-flex items-center justify-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                      >
                        <Icon
                          name="XMarkIcon"
                          size="6"
                          color="gray-400"
                          class="block hover:text-gray-500"
                        />
                      </PopoverButton>
                    </div>
                  </div>
                  <div class="mt-3 px-2 space-y-1">
                    <Link
                      v-for="item in navigation"
                      :key="item.name"
                      :url="item.href"
                      size="base"
                      weight="medium"
                      color="gray-900"
                      :content="item.name"
                      class="block rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-800"
                    />
                  </div>
                </div>
                <div class="pt-4 pb-2">
                  <div class="flex items-center px-5">
                    <AvatarText
                      :src="user.imageUrl"
                      :title="user.name"
                      :subtitle="user.email"
                      size="10"
                      :username="user.name"
                      titleColor="gray-700"
                      subtitleColor="gray-500"
                    />
                    <button
                      type="button"
                      class="ml-auto flex-shrink-0 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white"
                    >
                      <Icon
                        name="BellIcon"
                        size="6"
                        color="primary-200"
                        isOutline
                        class="hover:text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div class="mt-3 px-2 space-y-1">
                    <Link
                      v-for="item in userNavigation"
                      :key="item.name"
                      :url="item.href"
                      color="gray-900"
                      class="block rounded-md px-3 py-2 hover:bg-gray-100 hover:text-gray-800"
                      :content="item.name"
                    />
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </TransitionChild>
        </div>
      </TransitionRoot>
    </Popover>
    <main class="-mt-24 pb-8">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <!-- Main 3 column grid -->
        <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-4 lg:col-span-2">
            <section aria-labelledby="section-1-title">
              <div class="rounded-lg bg-white overflow-hidden shadow">
                <div class="p-6">
                  <!-- Your content -->
                  {{ content1 }}
                </div>
              </div>
            </section>
          </div>

          <!-- Right column -->
          <div class="grid grid-cols-1 gap-4">
            <section aria-labelledby="section-2-title">
              <div class="rounded-lg bg-white overflow-hidden shadow">
                <div class="p-6">
                  <!-- Your content -->
                  {{ content2 }}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
import Link from "../../../atoms/Link/Link.vue";
import Avatar from "../../../atoms/Avatar/Avatar.vue";
import AvatarText from "../../../molecules/Avatar/AvatarText.vue";
import TextInput from "../../../molecules/Inputs/InputWithLeadingIcon/InputWithLeadingIcon.vue";
/**
 * - Use it to show two row nav with overlap
 */
export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverOverlay,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
    TextInput,
    Icon,
    Text,
    Link,
    Avatar,
    AvatarText,
  },
  props: {
    /**
     * use it for user profile
     */
    user: {
      type: Object,
      default: () => {},
    },
    /**
     * use it for navigation list
     */
    navigation: {
      type: Array,
      default: () => [],
    },
    /**
     * use it for user navigation list
     */
    userNavigation: {
      type: Array,
      default: () => [],
    },
    /**
     * use it for logo
     */
    logo: {
      type: String,
      default: "",
    },
    /**
     * use it for first content
     */
    content1: {
      type: String,
      default: "",
    },
    /**
     * use it for second content
     */
    content2: {
      type: String,
      default: "",
    },
  },
};
</script>
