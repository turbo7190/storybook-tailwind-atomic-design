<template>
	<div class="bg-gray-50 overflow-scroll h-screen">
		<div class="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

			<form class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
				<div class="divide-y divide-gray-200">
					<div v-for="(form, id) in forms" :key="id" :class="id !== 0 && 'mt-10 pt-10'">
						<Text size="lg" weight="medium" color="gray-900" :content="form.title"/>
						<div :class="`grid grid-cols-${form.col} sm:grid-cols-${form.smCol} gap-3`">
							<div v-for="(item, index) in form.children" :key="index" :class="[`col-span-${item.col} sm:col-span-${item.smCol}`, 'mt-4']">
								<TextInput v-if="item.type === 'Input'" :label="item.label" v-model="item.value"/>
								<Select v-else-if="item.type === 'Select'" :items="item.options" :label="item.label" v-model="item.value"/>
							</div>
						</div>
					</div>
				</div>

				<!-- Order summary -->
				<div class="mt-10 lg:mt-0">
					<Text size="lg" weight="medium" color="gray-900" content="Order summary"/>
					<div class="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
						<ul role="list" class="divide-y divide-gray-200">
							<li v-for="product in products" :key="product.id" class="flex py-6 px-4 sm:px-6">
								<div class="flex-shrink-0">
									<img :src="product.imageSrc" :alt="product.imageAlt" class="w-20 rounded-md"/>
								</div>

								<div class="ml-6 flex-1 flex flex-col">
									<div class="flex">
										<div class="min-w-0 flex-1">
											<Link size="sm" weight="medium" color="gray-700" hoverColor="gray-800" :content="product.title"/>
											<Text size="sm" color="gray-500" :content="product.color" class="mt-1"/>
											<Text size="sm" color="gray-500" :content="product.size" class="mt-1"/>
										</div>

										<div class="ml-4 flex-shrink-0 flow-root">
											<button type="button" class="-m-2.5 bg-white p-2.5 flex items-center justify-center">
												<Icon name="TrashIcon" size="5" color="gray-400" class="hover:text-gray-500"/>
											</button>
										</div>
									</div>

									<div class="flex-1 pt-2 flex items-end justify-between">
										<Text size="sm" weight="medium" color="gray-900" :content="product.price" class="mt-1"/>
										<div class="ml-4">
											<Select :items="quantities" :placeholder="''"/>
										</div>
									</div>
								</div>
							</li>
						</ul>
						<dl class="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
							<div class="flex items-center justify-between">
								<dt class="text-sm">Subtotal</dt>
								<dd class="text-sm font-medium text-gray-900">${{priceList.subtotal.toFixed(2)}}</dd>
							</div>
							<div class="flex items-center justify-between">
								<dt class="text-sm">Shipping</dt>
								<dd class="text-sm font-medium text-gray-900">${{priceList.shipping.toFixed(2)}}</dd>
							</div>
							<div class="flex items-center justify-between">
								<dt class="text-sm">Taxes</dt>
								<dd class="text-sm font-medium text-gray-900">${{priceList.tax.toFixed(2)}}</dd>
							</div>
							<div class="flex items-center justify-between border-t border-gray-200 pt-6">
								<dt class="text-base font-medium">Total</dt>
								<dd class="text-base font-medium text-gray-900">${{priceList.total.toFixed(2)}}</dd>
							</div>
						</dl>

						<div class="border-t border-gray-200 py-6 px-4 sm:px-6">
							<Button :content="btnText" custom-class="w-full rounded-md"/>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import TextInput from '../../../../molecules/Inputs/Component/Component.vue'
import Button from "../../../../atoms/Button/Button.vue";
import Text from '../../../../atoms/Text/Text.vue'
import Select from '../../../../molecules/Selects/SimpleNative/SimpleNative.vue'
import Link from '../../../../atoms/Link/Link.vue'
import Icon from '../../../../atoms/Icons/Icons.vue'

/**
 * - Use it to show single step checkout with order summary
 */
export default {
	components: {
		Button,
		TextInput,
		Text,
		Select,
		Link,
		Icon
	},
	data() {
		return {
			quantities: [
				{text: 1, value: 1},
				{text: 2, value: 2},
				{text: 3, value: 3},
				{text: 4, value: 4},
				{text: 5, value: 5},
				{text: 6, value: 6},
				{text: 7, value: 7},
				{text: 8, value: 8},
				{text: 9, value: 9},
				{text: 10, value: 10},
			]
		}
	},
	props: {
		/**
		 * use it for forms
		 */
		forms: {
			type: Array,
			default: () => []
		},
		/**
		 * use it for products
		 */
		products: {
			type: Array,
			default: () => []
		},
		/**
		 * use it for price list
		 */
		priceList: {
			type: Object,
			default: () => {}
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
