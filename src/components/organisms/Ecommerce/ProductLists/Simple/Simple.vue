<template>
	<div class="bg-white">
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<Text customClass="sr-only" content="Products" />

			<div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
				<Link :leading="true" v-for="product in products" :key="product.id" :url="product.href" customClass="group">
					<div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
						<Image :src="product.imageSrc" :alt="product.imageAlt"
								 customClass="object-center group-hover:opacity-75" width="full" height="full" />
					</div>
					<Text customClass="mt-4" size="sm" color="gray-700" :content="product.name" />
					<Text customClass="mt-1" size="lg" weight="medium" color="gray-900" :content="product.price" />
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
		Image
	},
	props: {
		products: {
			type: Array,
			default: () => []
		},
	},
}
</script>
