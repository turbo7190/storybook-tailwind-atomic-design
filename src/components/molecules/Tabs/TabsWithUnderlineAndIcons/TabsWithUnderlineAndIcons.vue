
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
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <a
            v-for="tab in tabs"
            :key="tab.name"
            :href="tab.href"
            :class="[
              tab.current
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm',
            ]"
            :aria-current="tab.current ? 'page' : undefined"
          >
            <Icon
              :name="tab.icon"
							size="5"
              :class="[
                tab.current
                  ? 'text-primary-500'
                  : 'text-gray-400 group-hover:text-gray-500',
                '-ml-0.5 mr-2',
              ]"
            />
            <span>{{ tab.name }}</span>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../../../atoms/Icons/Icons.vue'
/**
 * - Use it when show tabs with underline and icons
 * - tabs is required. default is empty array
 */
export default {
	components: {
		Icon
	},
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
