<template>
  <div :class="`w-full py-6 flex flex-col items-center bg-${navBgColor}`">
    <div class="flex-shrink-0 flex items-center">
      <Image :src="logo.src" width="auto" height="8" :alt="logo.title" />
    </div>
    <div class="flex-1 mt-6 w-full px-2 space-y-1">
      <a
        v-for="item in navigation"
        :key="item.name"
        :href="item.href"
        :class="[
          selected && selected.id === item.id
            ? `bg-${navSelectionBgColor}`
            : `hover:bg-${hoverBgColor}`,
          'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium',
        ]"
        @click.prevent="menuItemClicked(item)"
      >
        <Icon
          :name="item.icon"
          is-outline
          :color="
            selected && selected.id === item.id ? iconSelectionColor : iconColor
          "
          hover-text-color="white"
          size="6"
        />
        <Text
          :content="item.name"
          :color="
            selected && selected.id === item.id
              ? navTextSelectionColor
              : navTextColor
          "
          weight="medium"
          element="span"
          size="xs"
        />
      </a>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Image from "../../../atoms/Image/Image.vue";
import Text from "../../../atoms/Text/Text.vue";
/**
 * - Use it to show a sidebar navigation with icons, logo and titles
 */
export default {
  components: {
    Icon,
    Text,
    Image,
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
     * background color of nav Bar. default is set to primary-600
     */
    navBgColor: {
      type: String,
      default: "primary-700",
    },
    /**
     * background color of selected nav item. default is set to primary-700
     */
    navSelectionBgColor: {
      type: String,
      default: "primary-800",
    },
    /**
     * icon color of selected nav item. default is set to primary-700
     */
    hoverBgColor: {
      type: String,
      default: "primary-800",
    },
    /**
     * icon color. default is set to primary-200
     */
    iconColor: {
      type: String,
      default: "primary-300",
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
      type: Object,
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
     * text color of nav Item
     */
    navTextColor: {
      type: String,
      default: "primary-100",
    },
    /**
     * text color of nav Item
     */
    navTextSelectionColor: {
      type: String,
      default: "white",
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
