<template>
	<section class="bg-white overflow-hidden">
		<div class="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
			<svg class="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden" width="784" height="404"
					 fill="none" viewBox="0 0 784 404" aria-hidden="true">
				<defs>
					<pattern id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32" x="0" y="0" width="20" height="20"
									 patternUnits="userSpaceOnUse">
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
					</pattern>
				</defs>
				<rect width="784" height="404" fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"/>
			</svg>

			<svg class="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2" width="404"
					 height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
				<defs>
					<pattern id="56409614-3d62-4985-9a10-7ca758a8f4f0" x="0" y="0" width="20" height="20"
									 patternUnits="userSpaceOnUse">
						<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
					</pattern>
				</defs>
				<rect width="404" height="784" fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"/>
			</svg>

			<div class="relative lg:flex lg:items-center">
				<div class="hidden lg:block lg:flex-shrink-0">
					<Avatar isCircle size="64" :src="user.avatar" class="xl:h-80 xl:w-80" :username="user.name"/>
				</div>

				<div class="relative lg:ml-10">
					<svg
							class="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-primary-200 opacity-50"
							stroke="currentColor" fill="none" viewBox="0 0 144 144" aria-hidden="true">
						<path stroke-width="2"
									d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"/>
					</svg>
					<blockquote class="relative">
						<Text size="2xl" weight="medium" color="gray-900" class="leading-9" :content="description"/>
						<footer class="mt-8">
							<div class="flex">
								<div class="flex-shrink-0 lg:hidden">
									<Avatar isCircle size="12" :src="user.avatar" :username="user.name"/>
								</div>
								<div class="ml-4 lg:ml-0">
									<Text size="base" weight="medium" color="gray-900" :content="user.name"/>
									<Text size="base" weight="medium" color="primary-600" :content="user.role"/>
								</div>
							</div>
						</footer>
					</blockquote>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Avatar from '../../../atoms/Avatar/Avatar.vue'
import Text from '../../../atoms/Text/Text.vue'
/**
 * - Use it to show a simple testimonial with large avatar
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
