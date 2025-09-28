<template>
  <div class="min-h-screen bg-gray-100">
    <DarkWithSearch
      :user="user"
      :navigation="navigation"
      :desktop-logo="desktopLogo"
      :mobile-logo="mobileLogo"
      :placeholder="placeholder"
      :input-icon="inputIcon"
      :menu="menu"
    />
    <div class="py-6">
      <div
        class="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8"
      >
        <div class="hidden lg:block lg:col-span-3 xl:col-span-2">
          <nav
            aria-label="Sidebar"
            class="sticky top-6 divide-y divide-gray-300"
          >
            <!-- Your content -->
            <slot name="leftColumn" />
          </nav>
        </div>
        <main class="lg:col-span-9 xl:col-span-6">
          <!-- Your content -->
          <slot />
        </main>
        <aside class="hidden xl:block xl:col-span-4">
          <div class="sticky top-6 space-y-4">
            <!-- Your content -->
            <slot name="rightColumn" />
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import DarkWithSearch from "../../../organisms/Navbars/DarkWithSearch/DarkWithSearch.vue";

export default {
  components: {
    DarkWithSearch,
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
  },
};
</script>
