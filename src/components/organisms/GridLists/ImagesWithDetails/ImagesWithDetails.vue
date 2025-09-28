<template>
  <ul
    role="list"
    class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
  >
    <li
      v-for="item in items"
      :key="item.source"
      class="relative"
    >
      <div
        class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-primary-500 overflow-hidden"
      >
        <img
          :src="item.source"
          alt=""
          class="object-cover pointer-events-none group-hover:opacity-75"
        >
        <button
          type="button"
          class="absolute inset-0 focus:outline-none"
        >
          <span class="sr-only">View details for {{ item.title }}</span>
        </button>
      </div>
      <Text
        :content="item.title"
        size="sm"
        color="gray-900"
        weight="medium"
        custom-class="mt-2 truncate pointer-events-none"
      />
      <Text
        :content="item.size"
        size="sm"
        color="gray-500"
        weight="medium"
        custom-class="block pointer-events-none"
      />
    </li>
  </ul>
</template>

<script>
/**
 * Image card with details of image including title and size
 */
import Text from "../../../atoms/Text/Text.vue";
export default {
  components: {
    Text,
  },
  props: {
    /**
     * list of files
     */
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
