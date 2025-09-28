<template>
	<div class="bg-primary-200 bg-opacity-25">
		<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
			<div class="lg:grid lg:grid-cols-2 lg:gap-8">
				<Text class="max-w-md mx-auto text-3xl font-extrabold text-primary-900 text-center lg:max-w-xl lg:text-left" :content="title" />

				<div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">

					<div v-for="(item, itemIdx) in items" :key="itemIdx" class="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
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
