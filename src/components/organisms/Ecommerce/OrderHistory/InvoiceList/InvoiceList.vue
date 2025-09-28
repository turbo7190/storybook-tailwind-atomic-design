<template>
	<div class="bg-white">
		<div class="max-w-4xl mx-auto py-16 sm:px-6 sm:py-24">
			<div class="px-4 sm:px-0">
				<Text size="2xl" weight="extrabold" color="gray-900" class="tracking-tight sm:text-3xl" :content="title"/>
				<Text size="sm" weight="normal" color="gray-500" class="mt-2" :content="description"/>
			</div>
			<div class="mt-16">
				<div class="space-y-16 sm:space-y-24">
					<div v-for="order in orders" :key="order.number">
						<div
								class="bg-gray-50 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
							<dl class="divide-y divide-gray-200 space-y-4 text-sm text-gray-600 flex-auto md:divide-y-0 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
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
							<div class="space-y-4 mt-6 sm:flex sm:space-x-4 sm:space-y-0 md:mt-0 text-sm">
								<Button v-for="button in buttons" :content="button.label" :key="button.label" variant="secondary" :onClick="button.action"/>
							</div>
						</div>
						<div class="mt-6 flow-root px-4 sm:mt-10 sm:px-0">
							<div class="-my-6 divide-y divide-gray-200 sm:-my-10">
								<div v-for="product in order.products" :key="product.id" class="flex py-6 sm:py-10">
									<div class="min-w-0 flex-1 lg:flex lg:flex-col">
										<div class="lg:flex-1">
											<div class="sm:flex">
												<div>
													<Text size="base" weight="medium" color="gray-900" :content="product.name"/>
													<Text size="sm" color="gray-500" :content="product.description" class="hidden mt-2 sm:block"/>
												</div>
												<Text weight="medium" color="gray-900" class="mt-1 sm:mt-0 sm:ml-6" :content="product.price"/>
											</div>
											<div class="mt-2 flex text-sm font-medium sm:mt-4">
												<Link color="primary-600" hoverColor="primary-500" size="sm" weight="medium" content="View Product" :url="product.href"/>
												<div class="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6">
													<Link color="primary-600" hoverColor="primary-500" size="sm" weight="medium" content="Buy Again"/>
												</div>
											</div>
										</div>
										<div class="mt-6 font-medium">
											<div v-if="product.status === 'delivered'" class="flex space-x-2">
												<Icon name="CheckIcon" size="6" color="green-500" class="flex-none"/>
												<p>
													Delivered<span class="hidden sm:inline">
                            on <time :datetime="product.datetime">{{ product.date }}</time></span
												>
												</p>
											</div>
											<p v-else-if="product.status === 'out-for-delivery'">Out for delivery</p>
											<p v-else-if="product.status === 'cancelled'" class="text-gray-500">Cancelled</p>
										</div>
									</div>
									<div class="ml-4 flex-shrink-0 sm:m-0 sm:mr-6 sm:order-first">
										<img :src="product.imageSrc" :alt="product.imageAlt"
												 class="col-start-2 col-end-3 sm:col-start-1 sm:row-start-1 sm:row-span-2 w-20 h-20 rounded-lg object-center object-cover sm:w-40 sm:h-40 lg:w-52 lg:h-52"/>
									</div>
								</div>
							</div>
						</div>
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
 * - Use it to show invoice list
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
