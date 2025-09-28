<template>
	<TransitionRoot as="template" :show="open">
		<Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
			<div class="flex min-h-screen text-center sm:block sm:px-6 lg:px-8" style="font-size: 0">
				<TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
												 leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
					<DialogOverlay
							class="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-500 sm:bg-opacity-75 sm:transition-opacity"/>
				</TransitionChild>

				<!-- This element is to trick the browser into centering the modal contents. -->
				<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
				<TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-105"
												 enter-to="opacity-100 scale-100" leave="ease-in duration-200"
												 leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-105">
					<div
							class="flex text-base text-left transform transition w-full sm:inline-block max-w-3xl sm:my-8 sm:align-middle">
						<form
								class="w-full relative flex flex-col bg-white pt-6 pb-8 overflow-hidden sm:pb-6 sm:rounded-lg lg:py-8">
							<div class="flex items-center justify-between px-4 sm:px-6 lg:px-8">
								<h2 class="text-lg font-medium text-gray-900">Shopping Cart</h2>
								<button type="button" class="text-gray-400 hover:text-gray-500" @click="open = false">
									<span class="sr-only">Close</span>
									<XMarkIcon class="h-6 w-6" aria-hidden="true"/>
								</button>
							</div>

							<section aria-labelledby="cart-heading">
								<h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

								<ul role="list" class="divide-y divide-gray-200 px-4 sm:px-6 lg:px-8">
									<li v-for="(product, productIdx) in productList" :key="product.id"
											class="py-8 flex text-sm sm:items-center">
										<img :src="product.imageSrc" :alt="product.imageAlt"
												 class="flex-none w-24 h-24 rounded-lg border border-gray-200 sm:w-32 sm:h-32"/>
										<div
												class="ml-4 flex-auto grid gap-y-3 gap-x-5 grid-rows-1 grid-cols-1 items-start sm:ml-6 sm:flex sm:gap-0 sm:items-center">
											<div class="flex-auto row-end-1 sm:pr-6">
												<h3 class="font-medium text-gray-900">
													<a :href="product.href">{{ product.name }}</a>
												</h3>
												<p class="mt-1 text-gray-500">{{ product.color }}</p>
											</div>
											<p class="row-end-2 row-span-2 font-medium text-gray-900 sm:ml-6 sm:order-1 sm:flex-none sm:w-1/3 sm:text-right">
												{{ getCurrency(product.price) }}
											</p>
											<div class="flex items-center sm:flex-none sm:block sm:text-center">
												<label :for="`quantity-${productIdx}`" class="sr-only">Quantity, {{ product.name }}</label>
												<select :id="`quantity-${productIdx}`" :name="`quantity-${productIdx}`"
                                                        v-model="product.count"
																class="block max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
													<option value="5">5</option>
													<option value="6">6</option>
													<option value="7">7</option>
													<option value="8">8</option>
												</select>

												<button type="button" @click="removeItem(product.id)"
																class="ml-4 font-medium text-primary-600 hover:text-primary-500 sm:ml-0 sm:mt-2">
													<span>Remove</span>
												</button>
											</div>
										</div>
									</li>
								</ul>
							</section>

							<section aria-labelledby="summary-heading" class="mt-auto sm:px-6 lg:px-8">
								<div class="bg-gray-50 p-6 sm:p-8 sm:rounded-lg">
									<h2 id="summary-heading" class="sr-only">Order summary</h2>

									<div class="flow-root">
										<dl class="-my-4 text-sm divide-y divide-gray-200">
											<div class="py-4 flex items-center justify-between">
												<dt class="text-gray-600">Subtotal</dt>
												<dd class="font-medium text-gray-900">{{getCurrency(calcPrice())}}</dd>
											</div>
											<div class="py-4 flex items-center justify-between" v-if="shipping">
												<dt class="text-gray-600">Shipping</dt>
												<dd class="font-medium text-gray-900">{{getCurrency(shipping)}}</dd>
											</div>
											<div class="py-4 flex items-center justify-between" v-if="tax">
												<dt class="text-gray-600">Tax</dt>
												<dd class="font-medium text-gray-900">{{getCurrency(tax)}}</dd>
											</div>
											<div class="py-4 flex items-center justify-between">
												<dt class="text-base font-medium text-gray-900">Order total</dt>
												<dd class="text-base font-medium text-gray-900">{{calcTotal()}}</dd>
											</div>
										</dl>
									</div>
								</div>
							</section>

							<div class="mt-8 flex justify-end px-4 sm:px-6 lg:px-8">
								<button type="submit"
												class="bg-primary-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500">
									Continue to Payment
								</button>
							</div>
						</form>
					</div>
				</TransitionChild>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script>
import {ref} from 'vue'
import {Dialog, DialogOverlay, TransitionChild, TransitionRoot} from '@headlessui/vue'
import {XMarkIcon} from '@heroicons/vue/24/outline'

export default {
    name: "ShoppingModal",
	components: {
		Dialog,
		DialogOverlay,
		TransitionChild,
		TransitionRoot,
		XMarkIcon,
	},
	props: {
        products: {
            type: Array,
            default: null
        },
        shipping: {
            type: Number,
            default: 0
        },
        tax: {
            type: Number,
            default: 0
        },
    },
    data() {
        return {
            productList: [],
        };
    },
    created() {
        this.productList = this.products.map((item) => {
            return {
                ...item,
                count: 1
            }
        });
    },
    methods: {
        calcTotal() {
            return this.getCurrency(this.calcPrice(this.productList)*1 + this.shipping*1 + this.tax*1);
        },
        calcPrice() {
            let sum = 0;
            if (this.productList) {
                this.productList.forEach((product) => {
                    sum += product.count * product.price;
                });
            }
            return sum;
        },
        getCurrency(price) {
            return "$" + (price*1).toFixed(2);
        },
        removeItem(id) {
            this.productList = this.productList.filter((product) => product.id !== id);
        }
    },
    setup() {
		const open = ref(true)

		return {
			open,
		}
	},
}
</script>
