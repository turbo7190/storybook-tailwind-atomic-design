<template>
	<div class="bg-white">
		<div class="relative bg-gray-900">
			<!-- Decorative image and overlay -->
			<div aria-hidden="true" class="absolute inset-0 overflow-hidden">
				<Image :src="imageSrc" customClass="w-full h-full object-center object-cover"/>
			</div>
			<div aria-hidden="true" class="absolute inset-0 bg-gray-900 opacity-50"/>

			<div class="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">

				<Text
					:content="heading"
					weight="extrabold"
					color="white"
					size="4xl"
					customClass="tracking-tight lg:text-6xl"
				/>
				<Text
					:content="description"
					color="white"
					size="xl"
					customClass="mt-4"
				/>
				<Link
					size="medium"
					color="gray-900"
					hoverBg="gray-100"
					customClass="mt-8 w-full inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base sm:w-auto"
					:content="linkText"
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
	props: ['heading','imageSrc','description','linkText']
}
</script>