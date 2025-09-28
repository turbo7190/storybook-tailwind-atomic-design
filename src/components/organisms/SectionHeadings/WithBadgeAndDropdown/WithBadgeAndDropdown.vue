<template>
	<div class="pb-5 border-b border-gray-200">
		<div class="sm:flex sm:justify-between sm:items-baseline">
			<div class="sm:w-0 sm:flex-1">
				<Text size="lg" weight="medium" color="gray-900" :content="title"/>
				<Text size="sm" color="gray-500" :content="description" class="mt-1 truncate"/>
			</div>

			<div class="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start">
				<Badge :label="badgeText" :bgColor="'green-100'" textSize="sm" px="3" py="0.5" :textColor="'green-800'"/>
				<dropdown-with-min-icon :items="options" :customClass="'ml-4'"/>
			</div>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
import Badge from '../../../molecules/Badge/Basic/Basic.vue'
import DropdownWithMinIcon from '../../../molecules/Dropdown/DropdownWithMinIcon/DropdownWithMinIcon.vue'
/**
 * - Use it to show section with badge and dropdown
 */
export default {
	components: {
		Text,
		Badge,
		DropdownWithMinIcon
	},
	props: {
		/**
		 * Use it for section title
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * Use it for section description
		 */
		description: {
			type: String,
			default: ''
		},
		/**
		 * Use it for badge
		 */
		badgeText: {
			type: String,
			default: ''
		},
		/**
		 * Use it for dropdown options
		 */
		options: {
			type: Array,
			default: () => []
		}
	}
}
</script>
