<template>
	<main class="relative lg:min-h-full h-screen overflow-scroll">
		<div class="h-80 overflow-hidden lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-12">
			<img :src="image" alt="TODO" class="h-full w-full object-center object-cover"/>
		</div>
		<div>
			<div
					class="max-w-2xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:py-32 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-24">
				<div class="lg:col-start-2">
					<Text size="sm" weight="medium" color="primary-600" :content="label"/>
					<Text size="4xl" weight="extrabold" color="gray-900" class="mt-2 sm:text-5xl" :content="title"/>
					<Text size="base" color="gray-500" :content="description" class="mt-2"/>
					<ul role="list" class="mt-6 text-sm font-medium text-gray-500 border-t border-gray-200 divide-y divide-gray-200">
						<li v-for="product in products" :key="product.id" class="flex py-6 space-x-6">
							<img :src="product.imageSrc" :alt="product.imageAlt"
									 class="flex-none w-24 h-24 bg-gray-100 rounded-md object-center object-cover"/>
							<div class="flex-auto space-y-1">
								<Link color="gray-900" :content="product.name" :url="product.href"/>
								<Text :content="`${product.color}`"/>
								<Text :content="product.size"/>
							</div>
							<Text weight="medium" color="gray-900" :content="product.price" class="flex-none"/>
						</li>
					</ul>

					<dl class="text-sm font-medium text-gray-500 space-y-6 border-t border-gray-200 pt-6">
						<div class="flex justify-between">
							<dt>Subtotal</dt>
							<dd class="text-gray-900">${{priceList.subtotal.toFixed(2)}}</dd>
						</div>

						<div class="flex justify-between">
							<dt>Shipping</dt>
							<dd class="text-gray-900">${{priceList.shipping.toFixed(2)}}</dd>
						</div>

						<div class="flex justify-between">
							<dt>Taxes</dt>
							<dd class="text-gray-900">${{priceList.tax.toFixed(2)}}</dd>
						</div>

						<div class="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
							<dt class="text-base">Total</dt>
							<dd class="text-base">${{priceList.total.toFixed(2)}}</dd>
						</div>
					</dl>

					<dl class="mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600">
						<div v-for="(info, i) in extraInfo" :key="i">
							<Text weight="medium" color="gray-900" :content="info.label"/>
							<dd class="mt-2 text-gray-700">
								<Text v-for="(item, id) in info.list" :key="id" :content="item"/>
							</dd>
						</div>
					</dl>

					<div class="mt-16 border-t border-gray-200 py-6 text-right">
						<Link size="sm" weight="medium" color="primary-600" hoverColor="primary-500" class="hidden sm:block" :content="`${btnText} &rarr;`"/>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import Text from '../../../../atoms/Text/Text.vue'
import Button from '../../../../atoms/Button/Button.vue'
import Link from '../../../../atoms/Link/Link.vue'
/**
 * - Use it to show multi step checkout form
 */
export default {
	components: {
		Text,
		Button,
		Link,
	},
	props: {
		/**
		 * use it for label
		 */
		label: {
			type: String,
			default: ''
		},
		/**
		 * use it for image
		 */
		image: {
			type: String,
			default: ''
		},
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
		 * use it for products
		 */
		products: {
			type: Array,
			default: () => []
		},
		/**
		 * use it to show pricing list
		 */
		priceList: {
			type: Object,
			default: () => {}
		},
		/**
		 * use it for extra information
		 */
		extraInfo: {
			type: Array,
			default: () => []
		},
		/**
		 * use it for button text
		 */
		btnText: {
			type: String,
			default: ''
		}
	}
}
</script>

