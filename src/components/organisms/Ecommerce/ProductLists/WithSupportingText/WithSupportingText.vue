<template>
	<div class="bg-white">
		<div class="max-w-7xl mx-auto py-16 px-4 overflow-hidden sm:py-24 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
				<Link :leading="true" v-for="product in products" :key="product.id" :href="product.href" customClass="group" size="sm">
					<div class="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
						<Image :src="product.imageSrc" :alt="product.imageAlt" customClass="object-center object-cover" width="full" height="full" />
					</div>
					<Text customClass="mt-4" weight="medium" color="gray-900" :content="product.name" />
					<Text color="gray-500" customClass="italic" :content="product.availability" />
					<Text customClass="mt-2" weight="medium" color="gray-900" :content="product.price" />
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
