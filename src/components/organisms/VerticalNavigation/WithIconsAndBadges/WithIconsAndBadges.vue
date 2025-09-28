<template>
  <nav
    :class="`space-y-1 ${navCustomClass} bg-${bgColor}`"
    aria-label="Sidebar"
  >
    <a
      v-for="item in navigation"
      :key="item.name"
      :href="item.href"
      :class="[
        selected && selected.id === item.id
          ? `bg-${selectionBgColor}`
          : `hover:bg-${hoverBg} hover:bg-${hoverBgOpacity}`,
        'flex items-center px-3 py-2 rounded-md',
      ]"
      :aria-current="selected && selected.id === item.id ? 'page' : undefined"
      @click.prevent="menuItemClicked(item)"
    >
      <Icon
        :name="item.icon"
        is-outline
        :color="
          selected && selected.id === item.id ? iconSelectionColor : iconColor
        "
        size="6"
        class="flex-shrink-0 -ml-1 mr-3"
      />
      <Text
        size="sm"
        weight="medium"
        :color="
          selected && selected.id === item.id ? textSelectionColor : textColor
        "
        :content="item.name"
        :custom-class="`truncate hover:text-${hoverTextColor}`"
      />
      <Badge
        v-if="item.count"
        :bg-color="
          selected && selected.id === item.id ? badgeSelectionColor : badgeColor
        "
        :text-color="
          selected && selected.id === item.id ? textSelectionColor : textColor
        "
        :label="item.count"
        py="0.5"
        px="3"
        text-size="xs"
        class="ml-auto inline-block"
      />
    </a>
  </nav>
</template>

<script>
import { computed } from "vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Text from "../../../atoms/Text/Text.vue";
import Badge from "../../../molecules/Badge/Basic/Basic.vue";
/**
 * - Use it to show a vertical navigation with icons and badges
 */
export default {
  components: {
    Icon,
    Text,
    Badge,
  },
  props: {
    /**
     * use it for assigning background color for navigation
     */
    bgColor: {
      type: String,
      default: "white",
    },
    /**
     * use it for assigning background color for an item
     */
    selectionBgColor: {
      type: String,
      default: "gray-100",
    },
    /**
     * use it for assigning background color for an item on hover
     */
    hoverBg: {
      type: String,
      default: "gray-50",
    },
    /**
     * use it for assigning background color for an item on hover
     */
    hoverBgOpacity: {
      type: String,
      default: "",
    },
    /**
     * use it for assigning text color on hover
     */
    hoverTextColor: {
      type: String,
      default: "gray-900",
    },
    /**
     * use it for assigning icon color
     */
    iconColor: {
      type: String,
      default: "gray-400",
    },
    /**
     * use it for assigning text color
     */
    textColor: {
      type: String,
      default: "gray-600",
    },
    /**
     * use it for assigning badge color
     */
    badgeColor: {
      type: String,
      default: "gray-200",
    },
    /**
     * use it for assigning icon color of current selection
     */
    iconSelectionColor: {
      type: String,
      default: "gray-500",
    },
    /**
     * use it for assigning text color of current selection
     */
    textSelectionColor: {
      type: String,
      default: "gray-900",
    },
    /**
     * use it for assigning badge color of current selection
     */
    badgeSelectionColor: {
      type: String,
      default: "gray-50",
    },
    /**
     * use it for navigation items
     */
    navigation: {
      type: Array,
      default: () => [],
    },
    /**
     * action on clicking an item
     */
    itemClicked: {
      type: Function,
      default: () => {},
    },
    /**
     * active item
     */
    selectedItem: {
      type: Object,
      default: null,
    },
    /**
     * custom clas for nav
     */
    navCustomClass: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
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
      menuItemClicked,
    };
  },
};
</script>
