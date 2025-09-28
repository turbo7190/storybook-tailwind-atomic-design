<template>
	<div class="bg-gray-100">
		<div class="pt-12 sm:pt-16 lg:pt-20">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<Text size="3xl" weight="extrabold" color="gray-900" class="sm:text-4xl lg:text-5xl" :content="title"/>
					<Text size="xl" weight="normal" color="gray-600" class="mt-4" :content="description"/>
				</div>
			</div>
		</div>
		<div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
			<div class="relative">
				<div class="absolute inset-0 h-1/2 bg-gray-100"/>
				<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
						<div class="flex-1 bg-white px-6 py-8 lg:p-12">
							<Text size="2xl" weight="extrabold" color="gray-900" class="sm:text-3xl" :content="info.title"/>
							<Text size="base" weight="normal" color="gray-500" class="mt-6" :content="info.description"/>
							<div class="mt-8">
								<div class="flex items-center">
									<Text size="sm" weight="semibold" color="primary-600" class="flex-shrink-0 pr-4 bg-white tracking-wider uppercase" content="What's included"/>
									<div class="flex-1 border-t-2 border-gray-200"/>
								</div>
								<ul role="list" class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
									<li v-for="feature in info.includedFeatures" :key="feature" class="flex items-start lg:col-span-1">
										<div class="flex-shrink-0">
											<Icon name="CheckCircleIcon" size="5" color="green-400"/>
										</div>
										<Text size="sm" weight="normal" color="gray-700" class="ml-3" :content="feature"/>
									</li>
								</ul>
							</div>
						</div>
						<div class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
							<Text size="lg" weight="medium" color="gray-900" class="leading-6" content="Pay once, own it forever"/>
							<div class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
								<Text size="5xl" weight="extrabold" color="gray-900" :content="'$' + info.price"/>
								<Text size="xl" weight="medium" color="gray-500" content="USD" class="ml-3"/>
							</div>
							<Link size="sm" weight="medium" color="gray-500" decoration="underline" class="mt-4" content="Learn about our membership policy"/>
							<div class="mt-6">
								<div class="rounded-md shadow">
									<Button content="Get Access" size="lg" class="w-full bg-gray-800 hover:bg-gray-900"/>
								</div>
							</div>
							<div class="mt-4">
								<a href="#" class="flex justify-center">
									<Text size="sm" weight="medium" color="gray-900" class="mr-1" content="Get a free sample"/>
									<Text size="sm" weight="normal" color="gray-500" :content="'(' + info.size + 'MB)'"/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Icon from '../../../atoms/Icons/Icons.vue'
import Text from '../../../atoms/Text/Text.vue'
import Button from '../../../atoms/Button/Button.vue'
import Link from '../../../atoms/Link/Link.vue'
/**
 * - Use it to show a single price section with detail
 */
export default {
	components: {
		Icon, Text, Button, Link
	},
	props: {
		/**
		 * use it to show section title
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * use it to show section description
		 */
		description: {
			type: String,
			default: ''
		},
		/**
		 * use it for detail info
		 */
		info: {
			type: Object,
			default: () => {}
		}
	}
}
</script>
