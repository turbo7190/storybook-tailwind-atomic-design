<template>
	<nav aria-label="Sidebar">
		<div class="space-y-1">
			<a v-for="item in navigation" :key="item.name" :href="item.href"
				 :class="[item.current ? 'bg-gray-100' : 'hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-3 py-2 rounded-md']"
				 :aria-current="item.current ? 'page' : undefined">
				<Icon :name="item.icon" isOutline :color="item.current ? 'gray-500' : 'gray-400'" size="6" class="flex-shrink-0 -ml-1 mr-3"/>
				<Text size="sm" weight="medium" :color="item.current ? 'gray-900' : 'gray-600'" :content="item.name" class="truncate"/>
			</a>
		</div>
		<div class="mt-8">
			<Text size="xs" weight="semibold" color="gray-500" class="px-3 uppercase tracking-wider" content="Projects"/>
			<div class="mt-1 space-y-1" aria-labelledby="projects-headline">
				<a v-for="item in secondaryNavigation" :key="item.name" :href="item.href"
					 class="group flex items-center px-3 py-2 rounded-md hover:text-gray-900 hover:bg-gray-50">
					 <Text size="sm" weight="medium" color="gray-600" :content="item.name" class="truncate"/>
				</a>
			</div>
		</div>
	</nav>
</template>

<script>
import Icon from '../../../atoms/Icons/Icons.vue'
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show a vertical navigation with secondary navigation
 */
export default {
	components: {
		Icon, Text
	},
	props: {
		/**
		 * use it for navigation items
		 */
		navigation: {
			type: Array,
			default: () => []
		},
		/**
		 * use it for secondary navigation items
		 */
		secondaryNavigation: {
			type: Array,
			default: () => []
		}
	}
}
</script>
