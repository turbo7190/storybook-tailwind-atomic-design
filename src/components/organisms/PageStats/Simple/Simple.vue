<template>
	<div class="bg-gray-50 pt-12 sm:pt-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="max-w-4xl mx-auto text-center">
				<Text size="3xl" weight="extrabold" color="gray-900" :content="title" class="sm:text-4xl"/>
				<Text size="xl" color="gray-500" class="mt-3 sm:mt-4" :content="description"/>
			</div>
		</div>
		<div class="mt-10 pb-12 bg-white sm:pb-16">
			<div class="relative">
				<div class="absolute inset-0 h-1/2 bg-gray-50"/>
				<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="max-w-4xl mx-auto">
						<dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
							<div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r" v-for="(stat, i) in stats" :key="i">
								<Text size="lg" weight="medium" color="gray-500" :content="stat.description" class="order-2 mt-2 "/>
								<Text size="5xl" weight="extrabold" color="primary-600" :content="stat.title" class="order-1"/>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show page with simple stats
 */
export default {
	components: {Text},
	props: {
		/**
		 * Use it for page title
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * Use it for page description
		 */
		description: {
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
