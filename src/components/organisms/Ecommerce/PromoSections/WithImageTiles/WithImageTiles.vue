<template>
	<div class="relative bg-white overflow-hidden">
		<div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
			<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
				<div class="sm:max-w-lg">
					<Text
						:content="heading"
						weight="extrabold"
						color="gray-900"
						size="4xl"
						customClass="tracking-tight sm:text-6xl"
					/>
					<Text
						:content="description"
						color="gray-500"
						size="xl"
						customClass="mt-4"
					/>
				</div>
				<div>
					<div class="mt-10">
						<!-- Decorative image grid -->
						<div aria-hidden="true"
								 class="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
							<div
									class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
								<div class="flex items-center space-x-6 lg:space-x-8">
									<div v-for="(item,i) in items" :key="item.name" class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
										<div v-for="(image, index) in item.images" :key="image.src" :class="`${index === 0 && i === 0 ?'w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100' :'w-44 h-64 rounded-lg overflow-hidden'}`" >
											<Image :src="image.src" customClass="w-full h-full object-center object-cover"/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Link
							size="medium"
							color="white"
							hoverBg="primary-700"
							customClass="inline-block text-center bg-primary-600 border border-transparent rounded-md py-3 px-8"
							:content="linkText"
						/>
					</div>
				</div>
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
	props: ['heading','description','linkText','items']
}
</script>
