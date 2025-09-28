<template>
	<div class="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
		<div class="absolute inset-0 overflow-hidden">
			<Image :src="imageSrc" customClass="w-full h-full object-center object-cover"/>
		</div>
		<div aria-hidden="true" class="absolute inset-0 bg-gray-900 bg-opacity-50"/>
		<div class="relative max-w-3xl mx-auto flex flex-col items-center text-center">
			<Text
				:content="heading"
				weight="extrabold"
				color="white"
				size="3xl"
				customClass="tracking-tight sm:text-4xl"
			/>
			<Text
				:content="description"
				color="white"
				size="xl"
				customClass="mt-3"
			/>
			<Link
				size="medium"
				color="gray-900"
				hoverBg="gray-100"
				customClass="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base sm:w-auto"
				:content="linkText"
			/>
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
	props: ['heading','imageSrc','description','linkText']
}
</script>
