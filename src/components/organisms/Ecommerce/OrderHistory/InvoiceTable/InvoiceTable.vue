<template>
	<div class="bg-white">
		<div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pb-24 lg:px-8">
			<div class="max-w-xl">
				<Text size="2xl" weight="extrabold" color="gray-900" class="tracking-tight sm:text-3xl" :content="title"/>
				<Text size="sm" weight="normal" color="gray-500" class="mt-2" :content="description"/>
			</div>

			<div class="mt-16">
				<div class="space-y-20">
					<div v-for="order in orders" :key="order.number">

						<div
								class="bg-gray-50 rounded-lg py-6 px-4 sm:px-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 lg:space-x-8">
							<dl class="divide-y divide-gray-200 space-y-6 text-sm text-gray-600 flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
								<div class="flex justify-between md:block">
									<Text size="sm" weight="medium" color="gray-900" content="Order number"/>
									<Text size="sm" color="gray-600" :content="order.number" class="md:mt-1"/>
								</div>
								<div class="flex justify-between md:block">
									<Text size="sm" weight="medium" color="gray-900" content="Date placed"/>
									<Text size="sm" color="gray-600" :content="order.date" class="md:mt-1"/>
								</div>
								<div class="flex justify-between pt-4 font-medium text-gray-900 md:block md:pt-0">
									<Text size="sm" weight="medium" color="gray-900" content="Total amount"/>
									<Text size="sm" color="gray-600" :content="order.total" class="md:mt-1"/>
								</div>
							</dl>
							<Button v-for="button in buttons" :content="button.label" :key="button.label" variant="secondary" :onClick="button.action"/>
						</div>

						<table class="mt-4 w-full text-gray-500 sm:mt-6">
							<thead class="sr-only text-sm text-gray-500 text-left sm:not-sr-only">
							<tr>
								<th scope="col" class="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal">Product</th>
								<th scope="col" class="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell">Price</th>
								<th scope="col" class="hidden pr-8 py-3 font-normal sm:table-cell">Status</th>
								<th scope="col" class="w-0 py-3 font-normal text-right">Info</th>
							</tr>
							</thead>
							<tbody class="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
							<tr v-for="product in order.products" :key="product.id">
								<td class="py-6 pr-8">
									<div class="flex items-center">
										<img :src="product.imageSrc" :alt="product.imageAlt"
												 class="w-16 h-16 object-center object-cover rounded mr-6"/>
										<div>
											<Text size="sm" weight="medium" color="gray-900" :content="product.name"/>
											<Text size="sm" :content="product.price" class="mt-1 sm:hidden"/>
										</div>
									</div>
								</td>
								<td class="hidden py-6 pr-8 sm:table-cell">
									{{ product.price }}
								</td>
								<td class="hidden py-6 pr-8 sm:table-cell">
									{{ product.status }}
								</td>
								<td class="py-6 font-medium text-right whitespace-nowrap">
									<Link color="primary-600" hoverColor="primary-500" size="sm" weight="medium" content="View Product" :url="product.href"/>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Text from '../../../../atoms/Text/Text.vue'
import Button from '../../../../atoms/Button/Button.vue'
import Link from '../../../../atoms/Link/Link.vue'
import Icon from '../../../../atoms/Icons/Icons.vue'
/**
 * - Use it to show invoice table
 */
export default {
	components: {
		Text, Button, Link, Icon
	},
	props: {
		/**
		 * use it for title
		 */
		title: {
			type: String,
			default: ''
		},
		/**
		 * use it for description
		 */
		description: {
			type: String,
			default: ''
		},
		/**
		 * use it for orders list
		 */
		orders: {
			type: Array,
			default: () => []
		},
		/**
		 * use it for buttons list
		 */
		buttons: {
			type: Array,
			default: () => []
		},
	},
}
</script>
