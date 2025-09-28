<template>
  <Disclosure v-slot="{ open }" as="nav" class="bg-primary-600">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center px-2 lg:px-0">
          <div class="flex-shrink-0">
            <img class="block lg:hidden h-8 w-auto" :src="mobileLogo" alt="" />
            <img class="hidden lg:block h-8 w-auto" :src="desktopLogo" alt="" />
          </div>
          <div class="hidden lg:block lg:ml-6">
            <div class="flex space-x-4">
              <Link
                v-for="(item, i) in navigation"
                :key="i"
                :content="item.label"
                :url="item.href"
                color="white"
                :class="[
                  'px-3 py-2 rounded-md text-sm',
                  selected.label === item.label
                    ? 'bg-primary-700'
                    : 'hover:bg-primary-500 hover:bg-opacity-75',
                ]"
              />
            </div>
          </div>
        </div>
        <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
          <div class="max-w-lg w-full lg:max-w-xs">
            <TextInput
              v-if="isInput"
              :placeholder="placeholder"
              :icon="inputIcon"
            />
          </div>
        </div>
        <div class="flex lg:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="bg-primary-600 p-2 rounded-md inline-flex items-center justify-center hover:bg-primary-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white"
          >
            <Icon
              v-if="!open"
              name="Bars3Icon"
              size="6"
              color="primary-200"
              class="block hover:text-white"
            />
            <Icon
              v-else
              name="XMarkIcon"
              size="6"
              color="primary-200"
              class="block hover:text-white"
            />
          </DisclosureButton>
        </div>
        <div class="hidden lg:block lg:ml-4">
          <div class="flex items-center">
            <button
              type="button"
              class="flex-shrink-0 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <Icon
                :name="icon"
                size="6"
                color="primary-200"
                is-outline
                class="hover:text-white"
              />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-4 relative flex-shrink-0">
              <div>
                <MenuButton
                  class="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <Avatar
                    :src="user.avatar"
                    is-circle
                    :username="user.name"
                    size="8"
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
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem
                    v-for="(item, i) in menu"
                    :key="i"
                    v-slot="{ active }"
                  >
                    <Link
                      :content="item.label"
                      :on-click="item.action"
                      :class="[
                        active ? 'bg-primary-600 text-white' : '',
                        'hover:text-white block px-4 py-2 text-sm text-gray-700',
                      ]"
                    />
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="lg:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 flex flex-col">
        <DisclosureButton
          v-for="(item, i) in navigation"
          :key="i"
          as="div"
          class="w-full"
        >
          <Link
            :content="item.label"
            :url="item.href"
            weight="medium"
            :class="[
              'px-3 py-2 rounded-md w-full flex flex-1',
              selected.label === item.label
                ? 'bg-primary-700 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            ]"
          />
        </DisclosureButton>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <AvatarText
            size="10"
            :src="user.avatar"
            :title="user.name"
            :subtitle="user.email"
            :username="user.name"
            :title-color="'white'"
            :subtitle-color="'primary-200'"
          />
          <button
            type="button"
            class="ml-auto flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <Icon :name="icon" size="6" is-outline color="primary-200" />
          </button>
        </div>
        <div class="mt-3 px-2 space-y-1">
          <DisclosureButton
            v-for="(item, i) in menu"
            :key="i"
            as="div"
            class="w-full"
          >
            <Link
              :content="item.label"
              :url="item.href"
              weight="medium"
              :class="[
                'px-3 py-2 rounded-md w-full flex flex-1',
                selected.label === item.label
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              ]"
            />
          </DisclosureButton>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
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
import TextInput from "../../../molecules/Inputs/InputWithLeadingIcon/InputWithLeadingIcon.vue";
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Link from "../../../atoms/Link/Link.vue";
import Avatar from "../../../atoms/Avatar/Avatar.vue";
import Button from "../../../atoms/Button/Button.vue";
import AvatarText from "../../../molecules/Avatar/AvatarText.vue";
/**
 * - Use it to show a dark navbar with search input form
 */
export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TextInput,
    Text,
    Icon,
    Link,
    Avatar,
    Button,
    AvatarText,
  },
  props: {
    /**
     * use it to show desktop logo
     */
    desktopLogo: {
      type: String,
      default: "",
    },
    /**
     * use it to show mobile logo
     */
    mobileLogo: {
      type: String,
      default: "",
    },
    /**
     * use it to show navigation list
     */
    navigation: {
      type: Array,
      default: () => [],
    },
    /**
     * use it to show input placeholder
     */
    placeholder: {
      type: String,
      default: "",
    },
    /**
     * use it to show input icon
     */
    inputIcon: {
      type: String,
      default: "",
    },
    /**
     * use it to show action icon
     */
    icon: {
      type: String,
      default: "",
    },
    /**
     * use it for user object
     */
    user: {
      type: Object,
      default: () => {},
    },
    /**
     * use it for menu list
     */
    menu: {
      type: Array,
      default: () => [],
    },
    /**
     * use it to show input form
     */
    isInput: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      selected: this.navigation[0],
    };
  },
};
</script>
