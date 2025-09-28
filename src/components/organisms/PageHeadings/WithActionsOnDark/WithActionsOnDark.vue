<template>
	<div class="md:flex md:items-center md:justify-between px-4 py-3 bg-black">
		<div class="flex-1 min-w-0">
			<Text size="2xl" weight="bold" color="white" customClass="sm:text-3xl sm:truncate" :content="title"/>
		</div>
		<div class="mt-4 flex md:mt-0 md:ml-4 space-x-2">
			<Button v-for="(button, i) in buttons" :key="i" :content="button.label" :variant="button.type" :onClick="button.onClick" :customClass="button.customClass"/>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
import Button from '../../../atoms/Button/Button.vue'
/**
 * - Use it to show a page header on dark
 */
export default {
	components: {Text, Button},
	props: {
		/**
		 * Use it for header title
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * Use it for header action buttons list
		 */
		buttons: {
			type: Array,
			default: () => []
		}
	}
}
</script>
