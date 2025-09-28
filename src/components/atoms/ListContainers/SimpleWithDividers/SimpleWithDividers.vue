<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <ul class="px-4 py-5 sm:p-6">
      <!-- Content goes here -->
      <li
        v-for="item in items"
        :key="item.id"
        class="bg-white shadow overflow-hidden rounded-md px-6 py-4"
      >
        <component :is="component" :label="item.label" :value="item.value" />
      </li>
    </ul>
  </div>
</template>

<script>
/**
 * - Use it to show simple container with dividers
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
