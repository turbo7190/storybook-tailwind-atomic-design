<template>
  <div class="h-full flex flex-col">
    <Header
      v-model:selected-item="selected"
      :logo="logo"
      :logo-section-bg-color="logoSectionBgColor"
      :navigation="navigation"
      :user="user"
      :user-navigation="userNavigation"
      :sidebar-navigation="sidebarNavigation"
      :item-clicked="menuItemClicked"
      :menu-clicked="menuIconClicked"
      :navigation-selected="navigationSelected"
      :notification-clicked="notificationClicked"
      :search-input-change="searchTextChanged"
    />
    <SideOver
      v-model:sidebarOpen="mobileMenuOpen"
      :close-sidebar="closeSidebar"
    >
      <SidebarContent
        :navigation="navigation"
        :user="user"
        :user-navigation="userNavigation"
        :close-button-clicked="closeSidebar"
        :logo="sidebarLogo"
        :item-clicked="navigationItemClicked"
        :search-input-change="searchTextChanged"
      />
    </SideOver>

    <!-- Bottom section -->
    <div class="min-h-0 flex-1 flex overflow-hidden">
      <!-- Narrow sidebar-->
      <div class="hidden md:block md:flex-shrink-0 w-20">
        <NarrowSidebar
          v-model:selected-item="selected"
          :navigation="sidebarNavigation"
          :hover-bg-color="hoverBgColor"
          :nav-bg-color="navBgColor"
          :icon-color="iconColor"
          :icon-selection-color="iconSelectionColor"
          :nav-selection-bg-color="navSelectionBgColor"
          :item-clicked="menuItemClicked"
        />
      </div>
      <!-- Main area -->
      <main class="min-w-0 flex-1 border-t border-gray-200 lg:flex">
        <!-- Primary column -->
        <section
          aria-labelledby="primary-heading"
          class="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last"
        >
          <h1 id="primary-heading" class="sr-only">Home</h1>
          <!-- Your content -->
          <slot name="primaryColumn" />
        </section>

        <!-- Secondary column (hidden on smaller screens) -->
        <aside class="hidden lg:block lg:flex-shrink-0 lg:order-first">
          <div
            class="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100 overflow-y-auto"
          >
            <slot name="secondaryColumn" />
          </div>
        </aside>
      </main>
    </div>
  </div>
</template>

<script>
/**
 * header with navigation, search, avatar and notification
 * select synced with narrow sidebar
 * search synced with slider search
 * Narrow sidebar
 */
import { ref, computed } from "vue";
import SideOver from "../../SideOvers/WithTransitionAndSlotForContent/WithTransitionAndSlotForContent.vue";
import NarrowSidebar from "../../SidebarNavigation/NarrowSidebar/NarrowSidebar.vue";
import Header from "../../Headers/WithFullWidthFlyouts/WithFullWidthFlyouts.vue";
import SidebarContent from "../../VerticalNavigation/WithSearchSecondaryNavigationAndProfile/WithSearchSecondaryNavigationAndProfile.vue";
export default {
  components: {
    NarrowSidebar,
    Header,
    SideOver,
    SidebarContent,
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
     * Use it to show logo
     */
    sidebarLogo: {
      type: Object,
      default: () => {},
    },
    /**
     * Use it to show navigation list
     */
    userNavigation: {
      type: Array,
      default: () => [],
    },
    /**
     * Use it to show navigation list
     */
    sidebarNavigation: {
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
     * Use it to show user profile
     */
    user: {
      type: Object,
      default: () => {},
    },
    /**
     * background color of nav Bar. default is set to primary-600
     */
    navBgColor: {
      type: String,
      default: "gray-800",
    },
    /**
     * background color of selected nav item. default is set to primary-700
     */
    navSelectionBgColor: {
      type: String,
      default: "gray-900",
    },
    /**
     * icon color of selected nav item. default is set to primary-700
     */
    hoverBgColor: {
      type: String,
      default: "gray-700",
    },
    /**
     * icon color. default is set to primary-200
     */
    iconColor: {
      type: String,
      default: "gray-400",
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
     * background color of logo section. default is set to primary-700
     */
    logoSectionBgColor: {
      type: String,
      default: "primary-500",
    },
    /**
     * action called on changing search input text
     */
    searchInputChange: {
      type: Function,
      default: () => {},
    },
    /**
     * action on notification button
     */
    notificationClicked: {
      type: Function,
      default: () => {},
    },
    /**
     * menu icon clicked
     */
    navigationSelected: {
      type: Function,
      default: () => {},
    },
  },
  setup(props, { emit }) {
    const mobileMenuOpen = ref(false);
    const searchText = ref("");
    const searchTextChanged = (text) => {
      searchText.value = text;
      props.searchInputChange(text);
    };
    const closeSidebar = () => {
      mobileMenuOpen.value = false;
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
    const menuIconClicked = () => {
      mobileMenuOpen.value = true;
    };
    const navigationItemClicked = (item, childItem) => {
      // console.log(item);
      // console.log(childItem);
    };

    return {
      selected,
      searchText,
      menuItemClicked,
      mobileMenuOpen,
      searchTextChanged,
      menuIconClicked,
      closeSidebar,
      navigationItemClicked,
    };
  },
};
</script>
