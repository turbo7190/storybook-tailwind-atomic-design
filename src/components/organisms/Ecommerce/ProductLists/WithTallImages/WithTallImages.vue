<template>
	<div class="bg-white">
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<Text id="products-heading" customClass="sr-only" content="Products" />

			<div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
				<Link :leading="true" v-for="product in products" :key="product.id" :url="product.href" customClass="group">
					<div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
						<Image :src="product.imageSrc" :alt="product.imageAlt"
								 customClass="object-center object-cover group-hover:opacity-75" width="full" height="full" />
					</div>
					<div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
						<Text :content="product.name" />
						<Text :content="product.price" />
					</div>
					<Text customClass="mt-1 italic" size="sm" color="gray-500" :content="product.description" />
				</Link>
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
