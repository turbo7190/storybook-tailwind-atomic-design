<template>
	<div class="bg-white">
		<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
			<div class="text-center">
				<Text size="base" weight="semibold" color="primary-600" class="tracking-wide uppercase" :content="category"/>
				<Text size="4xl" weight="extrabold" color="gray-900" class="mt-1 sm:text-5xl sm:tracking-tight lg:text-6xl" :content="title"/>
				<Text size="xl" color="gray-500" class="max-w-xl mt-5 mx-auto" :content="description"/>
			</div>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show a simple centered header section
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
		 * Use it for section category
		 */
		category: {
			type: String,
			default: ''
		}
	}
}
</script>
