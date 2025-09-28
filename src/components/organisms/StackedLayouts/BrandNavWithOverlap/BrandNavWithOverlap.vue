<template>
  <div class="min-h-full">
    <div class="bg-primary-600 pb-32">
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
        class="border-b border-primary-200"
      />
      <header class="py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Text
            size="lg"
            weight="semibold"
            color="white"
            class="leading-6"
            content="Dashboard"
          />
        </div>
      </header>
    </div>

    <main class="-mt-32">
      <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
          <div class="h-96 border-4 border-dashed border-gray-200 rounded-lg">
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
import NavBar from "../../Navbars/LightWithSearch/LightWithSearch.vue";
/**
 * - Use it to show a brand nav with overlap
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
