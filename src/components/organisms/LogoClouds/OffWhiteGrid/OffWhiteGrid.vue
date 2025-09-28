<template>
	<div class="bg-white">
		<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			<Text size="lg" weight="medium" color="gray-900" class="text-center text-base font-semibold uppercase text-gray-600 tracking-wider" :content="title"/> 

			<div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
				<div v-for="(item, itemIdx) in items" :key="itemIdx" class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
					<img :class="item.class" :src="item.source" :alt="item.alt" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show an empty state with starting points
 */
export default {
	components: {
		Text,
	},
	props: {
		/**
		 * Use it for title
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * Use it for logos
		 */
		items: {
			type: Array,
			default: () => []
		}
	},
}
</script>
