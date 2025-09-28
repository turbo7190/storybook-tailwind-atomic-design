
<template>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select
        id="tabs"
        name="tabs"
        class="
          block
          w-full
          focus:ring-primary-500 focus:border-primary-500
          border-gray-300
          rounded-md
        "
      >
        <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
          {{ tab.name }}
        </option>
      </select>
    </div>
    <div class="hidden sm:block">
      <nav class="flex space-x-4" aria-label="Tabs">
        <a
          v-for="tab in tabs"
          :key="tab.name"
          :href="tab.href"
          :class="[
            tab.current
              ? 'bg-gray-100 text-gray-700'
              : 'text-gray-500 hover:text-gray-700',
            'px-3 py-2 font-medium text-sm rounded-md',
          ]"
          :aria-current="tab.current ? 'page' : undefined"
        >
          {{ tab.name }}
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
/**
 * - Use it when show tabs in pills
 * - tabs is required. default is empty array
 */
export default {
  props: {
    /**
     * the list of tabs
     */
    tabs: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>
