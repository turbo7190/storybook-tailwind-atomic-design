<template>
  <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
    <button
      type="button"
      class="px-4 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden"
      @click="menuClicked()"
    >
      <span class="sr-only">Open sidebar</span>
      <Icon
        name="Bars3Icon"
        size="6"
        color="gray-500"
        hover-text-color="gray-500"
      />
    </button>
    <div class="flex-1 px-4 flex justify-between">
      <div class="flex-1 flex">
        <form class="w-full flex md:ml-0" action="#" method="GET">
          <label for="search-field" class="sr-only">Search</label>
          <div class="relative w-full text-gray-400 focus-within:text-gray-600">
            <div
              class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
            >
              <Icon
                name="MagnifyingGlassIcon"
                size="5"
                color="gray-400"
                hover-text-color="gray-600"
              />
            </div>
            <div class="absolute inset-y-0 left-6 flex items-center">
              <TextInput
                id="search-field"
                v-model="searchText"
                custom-class="border-none block w-full h-full pl-2 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
                @change="searchTextChanged()"
              />
            </div>
          </div>
        </form>
      </div>
      <div class="ml-4 flex items-center md:ml-6">
        <button
          type="button"
          class="bg-white p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          @click="notificationClicked"
        >
          <span class="sr-only">View notifications</span>
          <Icon
            name="BellIcon"
            size="6"
            color="gray-400"
            hover-text-color="gray-500"
            is-outline
          />
        </button>

        <!-- Profile dropdown -->
        <Menu as="div" class="ml-3 relative">
          <div>
            <MenuButton
              class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
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
                v-for="item in userNavigation"
                :key="item.name"
                v-slot="{ active }"
                as="div"
              >
                <Link
                  :content="item.name"
                  :on-click="item.action"
                  size="sm"
                  color="gray-700"
                  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2']"
                />
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import TextInput from "../../../molecules/Inputs/Component/Component.vue";
import Link from "../../../atoms/Link/Link.vue";
import Avatar from "../../../atoms/Avatar/Avatar.vue";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TextInput,
    Icon,
    Link,
    Avatar,
  },
  props: {
    /**
     * Use it to show user navigation
     */
    userNavigation: {
      type: Array,
      default: () => [],
    },
    /**
     * action on notification button
     */
    notificationClicked: {
      type: Function,
      default: () => {},
    },
    /**
     * user object
     */
    user: {
      type: Object,
      default: () => {},
    },
    /**
     * search Input Change
     */
    searchInputChange: {
      type: Function,
      default: () => {},
    },
    /**
     * menu icon clicked
     */
    menuClicked: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    const searchText = ref("");
    const searchTextChanged = () => {
      props.searchInputChange(searchText.value);
    };

    return {
      searchText,
      searchTextChanged,
    };
  },
};
</script>
