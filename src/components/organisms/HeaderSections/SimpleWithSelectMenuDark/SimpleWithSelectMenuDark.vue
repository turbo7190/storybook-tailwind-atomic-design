<template>
	<div class="bg-gray-800">
		<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
			<div class="max-w-xl">
				<Text size="4xl" weight="extrabold" color="white" class="sm:text-5xl sm:tracking-tight lg:text-6xl" :content="title"/>
				<Text size="xl" color="gray-400" class="mt-5" :content="description"/>
			</div>
			<div class="mt-10 w-full max-w-xs">
				<Select :items="selectOptions" customSelectClass="bg-gray-700"/>
			</div>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
import Select from '../../../molecules/Selects/SimpleNative/SimpleNative.vue'
/**
 * - Use it to show a simple header section with dark select menu
 */
export default {
	components: {
		Text, Select
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
		 * Use it to show select options
		 */
		selectOptions: {
			type: Array,
			default: () => [
				{text: 'Argentina (ARS)', value: 'Argentina (ARS)'},
				{text: 'Australia (AUD)', value: 'Australia (AUD)'},
				{text: 'United States (USD)', value: 'United States (USD)'},
				{text: 'Canada (CAD)', value: 'Canada (CAD)'},
				{text: 'France (EUR)', value: 'France (EUR)'},
				{text: 'Japan (JPY)', value: 'Japan (JPY)'},
				{text: 'Nigeria (NGN)', value: 'Nigeria (NGN)'},
				{text: 'Switzerland (CHF)', value: 'Switzerland (CHF)'},
				{text: 'United Kingdom (GBP)', value: 'United Kingdom (GBP)'},
			]
		}
	}
}
</script>
