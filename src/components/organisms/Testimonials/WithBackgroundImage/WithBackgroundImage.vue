<template>
	<div class="bg-white py-16 lg:py-24">
		<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div
					class="relative py-24 px-8 bg-primary-500 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
				<div class="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
					<img :src="bgImage" alt="" class="w-full h-full object-cover"/>
				</div>
				<div class="relative lg:col-span-1">
					<img class="h-12 w-auto" :src="logo"/>
					<blockquote class="mt-6 text-white">
						<Text size="xl" weight="medium" class="sm:text-2xl" :content="description"/>
						<footer class="mt-6">
							<p class="flex flex-col font-medium">
								<Text :content="user.name"/>
								<Text :content="user.role"/>
							</p>
						</footer>
					</blockquote>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show a testimonial with background image
 */
export default {
	components: {
		Text
	},
	props: {
		/**
		 * use it for description
		 */
		description: {
			type: String,
			default: ''
		},
		/**
		 * use it for logo
		 */
		logo: {
			type: String,
			default: ''
		},
		/**
		 * use it for background image
		 */
		bgImage: {
			type: String,
			default: ''
		},
		/**
		 * use it for user part
		 */
		user: {
			type: Object,
			default: () => {
				return {
					user: {
						avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
						name: 'Judith Black',
						role: 'CEO, Tuple'
					}
				}
			}
		}
	}
}
</script>
