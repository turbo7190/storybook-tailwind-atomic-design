<template>
  <div class="h-full flex">
    <!-- Narrow sidebar -->
    <div class="hidden w-28 bg-primary-700 overflow-y-auto md:block">
      <Sidebar
        v-model:selected-item="selected"
        :navigation="navigation"
        :logo="logo"
        :nav-bg-color="navBgColor"
        :nav-selection-bg-color="navSelectionBgColor"
        :hover-bg-color="hoverBgColor"
        :icon-color="iconColor"
        :icon-selection-color="iconSelectionColor"
        :nav-text-color="navTextColor"
        :nav-text-selection-color="navTextSelectionColor"
        :item-clicked="menuItemClicked"
      />
    </div>

    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog as="div" class="md:hidden" @close="mobileMenuOpen = false">
        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition-opacity ease-linear duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
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
              class="relative max-w-xs w-full bg-primary-700 pt-5 pb-4 flex-1 flex flex-col"
            >
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-1 right-0 -mr-14 p-1">
                  <button
                    type="button"
                    class="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                    @click="mobileMenuOpen = false"
                  >
                    <Icon
                      name="XMarkIcon"
                      size="6"
                      color="white"
                      aria-hidden="true"
                    />
                    <span class="sr-only">Close sidebar</span>
                  </button>
                </div>
              </TransitionChild>
              <SliderSidebar
                v-model:nav-selected-item="selected"
                :navigation="navigation"
                :logo="logo"
                :nav-bg-color="navBgColor"
                :nav-selection-bg-color="navSelectionBgColor"
                :nav-hover-bg="hoverBgColor"
                :nav-icon-color="iconColor"
                :nav-icon-selection-color="iconSelectionColor"
                :nav-text-color="navTextColor"
                :nav-text-selection-color="navTextSelectionColor"
                :nav-item-clicked="menuItemClicked"
              />
            </div>
          </TransitionChild>
          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Content area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="w-full">
        <div
          class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex"
        >
          <button
            type="button"
            class="border-r border-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open sidebar</span>
            <Icon
              name="Bars3Icon"
              size="6"
              color="gray-500"
              hover-text-color="gray-500"
            />
          </button>
          <div class="flex-1 flex justify-between px-4 sm:px-6">
            <div class="flex-1 flex">
              <form class="w-full flex md:ml-0" action="#" method="GET">
                <label for="search-field" class="sr-only"
                  >Search all files</label
                >
                <div
                  class="relative w-full text-gray-400 focus-within:text-gray-600"
                >
                  <div
                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center"
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
                      v-model:value="searchText"
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
            <div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
              <!-- Profile dropdown -->
              <Menu as="div" class="relative flex-shrink-0">
                <div>
                  <MenuButton
                    class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
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
                    >
                      <Link
                        :content="item.name"
                        :on-click="item.action"
                        size="sm"
                        color="gray-700"
                        :class="[
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2',
                        ]"
                      />
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>

              <button
                type="button"
                class="flex bg-primary-600 p-1 rounded-full items-center justify-center text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <Icon name="PlusIcon" size="6" color="white" />
                <span class="sr-only">Add file</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Main content -->
      <div class="flex-1 flex items-stretch overflow-hidden">
        <main class="flex-1 overflow-y-auto">
          <!-- Primary column -->
          <section
            aria-labelledby="primary-heading"
            class="min-w-0 flex-1 h-full flex flex-col lg:order-last"
          >
            <h1 id="primary-heading" class="sr-only">Photos</h1>
            <slot name="primaryColumn" />
          </section>
        </main>

        <!-- Secondary column (hidden on smaller screens) -->
        <aside
          class="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block"
        >
          <slot name="secondaryColumn" />
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import Sidebar from "../../SidebarNavigation/NarrowSidebarWithTitles/NarrowSidebarWithTitles.vue";
import SliderSidebar from "../../SidebarNavigation/SimpleWithIconAndLogo/SimpleWithIconAndLogo.vue";
import Link from "../../../atoms/Link/Link.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import TextInput from "../../../molecules/Inputs/Component/Component.vue";
import Avatar from "../../../atoms/Avatar/Avatar.vue";

export default {
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    Link,
    TextInput,
    Icon,
    Sidebar,
    SliderSidebar,
    Avatar,
  },
  props: {
    /**
     * Use it to show logo
     */
    logo: {
      type: String,
      default: "",
    },
    /**
     * Use it to show user navigation list
     */
    userNavigation: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it to show navigation list
     */
    navigation: {
      type: Array,
      default: () => [],
    },
    /**
     * background color of nav Bar. default is set to primary-600
     */
    navBgColor: {
      type: String,
      default: "primary-700",
    },
    /**
     * background color of selected nav item. default is set to primary-700
     */
    navSelectionBgColor: {
      type: String,
      default: "primary-800",
    },
    /**
     * icon color of selected nav item. default is set to primary-700
     */
    hoverBgColor: {
      type: String,
      default: "primary-800",
    },
    /**
     * icon color. default is set to primary-200
     */
    iconColor: {
      type: String,
      default: "primary-300",
    },
    /**
     * icon color of selected nav item. default is set to primary-200
     */
    iconSelectionColor: {
      type: String,
      default: "white",
    },
    /**
     * selected nav item. used for setting defauolt selection.
     */
    selectedItem: {
      type: Function,
      default: () => {},
    },
    /**
     * function on clicking an item
     */
    itemClicked: {
      type: Function,
      default: () => {},
    },
    /**
     * text color of nav Item
     */
    navTextColor: {
      type: String,
      default: "primary-100",
    },
    /**
     * text color of nav Item
     */
    navTextSelectionColor: {
      type: String,
      default: "white",
    },
    /**
     *user avatar in header
     */
    user: {
      type: Object,
      default: () => {},
    },
    /**
     * action called on changing search input text
     */
    searchInputChange: {
      type: Function,
      default: () => {},
    },
  },
  setup(props, { emit }) {
    const searchText = ref("");
    const searchTextChanged = () => {
      props.searchInputChange(searchText.value);
    };
    const selected = computed({
      get() {
        return props.selectedItem;
      },
      set(newValue) {
        emit("update:selectedItem", newValue);
      },
    });
    const menuItemClicked = (item) => {
      emit("update:selectedItem", item);
      props.itemClicked(item);
    };
    return {
      selected,
      searchText,
      menuItemClicked,
      searchTextChanged,
    };
  },
  data() {
    return {
      mobileMenuOpen: ref(false),
    };
  },
};
</script>
