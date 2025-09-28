<template>
  <div :class="`flex-1 flex flex-col min-h-0 overflow-y-auto bg-${navBgColor}`">
    <div class="flex-1">
      <div
        v-if="logo"
        :class="`bg-${logoSectionBgColor} py-4 flex items-center justify-center`"
      >
        <Image :src="logo.src" width="auto" height="8" :alt="logo.title" />
      </div>
      <nav
        aria-label="Sidebar"
        class="py-6 flex flex-col items-center space-y-3"
      >
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          :class="[
            selected && selected.id === item.id
              ? `bg-${navSelectionBgColor}`
              : `hover:bg-${hoverBgColor}`,
            'flex items-center p-4 rounded-lg',
          ]"
          @click.prevent="menuItemClicked(item)"
        >
          <Icon
            :name="item.icon"
            is-outline
            :color="
              selected && selected.id === item.id
                ? iconSelectionColor
                : iconColor
            "
            size="6"
          />
          <span class="sr-only">{{ item.name }}</span>
        </a>
      </nav>
    </div>
    <div v-if="user" class="flex-shrink-0 flex pb-5">
      <Avatar
        is-circle
        size="10"
        :src="user.avatar"
        :username="user.name"
        class="block mx-auto"
      />
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import Icon from "../../../atoms/Icons/Icons.vue";
import Image from "../../../atoms/Image/Image.vue";
import Avatar from "../../../atoms/Avatar/Avatar.vue";
/**
 * - Use it to show a sidebar navigation with icons, logo and avatar
 */
export default {
  components: {
    Icon,
    Avatar,
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
     * Use it to show user profile
     */
    user: {
      type: Object,
      default: () => {},
    },
    /**
     * background color of logo section. default is set to primary-700
     */
    logoSectionBgColor: {
      type: String,
      default: "primary-700",
    },
    /**
     * background color of nav Bar. default is set to primary-600
     */
    navBgColor: {
      type: String,
      default: "primary-600",
    },
    /**
     * background color of selected nav item. default is set to primary-700
     */
    navSelectionBgColor: {
      type: String,
      default: "primary-900",
    },
    /**
     * icon color of selected nav item. default is set to primary-700
     */
    hoverBgColor: {
      type: String,
      default: "primary-700",
    },
    /**
     * icon color. default is set to primary-200
     */
    iconColor: {
      type: String,
      default: "primary-200",
    },
    /**
     * icon color of selected nav item. default is set to primary-200
     */
    iconSelectionColor: {
      type: String,
      default: "primary-200",
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
