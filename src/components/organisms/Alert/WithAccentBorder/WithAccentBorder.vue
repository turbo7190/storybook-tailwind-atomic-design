<template>
	<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
		<div class="flex">
			<div class="flex-shrink-0">
				<Icon :name="icon" size="5" color="yellow-400"/>
			</div>
			<div class="ml-3">
				<p class="text-sm text-yellow-700">
					{{text}}
					{{ ' ' }}
					<CommonLink color="yellow-700" decoration="underline" :content="linkText" :onClick="onClick"/>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import Icon from '../../../atoms/Icons/Icons.vue'
import CommonLink from '../../../atoms/Link/Link.vue'
/**
 * - Use it when showing warning alert with accent border
 */
export default {
	components: {
		CommonLink,
		Icon,
	},
	props: {
		/**
		 * Use it for static text of alert
		 */
		text: {
			type: String
		},
		/**
		 * Use it for link text
		 */
		linkText: {
			type: String
		},
		/**
		 * Use it for link action
		 */
		onClick: {
			type: Function,
			default: () => {}
		},
		/**
     * Use to show icon
     */
    icon: {
      type: String,
    },
	}
}
</script>
