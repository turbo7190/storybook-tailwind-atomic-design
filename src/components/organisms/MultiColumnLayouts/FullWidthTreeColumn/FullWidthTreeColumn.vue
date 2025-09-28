<template>
  <div class="h-screen flex">
    <TransitionRoot
      as="template"
      :show="sidebarOpen"
    >
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 lg:hidden"
        @close="sidebarOpen = false"
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
          <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <CircularButton
                  icon-size="6"
                  text-color="white"
                  icon-name="XMarkIcon"
                  bg-color="transparent"
                  hover-bg-color="transparent"
                  focus-ring-color="transparent"
                  custom-class="ml-1 flex justify-center h-10 w-10 rounded-full  focus:ring-white hover:bg-transparent"
                  @click="sidebarOpen = false"
                />
              </div>
            </TransitionChild>
            <SidebarNavigation
              v-model:nav-selected-item="selected"
              :navigation="navigation"
              nav-bg-color="gray-100"
              profile-top-border-color="gray-200"
              :logo="logo"
              :user="user"
              profile-title-text-color="gray-700"
              profile-subtitle-text-color="gray-500"
              nav-selection-bg-color="gray-200"
              nav-text-selection-color="gray-900"
              nav-text-color="gray-600"
              nav-hover-bg="gray-50"
              nav-hover-text-color="gray-900"
              nav-icon-color="gray-400"
              nav-icon-selection-color="gray-500"
              :nav-item-clicked="menuItemClicked"
            />
          </div>
        </TransitionChild>
        <div
          class="flex-shrink-0 w-14"
          aria-hidden="true"
        >
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <SidebarNavigation
          v-model:nav-selected-item="selected"
          :navigation="navigation"
          nav-bg-color="gray-100"
          profile-top-border-color="gray-200"
          :logo="logo"
          :user="user"
          profile-title-text-color="gray-700"
          profile-subtitle-text-color="gray-500"
          nav-selection-bg-color="gray-200"
          nav-text-selection-color="gray-900"
          nav-text-color="gray-600"
          nav-hover-bg="gray-50"
          nav-hover-text-color="gray-900"
          nav-icon-color="gray-400"
          nav-icon-selection-color="gray-500"
          :nav-item-clicked="menuItemClicked"
        />
      </div>
    </div>
    <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
      <div class="lg:hidden">
        <div class="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
          <div>
            <img
              class="h-8 w-auto"
              :src="headerLogo.src"
              :alt="headerLogo.title"
            >
          </div>
          <div>
            <button
              type="button"
              @click="sidebarOpen = true"
            >
              <span class="sr-only">Open sidebar</span>
              <Icon
                name="Bars3Icon"
                size="6"
                color="gray-500"
                hover-text-color="gray-900"
              /> 
            </button>
          </div>
        </div>
      </div>
      <div class="flex-1 relative z-0 flex overflow-hidden">
        <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
          <!-- Start main area-->
          <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
            <div class="h-full border-2 border-gray-200 border-dashed rounded-lg">
              <slot />
            </div>
          </div>
          <!-- End main area -->
        </main>
        <aside
          class="hidden relative xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200 overflow-y-auto"
        >
          <!-- Start secondary column (hidden on smaller screens) -->
          <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
            <div class="h-full border-2 border-gray-200 border-dashed rounded-lg">
              <slot name="secondaryColumn" />
            </div>
          </div>
          <!-- End secondary column -->
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
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import SidebarNavigation from "../../SidebarNavigation/SimpleWithIconAndLogo/SimpleWithIconAndLogo.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import CircularButton from "../../../molecules/Button/Circular/Circular.vue";

export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    Icon,
    CircularButton,
    SidebarNavigation,
  },
  props: {
    /**
     * Use it to show logo on header section
     */
    headerLogo: {
      type: Object,
      default: () => {},
    },
    /**
     * Use it to show logo
     */
    logo: {
      type: Object,
      default: () => {},
    },
    /**
     * Use it to show navigation list
     */
    navigation: {
      type: Array,
      default: () => [],
    },
    /**
     * click event on clicking nav Item
     */
    navItemClicked: {
      type: Function,
      default: () => {},
    },
    /**
     * to give default selection for nav
     */
    navSelectedItem: {
      type: Object,
      default: () => {},
    },
    /**
     * user object
     */
    user: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, { emit }) {
    const sidebarOpen = ref(false);
    const selected = computed({
      get() {
        return props.navSelectedItem;
      },
      set(newValue) {
        emit("update:navSelectedItem", newValue);
      },
    });
    const menuItemClicked = (item) => {
      emit("update:navSelectedItem", item);
      props.navItemClicked(item);
    };

    return {
      sidebarOpen,
      selected,
      menuItemClicked,
    };
  },
};
</script>
