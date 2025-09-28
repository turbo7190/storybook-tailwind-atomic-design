<template>
	<nav class="space-y-1" aria-label="Sidebar">
		<a v-for="item in navigation" :key="item.name" :href="item.href"
			 :class="[item.current ? 'bg-gray-200' : 'hover:bg-gray-50 hover:text-gray-900', 'flex items-center px-3 py-2 rounded-md']"
			 :aria-current="item.current ? 'page' : undefined">
			<Icon :name="item.icon" isOutline :color="item.current ? 'gray-500' : 'gray-400'" size="6" class="flex-shrink-0 -ml-1 mr-3"/>
			<Text size="sm" weight="medium" :color="item.current ? 'gray-900' : 'gray-600'" :content="item.name" class="truncate"/>
			<Badge v-if="item.count" :bgColor="item.current ? 'gray-50' : 'gray-200'" :label="item.count" py="0.5" px="3" textSize="xs" class="ml-auto inline-block"/>
		</a>
	</nav>
</template>

<script>
import Icon from '../../../atoms/Icons/Icons.vue'
import Text from '../../../atoms/Text/Text.vue'
import Badge from '../../../molecules/Badge/Basic/Basic.vue'
/**
 * - Use it to show a vertical navigation on gray
 */
export default {
	components: {
		Icon, Text, Badge
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
