<template>
	<div class="relative bg-gray-900">
		<div class="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
			<div class="h-full w-full xl:grid xl:grid-cols-2">
				<div class="h-full xl:relative xl:col-start-2">
					<img class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" :src="banner" />
					<div aria-hidden="true"
							 class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"/>
				</div>
			</div>
		</div>
		<div
				class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
			<div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
				<Text size="sm" weight="semibold" color="primary-300" class="tracking-wide uppercase" :content="category"/>
				<Text size="3xl" weight="extrabold" color="white" class="mt-3" :content="title"/>
				<Text size="lg" color="gray-300" class="mt-5" :content="description"/>
				<div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
					<p v-for="item in stats" :key="item.id">
						<Text size="2xl" weight="bold" color="white" class="block" :content="item.stat"/>
						<Text size="base" weight="medium" color="white" class="mt-1 block" :content="item.emphasis + ' ' + item.rest"/>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
import Icon from '../../../atoms/Icons/Icons.vue'
/**
 * - Use it to show page with spliting image
 */
export default {
	components: {Text, Icon},
	props: {
		/**
		 * Use it for page title
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * Use it for page description
		 */
		description: {
			type: String,
			default: ''
		},
		/**
		 * Use it for stats list
		 */
		stats: {
			type: Array,
			default: () => []
		},
		/**
		 * Use it for spliting image
		 */
		banner: {
			type: String,
			default: ''
		},
		/**
		 * Use it for page category
		 */
		category: {
			type: String,
			default: ''
		}
	}
}
</script>

