<template>
	<div class="bg-white">
		<div class="pt-32 overflow-hidden sm:pt-14">
			<div class="bg-gray-800">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="relative pt-48 pb-16 sm:pb-24">
						<div>
							<Text
								:content="heading1"
								weight="extrabold"
								color="white"
								size="4xl"
								customClass="tracking-tight md:text-5xl"
							/>
							<Text
								:content="heading2"
								weight="extrabold"
								color="white"
								size="4xl"
								customClass="tracking-tight md:text-5xl"
							/>
							<div class="mt-6 text-base">
								<Link
									size="medium"
									weight="semibold"
									color="white"
									:content="linkText + '&rarr;'"
								/>
							</div>
						</div>

						<div class="absolute -top-32 left-1/2 transform -translate-x-1/2 sm:top-6 sm:translate-x-0">
							<div class="ml-24 flex space-x-6 min-w-max sm:ml-3 lg:space-x-8">
								<div v-for="(item,i) in items" :key="item.name" :class="`${i%2 === 1 ?'sm:-mt-20' :''}`" class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
									<div v-for="(image, index) in item.images" :key="image.src" :class="`${index > 0 ?'mt-6 flex-shrink-0 sm:mt-0' :'flex-shrink-0'}`" >
										<Image :src="image.src" customClass="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" />
									</div>
								</div>
							</div>
						</div>
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
	props: ['heading1','heading2','linkText','items']
}
</script>