<template>
	<div>
		<Text size="lg" weight="medium" color="gray-900" class="leading-6" :content="title"/>
		<dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
			<div v-for="item in stats" :key="item.name" class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
				<Text size="sm" weight="medium" color="gray-500" :content="item.name" class="truncate"/>
				<Text size="3xl" weight="semibold" color="gray-900" :content="item.stat" class="mt-1"/>
			</div>
		</dl>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show simple stat list
 */
export default {
	components: {
		Text
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
		 * Use it for stats list
		 */
		stats: {
			type: Array,
			default: () => []
		}
	}
}
</script>
