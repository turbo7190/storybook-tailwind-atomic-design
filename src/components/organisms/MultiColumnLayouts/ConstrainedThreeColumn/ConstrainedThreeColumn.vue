<template>
  <!-- Background color split screen for large screens -->
  <div>
    <div class="fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
    <div
      class="fixed top-0 right-0 w-1/2 h-full bg-gray-50"
      aria-hidden="true"
    />
    <div class="relative min-h-screen flex flex-col">
      <!-- Navbar -->
      <DarkWithSearch
        :user="user"
        :navigation="navigation"
        :desktop-logo="desktopLogo"
        :mobile-logo="mobileLogo"
        :placeholder="placeholder"
        :input-icon="inputIcon"
        :menu="menu"
      />
      <!-- 3 column wrapper -->
      <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
        <!-- Left sidebar & main wrapper -->
        <div class="flex-1 min-w-0 bg-white xl:flex">
          <div
            class="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white"
          >
            <div class="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
              <!-- Start left column area -->
              <div class="h-full relative" style="min-height: 12rem">
                <div
                  class="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg"
                >
                  <slot name="leftColumn" />
                </div>
              </div>
              <!-- End left column area -->
            </div>
          </div>

          <div class="bg-white lg:min-w-0 lg:flex-1">
            <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
              <!-- Start main area-->
              <div class="relative h-full" style="min-height: 36rem">
                <div
                  class="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg"
                >
                  <slot />
                </div>
              </div>
              <!-- End main area -->
            </div>
          </div>
        </div>

        <div
          class="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0"
        >
          <div class="h-full pl-6 py-6 lg:w-80">
            <!-- Start right column area -->
            <div class="h-full relative" style="min-height: 16rem">
              <div
                class="absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg"
              >
                <slot name="rightColumn" />
              </div>
            </div>
            <!-- End right column area -->
          </div>
        </div>
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
