<template>
	<div class="bg-white">
		<div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
			<div class="sm:flex sm:flex-col sm:align-center">
				<Text size="5xl" weight="extrabold" color="gray-900" class="sm:text-center" :content="title"/>
				<Text size="xl" weight="base" color="gray-500" class="sm:text-center mt-5" :content="description"/>
				<div class="relative self-center mt-6 bg-gray-100 rounded-lg p-1 flex sm:mt-8 space-x-1">
					<Button v-for="(tab, i) in tabs" :key="i" :content="tab.label" :onClick="tab.action" :class="['w-1/2 whitespace-nowrap text-black shadow-sm', selectedTab.label !== tab.label ? 'bg-gray-50' : 'bg-white']" />
				</div>
			</div>
			<div
					class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
				<div v-for="(tier, id) in tiers" :key="id"
						 class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
					<div class="p-6">
						<Text size="lg" weight="medium" color="gray-900" class="leading-6" :content="tier.name"/>
						<Text size="sm" weight="normal" color="gray-500" class="mt-4" :content="tier.description"/>
						<p class="mt-8 flex items-end">
							<Text size="4xl" weight="extrabold" color="gray-900" class="mt-4 mr-1" :content="'$' + tier.priceMonthly"/>
							<Text size="base" weight="medium" color="gray-500" content="/mo"/>
						</p>
						<Link :url="tier.href" size="sm" weight="semibold" color="white" hoverBg="gray-900" :content="'Buy ' + tier.name" class="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-center"/>
					</div>
					<div class="pt-6 pb-8 px-6">
						<Text size="xs" weight="medium" color="gray-900" class="tracking-wide uppercase" content="What's included"/>
						<ul role="list" class="mt-6 space-y-4">
							<li v-for="feature in tier.includedFeatures" :key="feature" class="flex space-x-3">
								<Icon name="CheckIcon" size="5" color="green-500" class="flex-shrink-0"/>
								<Text size="sm" weight="normal" color="gray-500" :content="feature"/>
							</li>
						</ul>
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
 * - Use it to show a four tiers pricing section with toggle
 */
export default {
	components: {
		Icon, Text, Button, Link
	},
	data() {
		return {
			selectedTab: this.tabs[0]
		}
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
		 * use it for toggle
		 */
		tabs: {
			type: Array,
			default: () => []
		},
		/**
		 * use it for tiers
		 */
		tiers: {
			type: Array,
			default: () => []
		}
	}
}
</script>
