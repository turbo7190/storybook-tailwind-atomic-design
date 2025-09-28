<template>
	<div class="pb-5 border-b border-gray-200 sm:pb-0">
		<Text color="gray-900" weight="medium" size="lg" :content="title"/>
		<div class="mt-3 sm:mt-4">
			<div class="sm:hidden">
				<select id="current-tab" name="current-tab"
								class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
					<option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
				</select>
			</div>
			<div class="hidden sm:block">
				<nav class="-mb-px flex space-x-8">
					<a v-for="tab in tabs" :key="tab.name" :href="tab.href"
						 :class="[tab.current ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm']"
						 :aria-current="tab.current ? 'page' : undefined">
						{{ tab.name }}
					</a>
				</nav>
			</div>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show simple section header with tabs
 */
export default {
  components: {
    Text,
  },
  props: {
    /**
     * Use it to show title
     */
    title: {
      type: String,
      default: ''
    },
		/**
     * Use it to show tabs
     */
    tabs: {
      type: Array,
      default: () => []
    },
  },
};
</script>
