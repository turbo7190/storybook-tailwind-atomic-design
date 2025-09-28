<template>
	<div class="bg-white">
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<Text size="2xl" weight="extrabold" customClass="tracking-tight" color="gray-900" content="Customers also purchased" />

			<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				<div v-for="product in products" :key="product.id" class="group relative">
					<div
							class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
						<Image :src="product.imageSrc" :alt="product.imageAlt"
								 customClass="object-center object-cover lg:w-full lg:h-full" width="full" height="full" />
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<div class="text-sm text-gray-700">
								<Link :leading="true" :url="product.href">
									<span aria-hidden="true" class="absolute inset-0"/>
									{{ product.name }}
								</Link>
							</div>
							<Text customClass="mt-1" size="sm" color="gray-500" :content="product.color" />
						</div>
						<Text size="sm" weight="mediun" color="gray-900" :content="product.price" />
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

