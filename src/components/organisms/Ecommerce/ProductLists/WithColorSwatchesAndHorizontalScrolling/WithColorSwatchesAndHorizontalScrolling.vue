<template>
	<div class="bg-white">
		<div class="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">
			<div class="px-4 flex items-center justify-between sm:px-6 lg:px-0">
				<Text size="2xl" weight="extrabold" color="gray-900" customClass="tracking-tight" content="Trending products" />
				<Link :leading="true" url="#" size="sm" weight="semibold" color="primary-600" hoverColor="primary-500" customClass="hidden sm:block">
					See	everything<span aria-hidden="true"> &rarr;</span>
				</Link>
			</div>

			<div class="mt-8 relative">
				<div class="relative w-full pb-6 -mb-6 overflow-x-auto">
					<ul role="list"
						class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
						<li v-for="product in products" :key="product.id"
							class="w-64 inline-flex flex-col text-center lg:w-auto">
							<div class="group relative">
								<div class="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
									<Image :src="product.imageSrc" :alt="product.imageAlt"
										customClass="object-center object-cover group-hover:opacity-75" width="full" height="full" />
								</div>
								<div class="mt-6">
									<Text size="sm" color="gray-500" :content="product.color" />
									<div class="mt-1 font-semibold text-gray-900">
										<Link :leading="true" :url="product.href">
											<span class="absolute inset-0" />
											{{ product.name }}
										</Link>
									</div>
									<Text customClass="mt-1" color="gray-900" :content="product.price" />
								</div>
							</div>

							<Text customClass="sr-only" content="Available colors" />
							<ul role="list" class="mt-auto pt-6 flex items-center justify-center space-x-3">
								<li v-for="color in product.availableColors" :key="color.name"
									class="w-4 h-4 rounded-full border border-black border-opacity-10"
									:style="{ backgroundColor: color.colorBg }">
									<Text customClass="sr-only" :content="color.name" />
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>

			<div class="mt-12 flex px-4 sm:hidden">
				<Link :leading="true" url="#" size="sm" weight="semibold" color="infigo-600" hoverColor="primary-500">See everything<span
						aria-hidden="true"> &rarr;</span></Link>
			</div>
		</div>
	</div>
</template>

<script>

	import Text from '../../../../atoms/Text/Text.vue'
	import Link from '../../../../atoms/Link/Link.vue'
	import Image from '../../../../atoms/Image/Image.vue'

	export default {
	  components: {
			Text,
			Link,
			Image,
	  },
	  props: {
			products: {
				type: Array,
				default: () => []
			},
	  },
	}
	</script>
