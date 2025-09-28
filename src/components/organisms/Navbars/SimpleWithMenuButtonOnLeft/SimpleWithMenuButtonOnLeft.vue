<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              hover:text-gray-500
              hover:bg-gray-100
              focus:outline-none
              focus:ring-2 focus:ring-inset focus:ring-primary-500
            "
          >
            <Icon
              name="Bars3Icon"
              size="6"
              color="gray-400"
              v-if="!open"
              class="block"
            />
            <Icon name="XMarkIcon" color="gray-400" v-else size="6" class="block" />
          </DisclosureButton>
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch
            sm:justify-start
          "
        >
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" :src="mobileLogo" alt="" />
            <img class="hidden lg:block h-8 w-auto" :src="desktopLogo" alt="" />
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              v-for="(item, i) in navigation"
              :key="i"
              :content="item.name"
              size="sm"
              weight="medium"
              :url="item.href"
              :class="[
                'inline-flex items-center px-1 pt-1 border-b-2',
                selected.name === item.name
                  ? 'border-primary-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
              ]"
            />
          </div>
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static
            sm:inset-auto
            sm:ml-6
            sm:pr-0
          "
        >
          <button
            class="
              bg-white
              p-1
              rounded-full
              text-gray-400
              hover:text-gray-500
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
            "
          >
            <Icon
              :name="icon"
              size="6"
              color="gray-400"
              isOutline
              class="hover:text-gray-500"
            />
          </button>
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton
                class="
                  bg-white
                  rounded-full
                  flex
                  text-sm
                  focus:outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
                "
              >
                <Avatar
                  :src="user && user.avatar"
                  isCircle
                  :username="user && user.name"
                  size="8"
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="
                  origin-top-right
                  absolute
                  right-0
                  mt-2
                  w-48
                  rounded-md
                  shadow-lg
                  py-1
                  bg-white
                  ring-1 ring-black ring-opacity-5
                  focus:outline-none
                "
              >
                <MenuItem
                  v-for="(item, i) in menu"
                  :key="i"
                  v-slot="{ active }"
                >
                  <Link
                    :content="item.label"
                    :onClick="item.action"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                  />
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="pt-2 pb-4 space-y-1">
        <DisclosureButton
          as="div"
          v-for="(item, i) in navigation"
          :key="i"
          class="w-full"
        >
          <Link
            :content="item.name"
            :url="item.href"
            weight="medium"
            :class="[
              'block pl-3 pr-4 py-2 border-l-4',
              selected.name === item.name
                ? 'bg-primary-50 border-primary-500 text-primary-700'
                : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
            ]"
          />
        </DisclosureButton>
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
import Text from "../../../atoms/Text/Text.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Link from "../../../atoms/Link/Link.vue";
import Avatar from "../../../atoms/Avatar/Avatar.vue";
import Button from "../../../atoms/Button/Button.vue";
/**
 * - Use it to show a simple navbar with menu button on left
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
    Text,
    Icon,
    Link,
    Avatar,
    Button,
  },
  data() {
    return {
      selected: this.navigation[0],
    };
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
  },
};
</script>
