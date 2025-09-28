<template>
	<div class="md:flex md:items-center md:justify-between md:space-x-5">
		<div class="flex items-start space-x-5">
			<div class="flex-shrink-0">
				<Avatar :username="user.name" isCircle :src="user.avatar" size="16"/>
			</div>
			<div class="pt-1.5">
				<Text size="2xl" weight="bold" color="gray-900" :content="user.name"/>
				<Text size="sm" weight="medium" color="gray-500" :content="user.description"/>
			</div>
		</div>
		<div class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
			<Button v-for="(button, i) in buttons" :key="i" :content="button.label" :variant="button.type" :onClick="button.onClick"/>
		</div>
	</div>
</template>

<script>
import Avatar from '../../../atoms/Avatar/Avatar.vue';
import Text from '../../../atoms/Text/Text.vue'
import Button from '../../../atoms/Button/Button.vue'
/**
 * - Use it to show a page header with avatar and action
 */
export default {
	components: {
		Text, Button, Avatar,
	},
	props: {
		/**
		 * Use it for avatar part
		 */
		user: {
			type: Object,
			default: () => {}
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
