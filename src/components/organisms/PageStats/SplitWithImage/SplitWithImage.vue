<template>
	<div class="relative bg-white">
		<div class="h-56 bg-primary-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
			<img class="w-full h-full object-cover" :src="banner"/>
		</div>
		<div class="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
			<div class="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
				<div>
					<div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
						<Icon :name="icon" size="6" isOutline color="white"/>
					</div>
				</div>
				<Text size="3xl" weight="extrabold" color="gray-900" class="mt-6 sm:text-4xl" :content="title"/>
				<Text size="lg" color="gray-500" class="mt-6" :content="description"/>
				<div class="mt-8 overflow-hidden">
					<dl class="-mx-8 -mt-8 flex flex-wrap">
						<div class="flex flex-col px-8 pt-8" v-for="(stat, i) in stats" :key="i">
							<dt class="order-2 text-base font-medium text-gray-500">{{stat.title}}</dt>
							<dd class="order-1 text-2xl font-extrabold text-primary-600 sm:text-3xl">{{stat.description}}</dd>
						</div>
					</dl>
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
		 * Use it for icon
		 */
		icon: {
			type: String,
			default: 'UsersIcon'
		}
	}
}
</script>
