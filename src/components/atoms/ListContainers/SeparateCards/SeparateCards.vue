<template>
  <ul role="list" class="space-y-3">
    <li
      v-for="item in items"
      :key="item.id"
      class="bg-white shadow overflow-hidden rounded-md px-6 py-4"
    >
      <component :is="component" :label="item.label" :value="item.value" />
    </li>
  </ul>
</template>

<script>
/**
 * - Use it to show separate cards container
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
