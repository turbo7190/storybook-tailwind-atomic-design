<template>
	<TransitionRoot as="template" :show="open">
		<Dialog as="div" class="fixed inset-0 overflow-hidden" @close="open = false">
			<div class="absolute inset-0 overflow-hidden">
				<TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100"
												 leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
					<DialogOverlay class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
				</TransitionChild>

				<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
					<TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
													 enter-from="translate-x-full" enter-to="translate-x-0"
													 leave="transform transition ease-in-out duration-500 sm:duration-700"
													 leave-from="translate-x-0" leave-to="translate-x-full">
						<div class="pointer-events-auto w-screen max-w-md">
							<div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
								<div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
									<div class="flex items-start justify-between">
										<DialogTitle class="text-lg font-medium text-gray-900"> Shopping cart</DialogTitle>
										<div class="ml-3 flex h-7 items-center">
											<button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500" @click="open = false">
												<span class="sr-only">Close panel</span>
												<XMarkIcon class="h-6 w-6" aria-hidden="true"/>
											</button>
										</div>
									</div>

									<div class="mt-8">
										<div class="flow-root">
											<ul role="list" class="-my-6 divide-y divide-gray-200">
												<li v-for="product in productList" :key="product.id" class="flex py-6">
													<div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
														<img :src="product.imageSrc" :alt="product.imageAlt"
																 class="h-full w-full object-cover object-center"/>
													</div>

													<div class="ml-4 flex flex-1 flex-col">
														<div>
															<div class="flex justify-between text-base font-medium text-gray-900">
																<h3>
																	<a :href="product.href"> {{ product.name }} </a>
																</h3>
																<p class="ml-4">{{ getCurrency(product.price) }}</p>
															</div>
															<p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
														</div>
														<div class="flex flex-1 items-end justify-between text-sm">
															<p class="text-gray-500">Qty {{ product.quantity }}</p>

															<div class="flex">
																<button type="button" @click="removeItem(product.id)"
                                                                        class="font-medium text-primary-600 hover:text-primary-500">
                                                                    Remove
																</button>
															</div>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div class="border-t border-gray-200 py-6 px-4 sm:px-6">
									<div class="flex justify-between text-base font-medium text-gray-900">
										<p>Subtotal</p>
										<p>{{getCurrency(calcPrice())}}</p>
									</div>
									<p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
									<div class="mt-6">
										<a href="#"
											 class="flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700">Checkout</a>
									</div>
									<div class="mt-6 flex justify-center text-center text-sm text-gray-500">
										<p>
											or
											<button type="button" class="font-medium text-primary-600 hover:text-primary-500"
															@click="open = false">Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
										</p>
									</div>
								</div>
							</div>
						</div>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script>
import {ref} from 'vue'
import {Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
import {XMarkIcon} from '@heroicons/vue/24/outline'

export default {
	components: {
		Dialog,
		DialogOverlay,
		DialogTitle,
		TransitionChild,
		TransitionRoot,
		XMarkIcon,
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
    },
	setup() {
		const open = ref(true)

		return {
			open,
		}
	},
}
</script>
