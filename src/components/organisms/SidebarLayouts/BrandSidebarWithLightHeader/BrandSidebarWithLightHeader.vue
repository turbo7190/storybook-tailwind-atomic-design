<template>
  <div>
    <TransitionRoot
      as="template"
      :show="sidebarOpen"
    >
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 md:hidden"
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
          <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-primary-700">
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
              :logo="logo"
              :nav-item-clicked="menuItemClicked"
              :nav-custom-class="navCustomClass"
              :nav-selection-bg-color="navSelectionBgColor"
              :nav-hover-bg="navHoverBg"
              :nav-text-color="navTextColor"
              :nav-text-selection-color="navTextSelectionColor"
              :nav-icon-color="navIconColor"
              :nav-icon-selection-color="navIconSelectionColor"
              :nav-bg-color="navBgColor"
              :nav-hover-bg-opacity="navHoverBgOpacity"
              :nav-hover-text-color="navHoverTextColor"
              :profile-top-border-color="navBgColor"
            />
          </div>
        </TransitionChild>
        <div
          class="flex-shrink-0 w-14"
          aria-hidden="true"
        >
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <SidebarNavigation
        v-model:nav-selected-item="selected"
        :navigation="navigation"
        :logo="logo"
        :nav-item-clicked="menuItemClicked"
        :nav-custom-class="navCustomClass"
        :nav-selection-bg-color="navSelectionBgColor"
        :nav-hover-bg="navHoverBg"
        :nav-text-color="navTextColor"
        :nav-text-selection-color="navTextSelectionColor"
        :nav-icon-color="navIconColor"
        :nav-icon-selection-color="navIconSelectionColor"
        :nav-bg-color="navBgColor"
        :nav-hover-bg-opacity="navHoverBgOpacity"
        :nav-hover-text-color="navHoverTextColor"
        :profile-top-border-color="navBgColor"
      />
    </div>
    <div class="md:pl-64 flex flex-col flex-1">
      <HeaderWithSearch
        :menu-clicked="menuIconClicked"
        :notification-clicked="notificationClicked"
        :search-input-change="searchInputChange"
        :user-navigation="userNavigation"
        :user="user"
      />
      <main>
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <Text
              :content="navSelectedItem.name"
              size="2xl"
              weight="semibold"
              color="gray-900"
            />
          </div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div class="py-4">
              <div class="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Text from "../../../atoms/Text/Text.vue";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import SidebarNavigation from "../../SidebarNavigation/SimpleWithIconAndLogo/SimpleWithIconAndLogo.vue";
import CircularButton from "../../../molecules/Button/Circular/Circular.vue";
import HeaderWithSearch from "../../Headers/WithProfileNotificationAndSearchbar/WithProfileNotificationAndSearchbar.vue";

export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    SidebarNavigation,
    Text,
    CircularButton,
    HeaderWithSearch,
  },
  props: {
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
     * Use it to assign bg color to navigation
     */
    navCustomClass: {
      type: String,
      default: "flex-1 px-2",
    },
    /**
     * use it for assigning background color for an item
     */
    navBgColor: {
      type: String,
      default: "primary-700",
    },
    /**
     * use it for assigning background color for an item
     */
    navSelectionBgColor: {
      type: String,
      default: "primary-800",
    },
    /**
     * use it for assigning background color for an item on hover
     */
    navHoverBg: {
      type: String,
      default: "primary-600",
    },
    /**
     * use it for assigning background opacity for an item on hover
     */
    navHoverBgOpacity: {
      type: String,
      default: "opacity-75",
    },
    /**
     * use it for assigning text color on hover
     */
    navHoverTextColor: {
      type: String,
      default: "white",
    },
    /**
     * use it for assigning icon color
     */
    navIconColor: {
      type: String,
      default: "primary-300",
    },
    /**
     * use it for assigning text color
     */
    navTextColor: {
      type: String,
      default: "primary-100",
    },
    /**
     * use it for assigning badge color
     */
    navBadgeColor: {
      type: String,
      default: "primary-800",
    },
    /**
     * use it for assigning icon color of current selection
     */
    navIconSelectionColor: {
      type: String,
      default: "primary-300",
    },
    /**
     * use it for assigning text color of current selection
     */
    navTextSelectionColor: {
      type: String,
      default: "white",
    },
    /**
     * use it for assigning badge color of current selection
     */
    navBadgeSelectionColor: {
      type: String,
      default: "primary-600",
    },
    /**
     * user object for profile
     */
    user: {
      type: Object,
      default: null,
    },
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
     * search Input Change
     */
    searchInputChange: {
      type: Function,
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
    const menuIconClicked = () => {
      sidebarOpen.value = true;
    };

    return {
      sidebarOpen,
      selected,
      menuItemClicked,
      menuIconClicked,
    };
  },
};
</script>
