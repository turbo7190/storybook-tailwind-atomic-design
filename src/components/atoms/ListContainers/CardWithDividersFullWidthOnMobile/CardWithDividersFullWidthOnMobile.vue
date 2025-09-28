<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="item in items" :key="item.id" class="px-4 py-4 sm:px-6">
        <component :is="component" :label="item.label" :value="item.value" />
      </li>
    </ul>
  </div>
</template>

<script>
/**
 * - Use it to show card type container with dividers full width on mobile
 */
export default {
  props: {
    /**
     * list items
     */
    items: {
      type: Array,
      default: () => [],
    },
    /**
     * child component
     */
    component: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
