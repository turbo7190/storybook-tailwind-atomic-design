<template>
	<div class="bg-white">
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<Text customClass="sr-only" content="Products" />

			<div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
				<div v-for="product in products" :key="product.id"
						 class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
					<div class="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
						<Image :src="product.imageSrc" :alt="product.imageAlt"
							width="full" height="full" customClass="object-center object-cover sm:w-full sm:h-full" />
					</div>
					<div class="flex-1 p-4 space-y-2 flex flex-col">
						<div class="text-sm font-medium text-gray-900">
							<Link :url="product.href" :leading="true">
								<span aria-hidden="true" class="absolute inset-0"/>
								<Text :content="product.name" />
							</Link>
						</div>
						<Text size="sm" color="gray-500" :content="product.description" />
						<div class="flex-1 flex flex-col justify-end">
							<Text size="sm" color="gray-500" customClass="italic" :content="product.options" />
							<Text size="base" weight="medium" color="gray-900" :content="product.price" />
						</div>
					</div>
				</div>
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
