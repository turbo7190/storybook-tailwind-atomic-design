<template>
	<div class="bg-white overflow-scroll h-screen">
		<!-- Background color split screen for large screens -->
		<div class="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true"/>
		<div class="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true"/>

		<div class="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-48">
			<section aria-labelledby="summary-heading" class="bg-gray-50 pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2">
				<div class="max-w-lg mx-auto lg:max-w-none">
					<Text size="lg" weight="medium" color="gray-900" content="Order Summary"/>
					<ul role="list" class="text-sm font-medium text-gray-900 divide-y divide-gray-200">
						<li v-for="product in products" :key="product.id" class="flex items-start py-6 space-x-4">
							<img :src="product.imageSrc" :alt="product.imageAlt"
									 class="flex-none w-20 h-20 rounded-md object-center object-cover"/>
							<div class="flex-auto space-y-1">
								<Text size="sm" weight="medium" color="gray-900" :content="product.name"/>
								<Text size="sm" weight="medium" color="gray-500" :content="product.color"/>
								<Text size="sm" weight="medium" color="gray-500" :content="product.size"/>
							</div>
							<Text size="base" weight="medium" color="gray-900" :content="product.price" class="flex-none"/>
						</li>
					</ul>

					<dl class="hidden text-sm font-medium text-gray-900 space-y-6 border-t border-gray-200 pt-6 lg:block">
						<div class="flex items-center justify-between">
							<dt class="text-gray-600">Subtotal</dt>
							<dd>${{priceList.subtotal.toFixed(2)}}</dd>
						</div>

						<div class="flex items-center justify-between">
							<dt class="text-gray-600">Shipping</dt>
							<dd>${{priceList.shipping.toFixed(2)}}</dd>
						</div>

						<div class="flex items-center justify-between">
							<dt class="text-gray-600">Taxes</dt>
							<dd>${{priceList.tax.toFixed(2)}}</dd>
						</div>

						<div class="flex items-center justify-between border-t border-gray-200 pt-6">
							<dt class="text-base">Total</dt>
							<dd class="text-base">${{priceList.total.toFixed(2)}}</dd>
						</div>
					</dl>

					<Popover class="fixed bottom-0 inset-x-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden"
									 v-slot="{ open }">
						<div class="relative z-10 bg-white border-t border-gray-200 px-4 sm:px-6">
							<div class="max-w-lg mx-auto">
								<PopoverButton class="w-full flex items-center py-6 font-medium">
									<Text size="base" weight="medium" content="Total" color="gray-900" class="mr-auto"/>
									<Text size="base" weight="medium" :content="`$${priceList.total.toFixed(2)}`" color="gray-900" class="mr-2"/>
									<Icon name="ChevronUpIcon" size="5" color="gray-500"/>
								</PopoverButton>
							</div>
						</div>

						<TransitionRoot as="template" :show="open">
							<div>
								<TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
																 enter-from="opacity-0" enter-to="opacity-100"
																 leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
																 leave-to="opacity-0">
									<PopoverOverlay class="fixed inset-0 bg-black bg-opacity-25"/>
								</TransitionChild>

								<TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
																 enter-from="translate-y-full" enter-to="translate-y-0"
																 leave="transition ease-in-out duration-300 transform" leave-from="translate-y-0"
																 leave-to="translate-y-full">
									<PopoverPanel class="relative bg-white px-4 py-6 sm:px-6">
										<dl class="max-w-lg mx-auto space-y-6">
											<div class="flex items-center justify-between">
												<dt class="text-gray-600">Subtotal</dt>
												<dd>${{priceList.subtotal.toFixed(2)}}</dd>
											</div>

											<div class="flex items-center justify-between">
												<dt class="text-gray-600">Shipping</dt>
												<dd>${{priceList.shipping.toFixed(2)}}</dd>
											</div>

											<div class="flex items-center justify-between">
												<dt class="text-gray-600">Taxes</dt>
												<dd>${{priceList.tax.toFixed(2)}}</dd>
											</div>
										</dl>
									</PopoverPanel>
								</TransitionChild>
							</div>
						</TransitionRoot>
					</Popover>
				</div>
			</section>

			<form class="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1">
				<div class="max-w-lg mx-auto lg:max-w-none">
					<div v-for="(form, id) in forms" :key="id" :class="id !== 0 && 'mt-10'">
						<Text size="lg" weight="medium" color="gray-900" :content="form.title"/>
						<div :class="`grid grid-cols-${form.col} sm:grid-cols-${form.smCol} gap-3`">
							<div v-for="(item, index) in form.children" :key="index" :class="[`col-span-${item.col} sm:col-span-${item.smCol}`, 'mt-4']">
								<TextInput v-if="item.type === 'Input'" :label="item.label" v-model="item.value"/>
								<Checkbox v-else-if="item.type === 'Checkbox'" :title="item.label" v-model="item.value"/>
							</div>
						</div>
					</div>

					<div class="mt-10 pt-6 border-t border-gray-200 sm:flex sm:items-center sm:justify-between">
						<Text size="sm" color="gray-500" class="mt-4 text-center sm:mt-0 sm:text-left" content="You won't be charged until the next step."/>
						<Button content="Continue" class="rounded-md"/>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import {Popover, PopoverButton, PopoverOverlay, PopoverPanel, TransitionChild, TransitionRoot} from '@headlessui/vue'
import TextInput from '../../../../molecules/Inputs/Component/Component.vue'
import Button from "../../../../atoms/Button/Button.vue";
import Text from '../../../../atoms/Text/Text.vue'
import Checkbox from '../../../../molecules/Checkboxes/SimpleWithDescription/SimpleWithDescription.vue'
import Link from '../../../../atoms/Link/Link.vue'
import Icon from '../../../../atoms/Icons/Icons.vue'

/**
 * - Use it to show checkout with mobile order summary overlay
 */
export default {
	components: {
		Popover,
		PopoverButton,
		PopoverOverlay,
		PopoverPanel,
		TransitionChild,
		TransitionRoot,
		Button,
		TextInput,
		Text,
		Checkbox,
		Link,
		Icon
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
