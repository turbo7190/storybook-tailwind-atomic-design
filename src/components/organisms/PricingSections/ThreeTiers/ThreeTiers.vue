<template>
	<div class="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
		<Text size="3xl" weight="extrabold" color="gray-900" class="sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl" :content="title"/>
		<Text size="xl" color="gray-500" class="mt-6 max-w-2xl" :content="description"/>
		<!-- Tiers -->
		<div class="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
			<div v-for="(item, id) in items" :key="id" class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
				<div class="flex-1">
					<Text size="xl" weight="semibold" color="gray-900" :content="item.title"/>
					<Text v-if="item.mostPopular" size="xs" weight="semibold" color="white" content="Most popular" class="absolute top-0 py-1.5 px-4 bg-primary-500 rounded-full uppercase tracking-wide transform -translate-y-1/2"/>
					<p class="mt-4 flex items-baseline">
						<Text size="5xl" weight="extrabold" color="gray-900" :content="'$' + item.price"/>
						<Text size="xl" weight="semibold" color="gray-900" :content="item.frequency"/>
					</p>
					<Text color="gray-500" class="mt-6" :content="item.description"/>
					<!-- Feature list -->
					<ul role="list" class="mt-6 space-y-6">
						<li v-for="(feature, id) in item.features" :key="id" class="flex">
							<Icon name="CheckIcon" size="6" color="primary-500"/>
							<Text color="gray-500" class="ml-3" :content="feature"/>
						</li>
					</ul>
				</div>
				<Link :url="'#'" weight="medium" :content="item.cta" :class="[item.mostPopular ? 'bg-primary-500 text-white hover:bg-primary-600' : 'bg-primary-50 text-primary-700 hover:bg-primary-100', 'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium']"/>
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
 * - Use it to show three tiers pricing section
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
		 * use it for items
		 */
		items: {
			type: Array,
			default: () => []
		}
	}
}
</script>
