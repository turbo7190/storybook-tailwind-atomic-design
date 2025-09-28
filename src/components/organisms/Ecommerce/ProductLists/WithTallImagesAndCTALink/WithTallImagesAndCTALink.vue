<template>
	<div class="bg-white">
		<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
			<div class="sm:flex sm:items-baseline sm:justify-between">
				<Text size="2xl" weight="extrabold" color="gray-900" customClass="tracking-tight" content="Our Favorites" />
				<Link :leading="true" url="#" size="sm" weight="semibold" color="primary-600" hoverColor="primary-500"
				customClass="hidden sm:block">Browse all
					favorites<span aria-hidden="true"> &rarr;</span></Link>
			</div>

			<div class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
				<div v-for="product in products" :key="product.id" class="group relative">
					<div
							class="w-full h-96 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3">
						<Image :src="product.imageSrc" :alt="product.imageAlt" customClass="object-center object-cover" width="full" height="full" />
					</div>
					<div class="mt-4 text-base font-semibold text-gray-900">
						<Link :leading="true" :url="product.href">
							<span class="absolute inset-0"/>
							{{ product.name }}
						</Link>
					</div>
					<Text customClass="mt-1" size="sm" color="gray-500" :content="product.price" />
				</div>
			</div>

			<div class="mt-6 sm:hidden">
				<Link :leading="true" url="#" size="sm" weight="semibold" color="primary-600" hoverColor="primary-500"
				customClass="block">Browse all favorites<span
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
