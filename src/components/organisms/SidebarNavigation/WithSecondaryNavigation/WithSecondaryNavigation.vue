<template>
	<div class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
		<div class="flex items-center flex-shrink-0 px-4">
			<img class="h-8 w-auto" src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80"
					 alt="Workflow"/>
		</div>
		<div class="mt-5 flex-grow flex flex-col">
			<nav class="flex-1 px-2 space-y-8 bg-white" aria-label="Sidebar">
				<div class="space-y-1">
					<a v-for="item in navigation" :key="item.name" :href="item.href"
						 :class="[item.current ? 'bg-gray-100' : 'hover:bg-gray-50', 'group flex items-center px-2 py-2 rounded-md']">
						<Icon :name="item.icon" size="6" isOutline :color="item.current ? 'gray-500' : 'gray-400'" :class="[item.current && 'group-hover:text-gray-500', 'mr-3 flex-shrink-0']"/>
						<Text size="sm" weight="medium" :color="item.current ? 'gray-900' : 'gray-600'" :content="item.name" class="hover:text-gray-900"/>
					</a>
				</div>
				<div class="space-y-1">
					<Text size="xs" weight="semibold" color="gray-500" class="px-3 uppercase tracking-wider" :content="secondaryLabel"/>
					<div class="space-y-1" role="group" aria-labelledby="projects-headline">
						<Link v-for="(item, i) in secondaryNavigation" :key="i" :href="item.href" :content="item.name" size="sm" weight="medium" color="gray-600" class="group flex items-center px-3 py-2 rounded-md hover:text-gray-900 hover:bg-gray-50"/>
					</div>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
import Icon from '../../../atoms/Icons/Icons.vue'
import Text from '../../../atoms/Text/Text.vue'
import Link from '../../../atoms/Link/Link.vue'
/**
 * - Use it to show a sidebar navigation with secondary one
 */
export default {
	components: {
		Icon, Text, Link
	},
	props: {
		/**
		 * Use it to show logo
		 */
		logo: {
			type: String,
			default: ''
		},
		/**
		 * Use it to show secondary navigation label
		 */
		secondaryLabel: {
			type: String,
			default: ''
		},
		/**
		 * Use it to show navigation list
		 */
		navigation: {
			type: Array,
			default: () => []
		},
		/**
		 * Use it to show navigation list
		 */
		secondaryNavigation: {
			type: Array,
			default: () => []
		},
	},
}
</script>
