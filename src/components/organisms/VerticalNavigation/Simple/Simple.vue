<template>
	<nav class="space-y-1" aria-label="Sidebar">
		<a v-for="item in navigation" :key="item.name" :href="item.href"
			 :class="[item.current ? 'bg-gray-100' : 'hover:bg-gray-50 hover:text-gray-900', 'flex items-center px-3 py-2 rounded-md']"
			 :aria-current="item.current ? 'page' : undefined">
      <Text :content="item.name" size="sm" weight="medium" :color="item.current ? 'gray-900' : 'gray-600'" class="truncate"/>
		</a>
	</nav>
</template>
<script>
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show a simple vertical navigation
 */
export default {
	components: {
		Text
	},
	props: {
		/**
		 * use it for navigation items
		 */
		navigation: {
			type: Array,
			default: () => []
		}
	}
}
</script>
