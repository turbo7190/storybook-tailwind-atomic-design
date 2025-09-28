<template>
	<div class="min-h-full grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2">
		<div v-for="item in items" :key="item.name" class="relative flex">
			<Image :src="item.imageSrc" alt=""
					 customClass="absolute inset-0 w-full h-full object-center object-cover" />
			<div class="relative w-full flex flex-col items-start justify-end bg-black bg-opacity-40 p-8 sm:p-12">
				<Text
					:content="item.name"
					color="white"
					size="lg"
					customClass="text-opacity-75"
				/>
				<Text
					:content="item.description"
					color="white"
					size="2xl"
					customClass="mt-1"
				/>
				<Link
					size="sm"
					content="Shop now"
					color="gray-900"
					hoverColor="primary-500"
					customClass="mt-4 bg-white py-2.5 px-4 rounded-md hover:bg-gray-50"
				/>
			</div>
		</div>
	</div>
</template>
<script>

import Image from "../../../../atoms/Image/Image.vue";
import Link from "../../../../atoms/Link/Link.vue";
import Text from "../../../../atoms/Text/Text.vue";

export default {
	components: {
		Image,
		Link,
		Text
	},
  	props: ['items']
}
</script>
