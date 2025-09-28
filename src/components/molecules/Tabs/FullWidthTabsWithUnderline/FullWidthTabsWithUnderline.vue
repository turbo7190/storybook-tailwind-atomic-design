
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
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex" aria-label="Tabs">
          <a
            v-for="tab in tabs"
            :key="tab.name"
            :href="tab.href"
            :class="[
              tab.current
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              'w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm',
            ]"
            :aria-current="tab.current ? 'page' : undefined"
          >
            {{ tab.name }}
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * - Use it when show full width tabs with underline
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
