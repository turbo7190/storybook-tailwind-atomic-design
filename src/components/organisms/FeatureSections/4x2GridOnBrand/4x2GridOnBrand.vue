<template>
	<div class="bg-primary-700">
		<div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
			<Text size="3xl" weight="extrabold" color="white" class="tracking-tight" :content="title"/>
			<Text size="lg" color="primary-200" class="mt-4 max-w-3xl" :content="description"/>
			<div
					class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
				<div v-for="(item, i) in items" :key="i">
					<div>
            <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
              <Icon :name="item.icon" color="white" isOutline size="6"/>
            </span>
					</div>
					<div class="mt-6">
						<Text size="lg" weight="medium" color="white" :content="item.name"/>
						<Text size="base" color="primary-200" class="mt-2" :content="item.description"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
import Icon from '../../../atoms/Icons/Icons.vue'
/**
 * - Use it to show 4x2 grid feature sections on brand
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
