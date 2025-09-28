
<template>
	<div class="grid grid-cols-1 sm:grid-cols-2">
		<Text size="sm" weight="medium" color="black" :content="label"/>
		<Text size="sm" weight="medium" color="gray-500" :content="value"/>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show a simple list item with label and value in a row
 */
export default {
	components: {Text},
	props: {
		/**
		 * label
		 */
		label: {
			type: String,
			default: ''
		},
		/**
		 * value
		 */
		value: {
			type: String,
			default: ''
		}
	}
}
</script>
