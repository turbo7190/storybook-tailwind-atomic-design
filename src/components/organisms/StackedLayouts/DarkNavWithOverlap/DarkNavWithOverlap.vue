<template>
  <div class="min-h-full">
    <div class="bg-gray-800 pb-32">
      <NavBar
        :desktopLogo="desktopLogo"
        :mobileLogo="mobileLogo"
        :navigation="navigation"
        :user="user"
        :menu="userNavigation"
        placeholder="Search"
        inputIcon="MagnifyingGlassIcon"
        icon="BellIcon"
        :isInput="false"
        class="border-b border-gray-100"
      />
      <header class="py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Text size="3xl" weight="bold" color="white" content="Dashboard" />
        </div>
      </header>
    </div>

    <main class="-mt-32">
      <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
            <slot />
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
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
import Text from "../../../atoms/Text/Text.vue";
import NavBar from "../../Navbars/DarkWithSearch/DarkWithSearch.vue";
/**
 * - Use it to show a dark nav with overlap
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
    NavBar,
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
     * use it for mobile logo
     */
    mobileLogo: {
      type: String,
      default: "",
    },
    /**
     * use it for desktop logo
     */
    desktopLogo: {
      type: String,
      default: "",
    },
  },
};
</script>
