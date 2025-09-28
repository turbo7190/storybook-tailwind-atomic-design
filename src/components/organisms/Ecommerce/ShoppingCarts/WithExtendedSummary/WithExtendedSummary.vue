<template>
	<div class="bg-white h-screen overflow-scroll">
		<div class="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-extrabold tracking-tight text-gray-900">Shopping Cart</h1>

			<form class="mt-12">
				<div>
					<h2 class="sr-only">Items in your shopping cart</h2>

					<ul role="list" class="border-t border-b border-gray-200 divide-y divide-gray-200">
						<li v-for="(product, productIdx) in productList" :key="product.id" class="flex py-6 sm:py-10">
							<div class="flex-shrink-0">
								<img :src="product.imageSrc" :alt="product.imageAlt"
										 class="w-24 h-24 rounded-lg object-center object-cover sm:w-32 sm:h-32"/>
							</div>

							<div class="relative ml-4 flex-1 flex flex-col justify-between sm:ml-6">
								<div>
									<div class="flex justify-between sm:grid sm:grid-cols-2">
										<div class="pr-6">
											<h3 class="text-sm">
												<a :href="product.href" class="font-medium text-gray-700 hover:text-gray-800">
													{{ product.name }}
												</a>
											</h3>
											<p class="mt-1 text-sm text-gray-500">
												{{ product.color }}
											</p>
											<p v-if="product.size" class="mt-1 text-sm text-gray-500">
												{{ product.size }}
											</p>
										</div>

										<p class="text-sm font-medium text-gray-900 text-right">{{ getCurrency(product.price) }}</p>
									</div>

									<div class="mt-4 flex items-center sm:block sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
										<label :for="`quantity-${productIdx}`" class="sr-only">Quantity, {{ product.name }}</label>
										<select :id="`quantity-${productIdx}`" :name="`quantity-${productIdx}`" v-model="product.count"
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
														class="ml-4 text-sm font-medium text-primary-600 hover:text-primary-500 sm:ml-0 sm:mt-3">
											<span>Remove</span>
										</button>
									</div>
								</div>

								<p class="mt-4 flex text-sm text-gray-700 space-x-2">
									<CheckIcon v-if="product.inStock" class="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true"/>
									<ClockIcon v-else class="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true"/>
									<span>{{ product.inStock ? 'In stock' : `Ships in ${product.leadTime}` }}</span>
								</p>
							</div>
						</li>
					</ul>
				</div>

				<!-- Order summary -->
				<div class="mt-10 sm:ml-32 sm:pl-6">
					<div class="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
						<h2 class="sr-only">Order summary</h2>

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
					<div class="mt-10">
						<button type="submit"
										class="w-full bg-primary-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500">
							Checkout
						</button>
					</div>

					<div class="mt-6 text-sm text-center text-gray-500">
						<p>
							or <a href="#" class="text-primary-600 font-medium hover:text-primary-500">Continue Shopping<span
								aria-hidden="true"> &rarr;</span></a>
						</p>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import {CheckIcon, ClockIcon} from '@heroicons/vue/24/solid'

export default {
	components: {
		CheckIcon,
		ClockIcon,
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
}
</script>
