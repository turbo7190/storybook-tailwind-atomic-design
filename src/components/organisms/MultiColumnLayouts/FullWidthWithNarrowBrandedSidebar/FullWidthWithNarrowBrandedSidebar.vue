<template>
  <div class="h-full flex">
    <TransitionRoot
      as="template"
      :show="mobileMenuOpen"
    >
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 lg:hidden"
        @close="mobileMenuOpen = false"
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
              <div class="absolute top-0 right-0 -mr-12 pt-4">
                <button
                  type="button"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="mobileMenuOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <Icon
                    name="XMarkIcon"
                    size="6"
                    color="white"
                  />
                </button>
              </div>
            </TransitionChild>
            <SidebarNavigation
              v-model:nav-selected-item="selected"
              :navigation="navigation"
              nav-bg-color="white"
              profile-top-border-color="gray-200"
              :logo="sideNavLogo"
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
      <div class="flex flex-col w-20">
        <NarrowSidebar
          v-model:selected-item="selected"
          :navigation="navigation"
          :logo="logo"
          :user="user"
          :item-clicked="menuItemClicked"
        />
      </div>
    </div>

    <div class="flex-1 min-w-0 flex flex-col overflow-hidden">
      <!-- Mobile top navigation -->
      <div class="lg:hidden">
        <div :class="`bg-${headerBgColor} py-2 px-4 flex items-center justify-between sm:px-6 lg:px-8`">
          <div>
            <Image
              height="8"
              width="auto"
              :src="headerLogo.src"
              :alt="headerLogo.title"
            />
          </div>
          <div>
            <button
              type="button"
              :class="`bg-${headerBgColor} hover:bg-${headerButtonHoverBgColor}`"
              class="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              @click="mobileMenuOpen = true"
            >
              <span class="sr-only">Open sidebar</span>
              <Icon
                name="Bars3Icon"
                size="6"
                color="white"
                hover-text-color="white"
              />
            </button>
          </div>
        </div>
      </div>

      <main class="flex-1 flex overflow-hidden">
        <!-- Primary column -->
        <section
          aria-labelledby="primary-heading"
          class="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last"
        >
          <h1
            id="primary-heading"
            class="sr-only"
          >
            Account
          </h1>
          <!-- Your content -->
          <slot name="primaryColumn" />
        </section>

        <!-- Secondary column (hidden on smaller screens) -->
        <aside class="hidden lg:block lg:flex-shrink-0 lg:order-first">
          <div class="h-full relative flex flex-col w-96 border-r border-gray-200 bg-white overflow-y-auto">
            <!-- Your content -->
            <slot name="secondaryColumn" />
          </div>
        </aside>
      </main>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Image from "../../../atoms/Image/Image.vue";
import NarrowSidebar from "../../SidebarNavigation/NarrowSidebar/NarrowSidebar.vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import SidebarNavigation from "../../SidebarNavigation/SimpleWithIconAndLogo/SimpleWithIconAndLogo.vue";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
/**
 * brand narrow sidebar with primary and secondary slot for content
 * secondaryColumn slot is hidden on small screens
 * theme is set to brand color(indigo theme)
 * option to customize header background color
 */

export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    NarrowSidebar,
    Image,
    Icon,
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
    // headerProperties
    /**
     * background color of header
     */
    headerBgColor: {
      type: String,
      default: "primary-600",
    },
    /**
     * hover bg of header button
     */
    headerButtonHoverBgColor: {
      type: String,
      default: "primary-700",
    },
    /**
     * sidenav logo
     */
    sideNavLogo: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, { emit }) {
    const sidebarOpen = ref(false);
    const mobileMenuOpen = ref(false);
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
      mobileMenuOpen,
    };
  },
};
</script>
