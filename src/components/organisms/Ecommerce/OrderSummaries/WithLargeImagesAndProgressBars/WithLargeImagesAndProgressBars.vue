<template>
	<div class="bg-white">
		<div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
			<Text size="3xl" weight="extrabold" color="gray-900" class="tracking-tight" :content="title"/>
			<div class="text-sm border-b border-gray-200 mt-2 pb-5 sm:flex sm:justify-between">
				<dl class="flex">
					<Text color="gray-500" content="Order number&nbsp;"/>
					<Text weight="medium" color="gray-900" :content="orderNumber"/>
					<Text color="gray-400" class="mx-2" content="&middot;"/>
					<Text weight="medium" color="gray-900" :content="date"/>
				</dl>
				<div class="mt-4 sm:mt-0">
					<Link weight="medium" color="primary-600" hoverColor="primary-500" :content="`${btnText} &rarr;`"/>
				</div>
			</div>

			<div class="mt-8">
				<div class="space-y-24">
					<div v-for="product in products" :key="product.id" class="grid grid-cols-1 text-sm sm:grid-rows-1 sm:grid-cols-12 sm:gap-x-6 md:gap-x-8 lg:gap-x-8">
						<div class="sm:col-span-4 md:col-span-5 md:row-end-2 md:row-span-2">
							<div class="aspect-w-1 aspect-h-1 bg-gray-50 rounded-lg overflow-hidden">
								<img :src="product.imageSrc" :alt="product.imageAlt" class="object-center object-cover"/>
							</div>
						</div>
						<div class="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
							<Link weight="medium" size="lg" color="gray-900" :content="product.name" :url="product.href"/>
							<Text weight="medium" color="gray-900" class="mt-1" :content="product.price"/>
							<Text color="gray-500" class="mt-3" :content="product.description"/>
						</div>
						<div class="sm:col-span-12 md:col-span-7">
							<dl class="grid grid-cols-1 gap-y-8 border-b py-8 border-gray-200 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
								<div>
									<Text weight="medium" color="gray-900" content="Delivery address"/>
									<dd class="mt-3 text-gray-500">
										<Text class="block" :content="product.address[0]"/>
										<Text class="block" :content="product.address[1]"/>
										<Text class="block" :content="product.address[2]"/>
									</dd>
								</div>
								<div>
									<Text weight="medium" color="gray-900" content="Shipping Updates"/>
									<dd class="mt-3 text-gray-500 space-y-3">
										<Text class="block" :content="product.email"/>
										<Text class="block" :content="product.phone"/>
										<Button content="Edit" class="text-primary-600 hover:text-primary-400 bg-white px-0"/>
									</dd>
								</div>
							</dl>
							<ProgressBar :title="`${product.status} on ${product.date}`" :steps="steps" :currentStep="product.step" class="mt-6"/>
						</div>
					</div>
				</div>
			</div>

			<!-- Billing -->
			<div class="mt-24">
				<h2 class="sr-only">Billing Summary</h2>

				<div class="bg-gray-50 rounded-lg py-6 px-6 lg:px-0 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
					<dl class="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:pl-8 lg:col-span-5">
						<div v-for="(info, i) in extraInfo" :key="i">
							<Text weight="medium" color="gray-900" :content="info.label"/>
							<dd class="mt-2 text-gray-700">
								<Text v-for="(item, id) in info.list" :key="id" :content="item"/>
							</dd>
						</div>
					</dl>

					<dl class="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:pr-8 lg:col-span-7">
						<div class="pb-4 flex items-center justify-between">
							<dt class="text-gray-600">Subtotal</dt>
							<dd class="font-medium text-gray-900">${{priceList.subtotal.toFixed(2)}}</dd>
						</div>
						<div class="py-4 flex items-center justify-between">
							<dt class="text-gray-600">Shipping</dt>
							<dd class="font-medium text-gray-900">${{priceList.shipping.toFixed(2)}}</dd>
						</div>
						<div class="py-4 flex items-center justify-between">
							<dt class="text-gray-600">Tax</dt>
							<dd class="font-medium text-gray-900">${{priceList.tax.toFixed(2)}}</dd>
						</div>
						<div class="pt-4 flex items-center justify-between">
							<dt class="font-medium text-gray-900">Order total</dt>
							<dd class="font-medium text-primary-600">${{priceList.total.toFixed(2)}}</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Text from "../../../../atoms/Text/Text.vue";
import ProgressBar from "../../../../molecules/Steps/ProgressBar/ProgressBar.vue";
import Link from "../../../../atoms/Link/Link.vue";
import Button from "../../../../atoms/Button/Button.vue";
/**
 * - Use it to show an order summary view with large images and progress bars
 */
export default {
  components: {
    Text,
    ProgressBar,
    Link,
    Button,
  },
  props: {
    /**
     * page title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * order number
     */
    orderNumber: {
      type: String,
      default: "",
    },
    /**
     * order created date
     */
    date: {
      type: String,
      default: "",
    },
    /**
     * products list
     */
    products: {
      type: Array,
      default: () => [],
    },
    /**
     * detail button text
     */
    btnText: {
      type: String,
      default: "",
    },
    /**
     * pricing list
     */
    priceList: {
      type: Object,
      default: () => {},
    },
    /**
     * extra information
     */
    extraInfo: {
      type: Array,
      default: () => [],
    },
    /**
     * progress bar steps
     */
    steps: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
