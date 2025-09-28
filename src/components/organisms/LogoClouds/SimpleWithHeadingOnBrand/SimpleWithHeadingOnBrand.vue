<template>
	<div class="bg-primary-700">
		<div class="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
			<Text class="text-3xl font-extrabold text-white" :content="title"/>

			<div class="flow-root mt-8 lg:mt-10">
				<div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
					<div v-for="(item, itemIdx) in items" :key="itemIdx" class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
						<img :class="item.class" :src="item.source" :alt="item.alt" />
					</div>
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
