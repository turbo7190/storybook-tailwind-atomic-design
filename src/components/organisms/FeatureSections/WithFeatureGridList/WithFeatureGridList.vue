<template>
	<div class="h-screen bg-white">
		<div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
			<div class="max-w-3xl mx-auto text-center">
				<Text size="3xl" weight="extrabold" color="gray-900" class="tracking-tight" :content="title"/>
				<Text size="lg" color="gray-500" class="mt-4 max-w-3xl" :content="description"/>
			</div>
			<dl class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
				<div v-for="item in items" :key="item.name" class="relative">
					<dt>
						<Icon name="CheckIcon" size="6" color="green-500" class="absolute"/>
						<Text size="lg" weight="medium" color="gray-900" class="ml-9 leading-6" :content="item.name"/>
					</dt>
					<dd class="mt-2 ml-9">
						<Text size="base" color="gray-500" :content="item.description"/>
					</dd>
				</div>
			</dl>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
import Icon from '../../../atoms/Icons/Icons.vue'
/**
 * - Use it to show a section with feature grid list
 */
export default {
	components: {
		Text, Icon
	},
	props: {
		/**
		 * use it to show title
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * use it to show description
		 */
		description: {
			type: String,
			default: ''
		},
		/**
		 * use it to show item items
		 */
		items: {
			type: Array,
			default: () => []
		}
	},
}
</script>
