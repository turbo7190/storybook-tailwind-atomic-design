<template>
	<div class="relative bg-primary-800">
		<div class="absolute inset-0">
			<img class="w-full h-full object-cover" :src="bgImage" alt=""/>
			<div class="absolute inset-0 bg-primary-800 mix-blend-multiply" aria-hidden="true"/>
		</div>
		<div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
			<Text size="4xl" weight="extrabold" color="white" class="tracking-tight text-white sm:text-5xl lg:text-6xl" :content="title"/>
			<Text size="xl" color="primary-100" class="mt-6 max-w-3xl" :content="description"/>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show a branded header section with background image
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
		 * Use it to show description
		 */
		description: {
			type: String,
			default: ''
		},
		/**
		 * Use it for background image
		 */
		bgImage: {
			type: String,
			default: ''
		}
	}
}
</script>
