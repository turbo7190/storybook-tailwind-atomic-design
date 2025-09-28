<template>
	<section class="bg-primary-800">
		<div class="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
			<div v-for="item in items" :key="item.id"
					class="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-primary-900 flex-1">
				<div class="md:flex-shrink-0">
					<img class="h-12" :src="item.image"/>
				</div>
				<blockquote class="mt-6 md:flex-grow md:flex md:flex-col">
					<div class="relative md:flex-grow">
						<svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-primary-600"
								 fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
							<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
						</svg>
						<Text size="lg" weight="medium" color="white" :content="item.content"/>
					</div>
					<footer class="mt-8">
						<div class="flex items-start">
							<div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">
								<Avatar isCircle size="12" :src="item.user.avatar" :username="item.user.name"/>
							</div>
							<div class="ml-4">
								<Text weight="medium" color="white" :content="item.user.name"/>
								<Text weight="medium" color="primary-200" :content="item.user.role"/>
							</div>
						</div>
					</footer>
				</blockquote>
			</div>
		</div>
	</section>
</template>

<script>
import Avatar from '../../../atoms/Avatar/Avatar.vue'
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show side by side testimonials on brand
 */
export default {
	components: {
		Avatar, Text
	},
	props: {
		/**
		 * use it for items
		 */
		items: {
			type: Array,
			default: () => []
		}
	}
}
</script>
