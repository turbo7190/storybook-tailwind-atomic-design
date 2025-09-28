<template>
	<div class="bg-white">
		<div class="max-w-7xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:px-8">
			<!-- xs to lg -->
			<div class="max-w-2xl mx-auto space-y-16 lg:hidden">
				<section v-for="(item, itemIdx) in items" :key="item.name">
					<div class="px-4 mb-8">
						<Text size="lg" weight="medium" color="gray-900" class="leading-6" :content="item.name"/>
						<p class="mt-4">
							<Text size="4xl" weight="extrabold" color="gray-900" class="" :content="'$' + item.priceMonthly"/>
							<Text size="base" weight="medium" color="gray-500" class="" content="/mo"/>
						</p>
						<Text size="sm" color="gray-500" class="mt-4" :content="item.description"/>
						<Button :content="'Buy ' + item.name" class="bg-gray-800 hover:bg-gray-900 mt-6 w-full"/>
					</div>

					<table v-for="section in sections" :key="section.name" class="w-full">
						<caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-left">
							<Text size="sm" weight="medium" color="gray-900" :content="section.name"/>
						</caption>
						<thead>
						<tr>
						</tr>
						</thead>
						<tbody class="divide-y divide-gray-200">
						<tr v-for="feature in section.features" :key="feature.name" class="border-t border-gray-200">
							<th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">{{ feature.name }}</th>
							<td class="py-5 pr-4">
								<Text v-if="typeof feature.tiers[item.name] === 'string'" size="sm" color="gray-700" :content="feature.tiers[item.name]"/>
								<template v-else>
									<Icon v-if="feature.tiers[item.name] === true" name="CheckIcon" size="5" color="green-500" class="ml-auto"/>
									<Icon name="MinusIcon" v-else size="5" color="gray-400" class="ml-auto"/>
								</template>
							</td>
						</tr>
						</tbody>
					</table>

					<div :class="[itemIdx < items.length - 1 ? 'py-5 border-b' : 'pt-5', 'border-t border-gray-200 px-4']">
						<Button :content="'Buy ' + item.name" class="bg-gray-800 hover:bg-gray-900 w-full"/>
					</div>
				</section>
			</div>

			<!-- lg+ -->
			<div class="hidden lg:block">
				<table class="w-full h-px table-fixed">
					<thead>
					<tr>
						<th class="pb-4 px-6 text-left" scope="col">
							<Text size="sm" weight="medium" color="gray-900" content="Plans"/>
						</th>
						<th v-for="item in items" :key="item.name" class="w-1/4 pb-4 px-6 leading-6 text-left" scope="col">
							<Text size="lg" weight="medium" color="gray-900" :content="item.name"/>
						</th>
					</tr>
					</thead>
					<tbody class="border-t border-gray-200 divide-y divide-gray-200">
					<tr>
						<th class="py-8 px-6 text-left align-top" scope="row">
							<Text size="sm" weight="medium" color="gray-900" content="Pricing"/>
						</th>
						<td v-for="item in items" :key="item.name" class="h-full py-8 px-6 align-top">
							<div class="relative h-full table">
								<p class="flex items-end">
									<Text size="4xl" weight="extrabold" color="gray-900" class="" :content="'$' + item.priceMonthly"/>
									<Text size="base" weight="medium" color="gray-500" class="" content="/mo"/>
								</p>
								<Text size="sm" color="gray-500" class="mt-4" :content="item.description"/>
								<Button :content="'Buy ' + item.name" class="bg-gray-800 hover:bg-gray-900 mt-6 w-full"/>
							</div>
						</td>
					</tr>
					<template v-for="section in sections" :key="section.name">
						<tr>
							<th class="bg-gray-50 py-3 pl-6 text-sm font-medium text-gray-900 text-left" colspan="4" scope="colgroup">
								{{ section.name }}
							</th>
						</tr>
						<tr v-for="feature in section.features" :key="feature.name">
							<th class="py-5 px-6 text-sm font-normal text-gray-500 text-left" scope="row">{{ feature.name }}</th>
							<td v-for="item in items" :key="item.name" class="py-5 px-6">
								<Text v-if="typeof feature.tiers[item.name] === 'string'" size="sm" color="gray-700" :content="feature.tiers[item.name]"/>
								<template v-else>
									<Icon v-if="feature.tiers[item.name] === true" name="CheckIcon" size="5" color="green-500" class="ml-auto"/>
									<Icon name="MinusIcon" v-else size="5" color="gray-400" class="ml-auto"/>
								</template>
							</td>
						</tr>
					</template>
					</tbody>
					<tfoot>
					<tr class="border-t border-gray-200">
						<th class="sr-only" scope="row">Choose your plan</th>
						<td v-for="item in items" :key="item.name" class="pt-5 px-6">
							<Button :content="'Buy ' + item.name" class="bg-gray-800 hover:bg-gray-900 mt-6 w-full"/>
						</td>
					</tr>
					</tfoot>
				</table>
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
 * - Use it to show a pricing section with comparison table
 */
export default {
	components: {
		Icon, Text, Button, Link, Badge
	},
	props: {
		/**
		 * use it for items
		 */
		items: {
			type: Array,
			default: () => []
		},
		/**
		 * use it for table sections
		 */
		sections: {
			type: Array,
			default: () => []
		},
	}
}
</script>
