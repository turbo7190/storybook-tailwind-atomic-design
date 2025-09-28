<template>
	<div class="bg-white">
		<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
			<div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
				<div>
					<Text class="text-3xl font-extrabold text-gray-900 sm:text-4xl" :content="title" />
					<Text class="mt-3 max-w-3xl text-lg text-gray-500" :content="description" />
					<div class="mt-8 sm:flex">
						<div v-for="(button, buttonIdx) in buttons" :key="buttonIdx" :class="buttons[buttonIdx]['containerClass']">
							<Button :content="button.label" :customClass="button.class" :size="button.size" :variant="button.type "/>
						</div>
					</div>
				</div>

				<div class="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
					<div v-for="(item, itemIdx) in items" :key="itemIdx" class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
						<img :class="item.class" :src="item.source" :alt="item.alt"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
import Button from '../../../atoms/Button/Button.vue'
/**
 * - Use it to show an empty state with starting points
 */
export default {
	components: {
		Text, Button
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
		 * Use it for title
		 */
		description: {
			type: String,
			default: ''
		},
		/**
		 * Use it for logos
		 */
		items: {
			type: Array,
			default: () => []
		},
		/**
		 * Use it for buttons
		 */
		buttons: {
			type: Array,
			default: () => []
		}
	},
}
</script>
