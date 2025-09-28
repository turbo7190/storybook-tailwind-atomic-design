<template>
  <div
    class="flex-1 flex flex-col min-h-0"
    :class="`bg-${navBgColor}`"
  >
    <div
      :class="`flex flex-col flex-grow border-r border-${profileTopBorderColor} pt-5 pb-4 overflow-y-auto`"
    >
      <div class="flex items-center flex-shrink-0 px-4">
        <!-- <img
        class="h-8 w-auto"
        src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80"
        alt="Workflow"
      > -->
        <Image
          :src="logo.src"
          width="auto"
          height="8"
          :alt="logo.title"
        />
      </div>
      <div class="mt-5 flex-grow flex flex-col">
        <VerticalNavigation
          v-model:selected-item="selected"
          :navigation="navigation"
          :item-clicked="navItemClicked"
          :nav-custom-class="navCustomClass"
          :selection-bg-color="navSelectionBgColor"
          :hover-bg="navHoverBg"
          :text-color="navTextColor"
          :text-selection-color="navTextSelectionColor"
          :icon-color="navIconColor"
          :icon-selection-color="navIconSelectionColor"
          :bg-color="navBgColor"
          :hover-bg-opacity="navHoverBgOpacity"
          :hover-text-color="navHoverTextColor"
        />
      </div>
    </div>
    <div
      v-if="user"
      :class="`flex-shrink-0 flex border-t border-r border-${profileTopBorderColor} ${profileSectionCustomClass} p-4`"
    >
      <a
        href="#"
        class="flex-shrink-0 w-full group block"
      >
        <AvatarText
          :src="user.avatar"
          :username="user.name"
          :title="user.name"
          :subtitle="user.role"
          :title-color="profileTitleTextColor"
          :subtitle-color="profileSubtitleTextColor"
        />
      </a>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import Image from "../../../atoms/Image/Image.vue";
import VerticalNavigation from "../../VerticalNavigation/WithIconsAndBadges/WithIconsAndBadges.vue";
import AvatarText from "../../../molecules/Avatar/AvatarText.vue";
/**
 * - Use it to show a sidebar navigation
 */
export default {
  components: {
    Image,
    VerticalNavigation,
    AvatarText,
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
      default: "white",
    },
    /**
     * use it for assigning background color for an item
     */
    navSelectionBgColor: {
      type: String,
      default: "gray-100",
    },
    /**
     * use it for assigning background color for an item on hover
     */
    navHoverBg: {
      type: String,
      default: "gray-50",
    },
    /**
     * use it for assigning background opacity for an item on hover
     */
    navHoverBgOpacity: {
      type: String,
      default: "",
    },
    /**
     * use it for assigning text color on hover
     */
    navHoverTextColor: {
      type: String,
      default: "gray-900",
    },
    /**
     * use it for assigning icon color
     */
    navIconColor: {
      type: String,
      default: "gray-400",
    },
    /**
     * use it for assigning text color
     */
    navTextColor: {
      type: String,
      default: "gray-600",
    },
    /**
     * use it for assigning badge color
     */
    navBadgeColor: {
      type: String,
      default: "gray-200",
    },
    /**
     * use it for assigning icon color of current selection
     */
    navIconSelectionColor: {
      type: String,
      default: "gray-500",
    },
    /**
     * use it for assigning text color of current selection
     */
    navTextSelectionColor: {
      type: String,
      default: "gray-900",
    },
    /**
     * use it for assigning badge color of current selection
     */
    navBadgeSelectionColor: {
      type: String,
      default: "gray-50",
    },
    /**
     * user object for profile
     */
    user: {
      type: Object,
      default: null,
    },
    /**
     * color of top border for profile
     */
    profileTopBorderColor: {
      type: String,
      default: "gray-200",
    },
    /**
     * color of title for profile
     */
    profileTitleTextColor: {
      type: String,
      default: "gray-700",
    },
    /**
     * color of top border for profile
     */
    profileSubtitleTextColor: {
      type: String,
      default: "gray-500",
    },
    /**
     * custom class for profile section to set background color
     */
    profileSectionCustomClass: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const selected = computed({
      get() {
        return props.navSelectedItem;
      },
      set(newValue) {
        emit("update:navSelectedItem", newValue);
      },
    });
    return {
      selected,
    };
  },
};
</script>
