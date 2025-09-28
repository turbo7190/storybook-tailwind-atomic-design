<template>
	<section class="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
		<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<svg class="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
					width="404" height="404" fill="none" viewBox="0 0 404 404" role="img" aria-labelledby="svg-workcation">
				<title id="svg-workcation">Workcation</title>
				<defs>
					<pattern id="ad119f34-7694-4c31-947f-5c9d249b21f3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
					</pattern>
				</defs>
				<rect width="404" height="404" fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"/>
			</svg>

			<div class="relative">
				<img class="mx-auto h-8" :src="logo" alt="Workcation"/>
				<blockquote class="mt-10">
					<div class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
						<Text size="2xl" weight="medium" color="gray-900" :content="description"/>
					</div>
					<footer class="mt-8">
						<div class="md:flex md:items-center md:justify-center">
							<div class="md:flex-shrink-0">
								<Avatar isCircle size="10" :src="user.avatar" :username="user.name"/>
							</div>
							<div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
								<Text weight="medium" color="gray-900" :content="user.name"/>
								<svg class="hidden md:block mx-1 h-5 w-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
									<path d="M11 0h3L9 20H6l5-20z"/>
								</svg>
								<Text weight="medium" color="gray-500" :content="user.role"/>
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
 * - Use it to show a simple testimonial
 */
export default {
	components: {
		Avatar, Text
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
