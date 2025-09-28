<template>
	<nav class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
			 aria-label="Pagination">
		<div class="hidden sm:block">
			<p class="text-sm text-gray-700">
				Showing{{ ' ' }}
				<span class="font-medium">{{first}}</span>
				{{ ' ' }}to{{ ' ' }}
				<span class="font-medium">{{last}}</span>
				{{ ' ' }}of{{ ' ' }}
				<span class="font-medium">{{totalCount}}</span>
				{{ ' ' }}results
			</p>
		</div>
		<div class="flex-1 flex justify-between sm:justify-end">
			<Button variant="secondary" content="Previous"/>
			<Button variant="secondary" content="Next" class="ml-2"/>
		</div>
	</nav>
</template>
<script>
import Icon from '../../../atoms/Icons/Icons.vue'
import Button from '../../../atoms/Button/Button.vue'
/**
 * - Use it to show pagenation in card footer
 */
export default {
	components: {
		Icon,
		Button
	},
	props: {
		/**
		 * Use it for total count
		 */
		totalCount: {
			type: Number,
			default: 0
		},
		/**
		 * Use it for first index in current page
		 */
		first: {
			type: Number,
			default: 0
		},
		/**
		 * Use it for last index in current page
		 */
		last: {
			type: Number,
			default: 0
		}
	}
}
</script>
