<template>
	<div class="h-screen overflow-scroll bg-gray-900">
		<div class="pt-12 sm:pt-16 lg:pt-24">
			<div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
				<div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
					<Text size="lg" weight="semibold" color="gray-300" class="leading-6 uppercase tracking-wider" :content="category"/>
					<Text size="3xl" weight="extrabold" color="white" class="sm:text-4xl lg:text-5xl" :content="title"/>
					<Text size="xl" color="gray-300" class="mt-3 max-w-4xl mx-auto sm:mt-5 sm:text-2xl" :content="description"/>
				</div>
			</div>
		</div>
		<div class="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
			<div class="relative">
				<div class="absolute inset-0 h-3/4 bg-gray-900"/>
				<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
						<div v-for="(item, id) in items" :key="id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
							<div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
								<div>
									<Badge :label="item.name" px="4" py="1" textSize="sm" bgColor="primary-100" textColor="primary-600" class="uppercase"/>
								</div>
								<div class="mt-4 flex items-baseline text-6xl font-extrabold">
									<Text size="6xl" weight="extrabold" :content="'$' + item.priceMonthly"/>
									<Text size="2xl" weight="medium" color="gray-500" content="/mo" class="mt-1"/>
								</div>
								<Text size="lg" color="gray-500" :content="item.description" class="mt-5"/>
							</div>
							<div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
								<ul role="list" class="space-y-4">
									<li v-for="(feature, i) in item.features" :key="i" class="flex items-start">
										<div class="flex-shrink-0">
											<Icon name="CheckIcon" size="6" color="green-500"/>
										</div>
										<Text weight="medium" color="gray-500" :content="feature" class="ml-3"/>
									</li>
								</ul>
								<div class="rounded-md shadow">
									<Button content="Get started" variant="primary" class="w-full py-3 bg-gray-800"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
				<div class="max-w-md mx-auto lg:max-w-5xl">
					<div class="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
						<div class="flex-1">
							<div>
								<Badge :label="extraItem.name" px="4" py="1" textSize="sm" bgColor="white" textColor="gray-800" class="uppercase"/>
							</div>
							<Text class="mt-4" size="lg" color="gray-600" :content="extraItem.description"/>
						</div>
						<div class="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
							<Button :content="extraItem.cta" variant="secondary" class="py-3"/>
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
import Badge from '../../../molecules/Badge/Basic/Basic.vue'
/**
 * - Use it to show 2 tiers pricing section with extra tier
 */
export default {
	components: {
		Icon, Text, Button, Link, Badge
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
		 * use it to show section category
		 */
		category: {
			type: String,
			default: ''
		},
		/**
		 * use it for items
		 */
		items: {
			type: Array,
			default: () => []
		},
		/**
		 * use it for extra item
		 */
		extraItem: {
			type: Object,
			default: () => {}
		}
	}
}
</script>
