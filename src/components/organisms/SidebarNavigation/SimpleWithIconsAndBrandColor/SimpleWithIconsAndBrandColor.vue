<template>
	<div class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
		<div class="flex items-center flex-shrink-0 px-4 space-y-5">
			<img class="h-8 w-auto" src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80"
					 alt="Workflow"/>
		</div>
		<div class="mt-5 flex-grow flex flex-col">
			<nav class="flex-1 bg-white space-y-1" aria-label="Sidebar">
				<a v-for="item in navigation" :key="item.name" :href="item.href"
					 :class="[item.current ? 'bg-primary-50 border-primary-600 text-primary-600' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-3 py-2 text-sm font-medium border-l-4']">
					<Icon :name="item.icon" isOutline size="6" :color="item.current ? 'primary-500' : 'gray-400'" class="mr-3 flex-shrink-0" />
					<Text size="sm" weight="medium" :color="item.current ? 'primary-600' : 'gray-600'" :content="item.name"/>
				</a>
			</nav>
		</div>
	</div>
</template>

<script>
import Icon from '../../../atoms/Icons/Icons.vue'
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show a sidebar navigation with icons, badges and profile
 */
export default {
	components: {
		Icon, Text
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
		 * Use it to show navigation list
		 */
		navigation: {
			type: Array,
			default: () => []
		},
	},
}
</script>
