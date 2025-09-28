<template>
  <span class="relative z-0 inline-flex shadow-sm rounded-md">
    <button
      type="button"
      class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
    >
      <Icon
        :size="5"
        color="text-gray-400"
        :name="iconName"
        hoverTextColor="text-gray-400"
      />
      {{ iconLabel }}
    </button>
    <button
      type="button"
      class="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
    >
      {{ count }}
    </button>
  </span>
</template>

<script>
import Icon from "../../../atoms/Icons/Icons.vue";

export default {
  name: "ButtonGroupWithState",
  props: {
    iconName: {
      type: String,
      default: "BookmarkIcon",
    },
    iconLabel: {
      type: String,
      default: "",
    },
    count: {
      type: String,
      default: "12k",
    },
  },
  components: {
    Icon,
  },
};
</script>
