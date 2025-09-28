<template>
	<div class="bg-white">
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
			<h1 class="text-3xl font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

			<form class="mt-12">
				<section aria-labelledby="cart-heading">
					<h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

					<ul role="list" class="border-t border-b border-gray-200 divide-y divide-gray-200">
						<li v-for="product in productList" :key="product.id" class="flex py-6">
							<div class="flex-shrink-0">
								<img :src="product.imageSrc" :alt="product.imageAlt"
										 class="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"/>
							</div>

							<div class="ml-4 flex-1 flex flex-col sm:ml-6">
								<div>
									<div class="flex justify-between">
										<h4 class="text-sm">
											<a :href="product.href" class="font-medium text-gray-700 hover:text-gray-800">
												{{ product.name }}
											</a>
										</h4>
										<p class="ml-4 text-sm font-medium text-gray-900">{{ getCurrency(product.price) }}</p>
									</div>
									<p class="mt-1 text-sm text-gray-500">
										{{ product.color }}
									</p>
									<p class="mt-1 text-sm text-gray-500">
										{{ product.size }}
									</p>
								</div>

								<div class="mt-4 flex-1 flex items-end justify-between">
									<p class="flex items-center text-sm text-gray-700 space-x-2">
										<CheckIcon v-if="product.inStock" class="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true"/>
										<ClockIcon v-else class="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true"/>
										<span>{{ product.inStock ? 'In stock' : `Will ship in ${product.leadTime}` }}</span>
									</p>
									<div class="ml-4">
										<button type="button" @click="removeItem(product.id)" class="text-sm font-medium text-primary-600 hover:text-primary-500">
											<span>Remove</span>
										</button>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</section>

				<!-- Order summary -->
				<section aria-labelledby="summary-heading" class="mt-10">
					<h2 id="summary-heading" class="sr-only">Order summary</h2>

					<div>
						<dl class="space-y-4">
							<div class="flex items-center justify-between">
								<dt class="text-base font-medium text-gray-900">Subtotal</dt>
								<dd class="ml-4 text-base font-medium text-gray-900">{{getCurrency(calcPrice())}}</dd>
							</div>
						</dl>
						<p class="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p>
					</div>

					<div class="mt-10">
						<button type="submit"
										class="w-full bg-primary-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500">
							Checkout
						</button>
					</div>

					<div class="mt-6 text-sm text-center">
						<p>
							or <a href="#" class="text-primary-600 font-medium hover:text-primary-500">Continue Shopping<span
								aria-hidden="true"> &rarr;</span></a>
						</p>
					</div>
				</section>
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
    },
    data() {
        return {
            productList: [],
        };
    },
    created() {
        this.productList = this.products;
    },
    methods: {
        calcPrice() {
            let sum = 0;
            if (this.productList) {
                this.productList.forEach((product) => {
                    sum += product.price;
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
    }
}
</script>
