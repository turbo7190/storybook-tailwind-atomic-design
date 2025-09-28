<template>
	<div class="bg-white">
		<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<Text size="xl" weight="bold" color="gray-900" content="Customers also bought" />

			<div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
				<div v-for="product in products" :key="product.id">
					<div class="relative">
						<div class="relative w-full h-72 rounded-lg overflow-hidden">
							<Image :src="product.imageSrc" :alt="product.imageAlt" customClass="object-center object-cover" width="full" height="full" />
						</div>
						<div class="relative mt-4">
							<Text size="sm" weight="medium" color="gray-900" :content="product.name" />
							<Text customClass="mt-1" size="sm" color="gray-500" :content="product.color" />
						</div>
						<div class="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
							<div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"/>
							<Text customClass="relative" size="lg" weight="semibold" color="white" :content="product.price" />
						</div>
					</div>
					<div class="mt-6">
						<Link :leading="true" :href="product.href" 
							size="sm" weight="medium" color="gray-900"
							 customClass="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center hover:bg-gray-200"
						>Add to bag<span class="sr-only">, {{ product.name }}</span></Link>
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
